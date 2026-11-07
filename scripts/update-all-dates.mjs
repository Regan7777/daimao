import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const TARGET_SLASH_DATE = '2026/11/07'
const TARGET_CN_DATE = '2026年11月7日'
const TARGET_DASH_DATE = '2026-11-07'

// 1. 更新 airports.ts
const airportsPath = 'docs/.vuepress/config/airports.ts'
let airportsContent = readFileSync(airportsPath, 'utf8')
airportsContent = airportsContent.replace(
  /export const airportDataLastReviewed = '[^']+'/,
  `export const airportDataLastReviewed = '${TARGET_DASH_DATE}'`
)
airportsContent = airportsContent.replace(
  /export const airportDataLastModified = '[^']+'/,
  `export const airportDataLastModified = '${TARGET_DASH_DATE}'`
)
airportsContent = airportsContent.replace(
  /"checkedAt":\s*"2026-\d{2}-\d{2}"/g,
  `"checkedAt": "${TARGET_DASH_DATE}"`
)
writeFileSync(airportsPath, airportsContent, 'utf8')
console.log('Updated airports.ts dates to', TARGET_DASH_DATE)

// 2. 遍历 docs 下所有 Markdown 文件
function getMdFiles(dir) {
  let res = []
  for (const item of readdirSync(dir)) {
    const full = join(dir, item)
    if (item === 'node_modules' || item.startsWith('.')) continue
    if (statSync(full).isDirectory()) {
      res = res.concat(getMdFiles(full))
    } else if (item.endsWith('.md')) {
      res.push(full)
    }
  }
  return res
}

const mdFiles = getMdFiles('docs')
let updatedMdCount = 0

for (const filePath of mdFiles) {
  let content = readFileSync(filePath, 'utf8')
  let changed = false

  // 处理 Frontmatter
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (fmMatch) {
    let fm = fmMatch[1]
    const origFm = fm

    // 替换已有的日期字段
    if (/^createTime:/m.test(fm)) {
      fm = fm.replace(/^createTime:\s*.*$/m, `createTime: ${TARGET_SLASH_DATE}`)
    }
    if (/^dateModified:/m.test(fm)) {
      fm = fm.replace(/^dateModified:\s*.*$/m, `dateModified: ${TARGET_SLASH_DATE}`)
    } else if (/^createTime:/m.test(fm)) {
      // 若有 createTime 但没有 dateModified，随发布日期更新插入 dateModified
      fm = fm.replace(/^(createTime:\s*.*)$/m, `$1\ndateModified: ${TARGET_SLASH_DATE}`)
    }
    if (/^date:/m.test(fm)) {
      fm = fm.replace(/^date:\s*.*$/m, `date: ${TARGET_SLASH_DATE}`)
    }
    if (/^lastUpdated:/m.test(fm)) {
      fm = fm.replace(/^lastUpdated:\s*.*$/m, `lastUpdated: ${TARGET_SLASH_DATE}`)
    }
    if (/^updateTime:/m.test(fm)) {
      fm = fm.replace(/^updateTime:\s*.*$/m, `updateTime: ${TARGET_SLASH_DATE}`)
    }

    if (fm !== origFm) {
      content = content.replace(/^---\r?\n[\s\S]*?\r?\n---/, `---\n${fm}\n---`)
      changed = true
    }
  }

  // 处理正文中的更新时间与核验时间
  const origContent = content

  // 更新时间 / 文档更新 / 页面更新：2026年xx月xx日
  content = content.replace(
    /^(更新时间|文档更新|页面更新)[：:](\s*\*?\*?)2026年\d{1,2}月(?:\d{1,2}日)?(\*?\*?)/gm,
    `$1：$2${TARGET_CN_DATE}$3`
  )

  // 客户端来源复核 / 资料核对 / 资料复核日期：2026年xx月xx日
  content = content.replace(
    /^(客户端来源复核|资料核对|资料复核日期)[：:]\s*2026年\d{1,2}月(?:\d{1,2}日)?/gm,
    `$1：${TARGET_CN_DATE}`
  )

  // 表格中 | 最近复核 | 2026年xx月xx日 |
  content = content.replace(
    /^(\|\s*最近复核\s*\|\s*)2026年\d{1,2}月(?:\d{1,2}日)?(\s*\|)$/gm,
    `$1${TARGET_CN_DATE}$2`
  )

  // 修复带括号内或前缀的特定核对日期表述，例如：“TikTok官方资料核对日期为2026年9月28日”
  content = content.replace(
    /(核对日期(?:为|：))\s*2026年\d{1,2}月\d{1,2}日/g,
    `$1${TARGET_CN_DATE}`
  )

  if (content !== origContent) {
    changed = true
  }

  if (changed) {
    writeFileSync(filePath, content, 'utf8')
    updatedMdCount++
  }
}

console.log(`Updated dates in ${updatedMdCount} of ${mdFiles.length} markdown files.`)

