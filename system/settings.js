const Neoxr = require('@neoxr/wb');
const b = new Neoxr();
const fs = require('fs')
const chalk = require('chalk')
const moment = require('moment-timezone')


global.prefa = ['','!','.',',','🐤','🗿']
global.owner = '6285717062467'
global.mods = '6285717062467'
global.Func = b.Function
global.botname = 'Komari_Botz'

global.lolkey = 'pentilkuda';
global.neo = 'DitzKey';
global.alya = 'DitzOfc';
global.yanz = 'Fardankey';
global.xzn = 'Always ditz';
global.yuki = 'Your Key'; // get apikey at https://yuki-chan.restapisku.xyz
global.shannz = 'free-trial' // Limit & Apikey free dari shannz, Limit habis? get apikey at https://api.shannmoderz.xyz
global.APIs = {
    // API Prefix
    // name: 'https://website'
    lol: 'https://api.lolhuman.xyz',
    neoxr: 'https://api.neoxr.eu',
    alya: 'https://api.alyachan.dev',
    xzn: 'https://skizo.tech',
    yanz: 'https://api.yanzbotz.my.id',
    yuki: 'https://api.restapisku.xyz'
}
global.APIKeys = {
   'https://api.restapisku.xyz': 'YOUR-KEY'
}

global.thumbnya = 'https://telegra.ph/file/befd996808eafb0904bbf.jpg'

global.mess = {
 owner: 'Fitur Ini Khusus Owner!',
 prem: 'Fitur Ini Khusus Member Premium!',
 error: 'Maaf, Terjadi Error, Harap Lapor Ke Owner Untuk Segera Memperbaikinya\nketik .report untuk melaporkan errornya',
 botAdmin: 'Bot Belum Jadi Admin',
 admin: 'Maaf, fitur ini khusus admin!',
 mods: 'Fitur Khusus Moderator!',
 grup: 'Fitur ini hanya dapat di gunakan dalam Grup!',
 pm: 'Fitur ini hanya dapat di gunakan dalam private chat!',
 limit: 'Limit kamu sudah habis!',
 wait: 'Sebentar yah kak, Proses >•<',
 ban: 'Kamu telah Terbanned! Kamu tidak bisa menggunakan bot ini\nsilahkan minta owner untuk membuka banned kamu!',
 registered: 'Kamu belum terdaftar, Silahkan mendaftar dulu dengan mengetik .daftar',
 url: 'Input URL!',
 teks: 'Input teks!'
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}

global.multiplier = 1000
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})