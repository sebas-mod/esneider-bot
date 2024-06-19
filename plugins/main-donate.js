
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `

🐉𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝘽𝙊𝙏
wa.me/5491140951814

🐉𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈
https://www.instagram.com/sebas_dzn

_Puedes apoyar el bot dando tu estrellita en nuestro repositorio_

🐉 𝙍𝙀𝙋𝙊𝙎𝙄𝙏𝙊𝙍𝙄𝙊



🐉𝙚𝙨𝙣𝙚𝙞𝙙𝙚𝙧-𝙗𝙤𝙩: 𝙨𝙚𝙗𝙖𝙨
`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rcanal)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

