let handler = (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.premium = true
handler.rowner = false
handler.owner = false

module.exports = handler
