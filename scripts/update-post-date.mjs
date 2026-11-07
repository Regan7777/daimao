import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * 保持文章更新日期随发布日期同步更新
 * 用法:
 *  - 单篇更新: node scripts/update-post-date.mjs docs/工具/Clashforandroid.md
 *  - 全栈同步: node scripts/update-post-date.mjs
 */

const getDisplayDate = (value = '') => {
  const [year, month, day] = value.replace(/\//g, '-').split('-').map((part) => Number(part))
  if (!year || !month || !day) return undefined
  return `${year}年${month}月${day}日`
}

function updateFile(filePath) {
  if (!existsSync(filePath)) return false
  let content = readFileSync(filePath, 'utf8')
  let changed = false

  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!fmMatch) return false

  let fm = fmMatch[1]
  const createTimeMatch = fm.match(/createTime:\s*([^\r\n]+)/)
  const targetDate = createTimeMatch ? createTimeMatch[1].trim() : '2026/11/07'
  const displayDate = getDisplayDate(targetDate) || '2026年11月7日'

  // 1. 确保 dateModified 随发布日期更新
  if (/^dateModified:/m.test(fm)) {
    fm = fm.replace(/^dateModified:\s*.*$/m, `dateModified: ${targetDate}`)
  } else {
    fm = fm.replace(/^(createTime:\s*.*)$/m, `$1\ndateModified: ${targetDate}`)
  }

  if (fm !== fmMatch[1]) {
    content = content.replace(/^---\r?\n[\s\S]*?\r?\n---/, `---\n${fm}\n---`)
    changed = true
  }

  // 2. 正文更新时间随发布日期更新（支持行首有无 ** 粗体）
  const origContent = content
  content = content.replace(
    /^(\s*\*?\*?\s*)(更新时间|文档更新|页面更新|资料更新|页面编辑)[：:](\s*\*?\*?\s*)2026年\d{1,2}月(?:\d{1,2}日)?(\*?\*?)/gm,
    `$1$2：$3${displayDate}$4`
  )
  if (content !== origContent) changed = true

  if (changed) {
    writeFileSync(filePath, content, 'utf8')
    console.log(`Synced dates in ${filePath} -> ${targetDate} (${displayDate})`)
    return true
  }
  return false
}

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

const targetFile = process.argv[2]
if (targetFile) {
  updateFile(targetFile)
} else {
  const files = getMdFiles('docs')
  let count = 0
  for (const file of files) {
    if (updateFile(file)) count++
  }
  console.log(`Finished: synced ${count} file(s).`)
}

