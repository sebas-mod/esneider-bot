
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {

  if (!text) throw `${mssg.avisoGene4}\n\n*INGRESA EL NOMBRE*\n_Ejemplo: ${usedPrefix + command} Mamita Rica_`
        let res = await yts(text)
        let vid = res.videos[0]
        if (!vid) throw `✳️ Vídeo/Audio no encontrado`
        let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('🎧') 
  let play = `
        *≡ 🌿 𝗚𝗘𝗡𝗘𝗦𝗜𝗦 𝗕𝗢𝗧 🌿*

*📌 𝗧𝗶𝘁𝘂𝗹𝗼 »* ${vid.title}
*📆 𝗖𝗿𝗲𝗮𝗱𝗼 »* ${vid.ago}
*⌚ 𝗗𝘂𝗿𝗮𝗰𝗶𝗼𝗻 »* ${vid.timestamp}
*👀 𝗩𝗶𝘀𝗶𝘁𝗮𝘀 »* ${vid.views.toLocaleString()}
`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['📁 MP3 DOC', `${usedPrefix}ytmp3doc ${url}`],
    ['📁 MP4 DOC', `${usedPrefix}ytmp4doc ${url}`]
    ['🍀 MENU', `${usedPrefix}allmenu`]
  ], null, [['🍒 CANAL', `${fgcanal}`]], m)
}
handler.help = ['play3']
handler.tags = ['dl']
handler.command = ['play3', 'playvid']
handler.disabled = false

export default handler