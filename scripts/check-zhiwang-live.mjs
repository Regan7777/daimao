import https from 'node:https'

https.get('https://zhiwang.one', (res) => {
  let data = ''
  res.on('data', chunk => data += chunk)
  res.on('end', () => {
    const titleMatch = data.match(/<title>([^<]+)<\/title>/)
    const descMatch = data.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/)
    console.log('Title:', titleMatch ? titleMatch[1] : 'none')
    console.log('Description:', descMatch ? descMatch[1] : 'none')
    const links = data.match(/href="([^"]+)"/g)
    if (links) {
      console.log('Sample links (first 20):')
      links.slice(0, 20).forEach(l => console.log('  ' + l))
    }
  })
}).on('error', err => console.error(err))

