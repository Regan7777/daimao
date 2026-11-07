import { plumeTheme } from 'vuepress-theme-plume'
import { normalizeDate } from './page-seo'
import { hostname } from './site'

export const theme = plumeTheme({
  cache: 'memory',
  hostname,
  logo: '/logo.svg',
  externalLinkIcon: false,
  // Our maintained dates are calendar days; do not imply an exact edit time.
  lastUpdated: { formatOptions: { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC', forceLocale: true } },
  footer: { message: "呆毛 © 2026 版权所有" },
  navbar: [
    { text: '首页', link: '/', icon: 'material-symbols:home-rounded' },
    { text: '呆毛雷达', link: '/posts/jichang-tuijian/', icon: 'material-symbols:radar' },
    {
      text: '场景精选',
      icon: 'material-symbols:leaderboard',
      items: [
        { text: '免费机场', link: '/rankings/cheap/', icon: 'material-symbols:money-off' },
        { text: '不限时备用包', link: '/rankings/no-expiry/', icon: 'material-symbols:all-inclusive' },
        { text: 'Clash通用订阅', link: '/rankings/clash/', icon: 'material-symbols:hive-outline' },
        { text: 'ChatGPT / AI专线', link: '/rankings/chatgpt/', icon: 'material-symbols:smart-toy-outline' },
        { text: '4K流媒体解锁', link: '/rankings/streaming/', icon: 'material-symbols:live-tv-outline' },
      ],
    },
    {
      text: '极客教程与工具',
      icon: 'ic:baseline-construction',
      items: [
        { text: '全平台客户端下载', link: '/posts/airport-tools/', icon: 'material-symbols:devices-outline' },
        { text: '科学上网入门指南', link: '/posts/vpn-guide-2026/', icon: 'material-symbols:school-outline' },
        { text: 'FlClash 配置教程', link: '/posts/flclash-guide-2026/', icon: 'material-symbols:devices-outline' },
        { text: 'Clash Verge Rev 教程', link: '/posts/clash-verge-guide-2026/', icon: 'ic:baseline-personal-video' },
        { text: 'Clash Mi iOS 教程', link: '/posts/clash-mi-guide-2026/', icon: 'material-symbols:phone-iphone' },
        { text: 'Shadowrocket 小火箭教程', link: '/posts/shadowrocket-guide-2026/', icon: 'ic:baseline-rocket-launch' },
        { text: 'Hiddify 现代跨平台教程', link: '/posts/hiddify-guide-2026/', icon: 'material-symbols:hub-outline' },
        { text: 'AI 工具与打不开排错', link: '/posts/ai-tools-not-working/', icon: 'material-symbols:smart-toy-outline' },
        { text: 'Telegram 交流防封教程', link: '/posts/telegram-guide-2026/', icon: 'material-symbols:send-outline' },
      ],
    },
    {
      text: '避坑看板',
      icon: 'material-symbols:shield-outline',
      items: [
        { text: '跑路失联监测雷达', link: '/risk-monitor/', icon: 'material-symbols:warning-outline' },
        { text: '呆毛测绘原则与数据来源', link: '/methodology/', icon: 'material-symbols:science-outline' },
        { text: '关于呆毛', link: '/about/', icon: 'material-symbols:info-outline' },
      ],
    },
  ],
  profile: {
    name: '呆毛',
    description: '呆毛博客 · 专注2026机场推荐、节点评测与全平台客户端配置。',
  },
  social: [],
  navbarSocialInclude: [],
  markdown: {
    collapse: true,
    imageSize: 'local',
  },
  blog: {
    tags: true,
    categories: true,
    archives: true,
    tagsLink: '/blog/tags/',
    categoriesLink: '/blog/categories/',
    archivesLink: '/blog/archives/',
    postCover: 'right',
  },
  plugins: {
    sitemap: {
      excludePaths: [
        '/404.html',
        '/blog/',
        '/blog/tags/',
        '/blog/categories/',
        '/blog/archives/',
      ],
      modifyTimeGetter: (page: any) => {
        const explicitDate = normalizeDate(page.frontmatter.dateModified || page.frontmatter.updateTime || page.frontmatter.lastUpdated || page.frontmatter.createTime || page.frontmatter.date)
        if (explicitDate) return explicitDate

        return page.data.git?.updatedTime ? new Date(page.data.git.updatedTime).toISOString() : ''
      },
    },
    seo: false,
  },
})
