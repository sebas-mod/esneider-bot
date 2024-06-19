const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('🐉') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `📧 𝙈𝙚𝙣𝙨𝙖𝙟𝙚: ${pesan}\n🐉𝐏𝐀𝐑𝐓𝐈𝐂𝐈𝐏𝐀𝐍𝐓𝐄𝐒: _*${participants.length}*_`;
  let teks = `🐉ＲＥＶＩＶＡＮ ＭＩＥＲＤ＠Ｓ🐉\n\n ${oi}\n\n┏・𝐑𝐄𝐕𝐈𝐕𝐀𝐍 𝐌𝐀𝐍𝐂@𝐒🐉!\n`;
  for (const mem of participants) {
    teks += `┣・🐉 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗・🐉 𝙚𝙨𝙣𝙚𝙞𝙙𝙚𝙧-𝙗𝙤𝙩`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
