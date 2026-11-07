import https from 'node:https'

const host = 'downone.shenxingjstt.xyz'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTcxOCwic2Vzc2lvbiI6ImZiMjZhZTc1MDZhZjU5ZDdiM2VlZWIxNDkwMjQzOWIyIn0.WK5qfSapNXokfXBFQaKfCdwUnI4uCzipHbCwka30e0I'

function getJson(path) {
  return new Promise((resolve, reject) => {
    https.get({
      hostname: host,
      path: path,
      headers: {
        'Authorization': token,
        'User-Agent': 'Mozilla/5.0'
      }
    }, res => {
      let b = ''
      res.on('data', c => b += c)
      res.on('end', () => resolve({ status: res.statusCode, body: b }))
    }).on('error', reject)
  })
}

async function check() {
  const noticeRes = await getJson('/api/v1/user/notice/fetch')
  console.log('Notice:', noticeRes.body)
}

check().catch(console.error)

