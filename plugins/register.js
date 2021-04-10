const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg ( SN|YOUR NUMBER )`
  if (!Reg.test(text)) throw `Format salah!\n*Harap daftar dengan Benar!\nDengan Ketik *${usedPrefix}daftar <nama>.umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Pendaftaran Gagal\nError: Nama tidak boleh kosong...\nUlangi Pendaftaran'
  if (!age) throw 'Pendaftaran Gagal\nErro: Umur tidak boleh kosong...\nUlangi Pendaftaran'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
✓Starting...          []0%
✓Checking Update...   [■]10%
✓Downloading...       [■■]25%
✓Compressed...        [■■■]50%
✓Extracting...        [■■■■]75%
✓Register Completed...[■■■■■]100%
```◈Register Done!```
           ︻︻︻︻︻︻︻︻︻︻︻︻
           《 Medeia Bot Alive 》
           ︼︼︼︼︼︼︼︼︼︼︼︼
           
╭■■■■■■■[ *INFO* ]■■■■■■■◣
│ ❥ Nama: *${name}*
│ ❥ Umur: *${age}Tahun*
│ ❥ SN: *${sn}*
│ ❥ Use *_#menu_* To See The List
│
╰❥ Bot Name: *Medeia Bot Alive*
╰❥ Group Official: *Not Published*
╰━■■■■■■■[ *INFO* ]■■■■■■■◤
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(login|daftar|reg(ister)?)$/i

module.exports = handler

