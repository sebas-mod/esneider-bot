import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['5491140951814', 'CREADOR', true],
  ['5491140951814']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['5491140951814', '5491140951814']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝐞𝐬𝐧𝐞𝐢𝐝𝐞𝐫 𝐛𝐨𝐭' 
global.author = '𝙨𝙚𝙗𝙖𝙨 𝙢𝙤𝙙' 

//--info FG
global.botName = '𝐞𝐬𝐧𝐞𝐢𝐝𝐞𝐫 𝐛𝐨𝐭'
global.fgig = 'solo preguntas del bot' 
global.fgigt = 'https://www.instagram.com/sebas_dzn'
global.fgsc = 'https://github.com/sebas-mod/esneider-bot' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = '' 

//--- Grupos WA
global.id_canal = 'https://whatsapp.com/channel/0029VafHsEoBqbr3qlW1aX0U' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaJxgcB0bIdvuOwKTM2Y'
global.bgp = 'https://chat.whatsapp.com/LcFTUnvu0Tw1tCnA2ybdR6'
global.bgp2 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O'
global.bgp3 = 'https://chat.whatsapp.com/J4GaLNqbzAHEkzNQy9N62O' //--GP NSFW

global.wait = '🐉𝘾𝙖𝙧𝙜𝙖𝙣𝙙𝙤....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
