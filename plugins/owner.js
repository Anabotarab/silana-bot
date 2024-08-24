import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 🧚🏻‍♀️💗معلومات عن صاحبة البوت💗🧚🏻‍♀️ 」*

*المطورة :*\nwa.me/212777532483
❀𝑯𝑨𝑹𝑳𝑬𝒀 𝑸𝑼𝑰𝑵𝑵🤍--

`.trim()
  m.reply(caption)
}
handler.help = ['المطور','owner']
handler.tags = ['infobot']
handler.command = /^(المطور|owner)$/i
handler.limit = false

export default handler
