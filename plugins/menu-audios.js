let handler = async function (m, { conn, text, usedPrefix }) {

    m.react('🐉')

let m2 = `
│ ♛ＥＳＮＥＩＤＥＲ ＢＯＴ│ ♛

│ ♛►🐉 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝙴𝚂𝙽𝙴𝙸𝙳𝙴𝚁-𝙱𝙾𝚃
│ ♛►🐉 𝗧𝗲 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗼 𝗺𝗶 𝗺𝗲𝗻𝘂 𝗮𝘂𝗱𝗶𝗼𝘀


*╭──「 AUDIOS 」*
*│ ♛►🐉* 𝘢𝘳𝘢
*│ ♛►🐉* 𝘧𝘪𝘯𝘰 𝘴𝘦ñ𝘰𝘳𝘦𝘴
*│ ♛►🐉* 𝘣𝘢ñ𝘢𝘵𝘦
*│ ♛►🐉* 𝘣𝘶𝘦𝘯𝘰𝘴 𝘥𝘪𝘢𝘴
*│ ♛►🐉* 𝘥𝘪𝘢𝘨𝘯ó𝘴𝘵𝘪𝘤𝘰
*│ ♛►🐉* 𝘦𝘭𝘮𝘰
*│ ♛►🐉* 𝘱𝘶𝘵𝘰
*│ ♛►🐉* 𝘨𝘦𝘮𝘪𝘥𝘰
*│ ♛►🐉* 𝘱𝘰𝘣𝘳𝘦 𝘱𝘦𝘳𝘳𝘢
*│ ♛►🐉* 𝘮𝘢𝘯𝘤𝘰
*│ ♛►🐉* 𝘮𝘪𝘢𝘶
*│ ♛►🐉* 𝘵𝘳𝘢𝘬𝘢
*│ ♛►🐉* 𝘵𝘶𝘳𝘪𝘱
*│ ♛►🐉* 𝘩𝘪𝘮𝘯𝘰 𝘱𝘰𝘵𝘢𝘹𝘪𝘦
*│ ♛►🐉* 𝘢
*│ ♛►🐉* :𝘤
*└┉┅━━━━━◄••♛••►━━━━━━┅┉┘*
`
    let pp = 'https://telegra.ph/file/5284524e12b9b7ab59985.jpg' 

global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\n𝙴𝚂𝙽𝙴𝙸𝙳𝙴𝚁-𝙱𝙾𝚃🐉\n`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:xd\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    await conn.reply(m.chat, ' 𝙇𝙊𝘼𝘿𝙄𝙉𝙂....', fcontact);
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['menuaudios']
handler.tags = ['main']
handler.command = ['menuaudios', 'audiosmenu'] 

export default handler