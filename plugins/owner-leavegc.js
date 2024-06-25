const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '*𝖠𝖽𝗂𝗈𝗌 hijos de puta no los voy a extrañar 😝🖕🏻 𝙴𝚂𝙽𝙴𝙸𝙳𝙴𝚁-𝙱𝙾𝚃 se va *');
  await conn.groupLeave(id);
};
handler.command = /^(out|salir|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;;