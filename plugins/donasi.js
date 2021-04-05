let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [08872157942]
│ • 3 [083807633363]
╰────
`.trim()) // Makasih
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
