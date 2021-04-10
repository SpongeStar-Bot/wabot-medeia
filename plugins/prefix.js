let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Prefix:* ${pickRandom(['▶❥◈◉◊❦❧❏❐❑❒✙✚✛✜✠✢✣✤✥✦✧✩✪✫✬✭✮✯✰✱✲✳✴✵✶✷✹✺✻✼✽✾✿❀❁❂❃❅❆❇❈❉❊❋❍•❖✓✔✕✗✘♤♡♧♢♀♂■●'])}
`.trim(), m)
}
handler.help = ['main']
handler.tags = ['help']
handler.customPrefix = /(\?$)/
handler.command = /^help$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

