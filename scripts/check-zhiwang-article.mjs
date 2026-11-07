import https from 'node:https'

https.get('https://zhiwang.one/posts/jichang-tuijian/', (res) => {
  let data = ''
  res.on('data', chunk => data += chunk)
  res.on('end', () => {
    console.log('STATUS:', res.statusCode)
    const titleMatch = data.match(/<title>([^<]+)<\/title>/)
    const canonicalMatch = data.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)
    console.log('Title:', titleMatch ? titleMatch[1] : 'none')
    console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'none')
    const sample = data.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
    console.log('Text preview:', sample.slice(0, 500))
  })
}).on('error', err => console.error(err))

