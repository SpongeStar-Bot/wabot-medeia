let handler = function (m) {
  // this.sendContact(m.chat, '628872157942', 'Medeia-bot-alive', m)
  this.sendContact(m.chat, '628872157942', 'Owner bot Medeia-bot-alive', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['credits']

handler.command = /^(owner|creator|medeia)$/i

module.exports = handler
