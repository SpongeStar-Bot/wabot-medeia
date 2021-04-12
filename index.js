console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('The Best Bot 2021', {
  font: 'chrome',
  align: 'right',
  gradient: ['white', 'magenta']
})
CFonts.say('\'Medeia-Bot-Alive\' By Alina'Medeia', {
  font: 'console',
  align: 'right',
  gradient: ['white', 'magenta']
})

function start() {
  let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['white', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
