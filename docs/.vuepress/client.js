import './theme/styles/custom.css'
import HomeStart from './components/HomeStart.vue'

export default {
  enhance({ app }) {
    app.component('HomeStart', HomeStart)
  },
  mounted() {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'zh-CN'
      document.documentElement.setAttribute('translate', 'no')
      document.documentElement.classList.add('notranslate')
      document.body?.setAttribute('translate', 'no')
      document.body?.classList.add('notranslate')
    }
    const getImageAlt = (img) => {
      const src = img.getAttribute('src') || ''
      const filename = src.split('/').pop()?.split(/[?#]/)[0]?.replace(/\.[^.]+$/, '')

      return filename ? `呆毛 ${filename} 图片` : '呆毛机场推荐图片'
    }
    const fixAlt = () => {
      document.querySelectorAll('img').forEach(img => {
        // An explicit empty alt is intentional for decorative images.
        if (!img.hasAttribute('alt')) {
          img.setAttribute('alt', getImageAlt(img))
        }
      })
    }

    fixAlt()
    const observer = new MutationObserver(fixAlt)
    observer.observe(document.body, { childList: true, subtree: true })
  }
}
