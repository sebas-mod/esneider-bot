import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
let limit = 200

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) return star.reply(m.chat, 'ðŸš© Ingresa el enlace del vÃ­deo de YouTube junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, rcanal)
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, `Verifica que el enlace sea de YouTube.`, m, rcanal).then(_ => m.react('âœ–ï¸'))
let q = '128kbps'

await m.react('ðŸ•“')
try {
let v = args[0]
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let title = await yt.title
let size = await yt.audio[q].fileSizeH
let thumbnail = await yt.thumbnail

let img = await (await fetch(`${thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('âœ–ï¸'))
	let txt = 'Y O U T U B E  -  M P 3 D O C`\n\n'
       txt += `	   *Titulo* : ${title}\n`
       txt += `	   *Calidad* : ${q}\n`
       txt += `	   *TamaÃ±o* : ${size}\n\n`
       txt += `> *- El audio se esta enviando espera un momento, soy lento como una tortuga 🐢. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('âœ…')
} catch {
try {
let yt = await fg.yta(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let img = await (await fetch(`${vid.thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('âœ–ï¸'))
	let txt = '`ä¹‚  Y O U T U B E  -  M P 3 D O C`\n\n'
       txt += `	âœ©   *Titulo* : ${title}\n`
       txt += `	âœ©   *Calidad* : ${q}\n`
       txt += `	âœ©   *TamaÃ±o* : ${size}\n\n`
       txt += `> *- â†» El audio se esta enviando espera un momento, soy lento como una tortuga 🐢. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('âœ…')
} catch {
try {
let yt = await fg.ytmp3(args[0], q)
let { title, dl_url, size, thumb } = yt 

let img = await (await fetch(`${thumb}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se cancelÃ³ la Descarga.`, m, rcanal).then(_ => m.react('âœ–ï¸'))
	let txt = '`ä¹‚  Y O U T U B E  -  M P 3 D O C`\n\n'
       txt += `	âœ©   *Titulo* : ${title}\n`
       txt += `	âœ©   *Calidad* : ${q}\n`
       txt += `	âœ©   *TamaÃ±o* : ${size}\n\n`
       txt += `> *- â†» El audio se esta enviando espera un momento, soy lento como una tortuga 🐢. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, rcanal)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('âœ…')
} catch {
await m.react('âœ–ï¸')
}}}}
handler.help = ['ytmp3doc *<link yt>*']
handler.tags = ['dl']
handler.command = ['ytmp3doc', 'ytadoc'] 
//handler.limit = 1
handler.register = true 

export default handler
