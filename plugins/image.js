import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
const prohibited = ['caca', 'polla', 'porno', 'porn', 'zb', 'trma', 'zbi zabi', 'puta', 'puto', 'ليونيل', 'ميسي', 'إسرائيل','pussy', 'hentai', 'pene', 'israel', 'xn xx', 'zoofilia', 'mia khalifa', 'سكس', 'boobse', 'بورنو', 'إباحي', 'ميا خليفة', 'pornhub', 'xnxx', 'xvideos', 'ماية خليفة', 'vagina', 'marsha may', 'misha cross','هنتاي','منحرف','انحراف', 'sexmex', 'furry', 'كس', 'furra', 'xxx', 'rule34', 'panocha', 'pedofilia', 'necrofilia','نيك','busy','ترمة', 'pinga', 'horny', 'ass', 'nude', 'popo', 'nsfw', 'femdom', 'futanari', 'erofeet', 'sexo', 'sex', 'yuri', 'ero', 'ecchi', 'blowjob', 'anal', 'ahegao', 'قحبة', 'verga', 'trasero', 'violation', 'violacion', 'bdsm', 'cachonda', '+18', 'cp', 'mia marin', 'lana rhoades', 'cepesito', 'hot', 'buceta', 'xxx']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return conn.reply(m.chat, '*لاتحلم فلن أرسل لك هذا 🙅🏻‍♀️💗*', m, )

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `*تحميل صور من غوغل*\nمثــــال :\n*.صورة* هارلي كوين`

  await conn.sendMessage(m.chat, { react: { text: "🥗",key: m.key,}
  })
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `> *❀𝑯𝑨𝑹𝑳𝑬𝒀 𝑸𝑼𝑰𝑵𝑵💃🏻*` , m) 
}
handler.help = ['صورة']
handler.tags = ['downloader']
handler.command = /^(صورة)$/i

export default handler
