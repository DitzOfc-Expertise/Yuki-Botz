require('../system/settings');
const {
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  interactiveMessage,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  smsg,
  tanggal,
  getTime,
  formatp,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  getGroupAdmins
} = require('../lib/simple');
const util = require("util");
const fs = require("fs");
const fetch = require("node-fetch");
const axios = require("axios");
const os = require("os");
const path = require("path")
const fsx = require('fs-extra')
const crypto = require('crypto')
const chalk = require('chalk')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const {
  JSDOM
} = require('jsdom')
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  writeExif
} = require('../library/sticker')
const {
  color,
  bgcolor
} = require('../library/color')
const {
  ssweb
} = require('../library/ssweb')
const {
  quote
} = require('../library/quote')
const {
  uptotelegra
} = require('../library/upload')
const {
  spotifydl,
  searchSpotify
} = require('./scrape/spotify')
const {
  npmSearch
} = require('./scrape/npmjs')
const {
  Primbon
} = require('scrape-primbon')
const ffstalk = require('../library/ffstalk')
const mlstalk = require('../library/mlstalk')
const Jimp = require('jimp')
const primbon = new Primbon()
const jsobfus = require('javascript-obfuscator')
const cheerio = require('cheerio')
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const speed = require('performance-now')
const {
  performance
} = require('perf_hooks')
const {
  exec,
  spawn,
  execSync
} = require("child_process")
const {
  mediafireDl
} = require('../library/mediafire.js')
const {
  remini
} = require('../library/remini.js')
const {
  dellCase
} = require('../library/dellcase.js')
global.db.data = JSON.parse(fs.readFileSync('./database.json'))
if (global.db.data) global.db.data = {
  users: {},
  chats: {},
  game: {},
  database: {},
  settings: {},
  setting: {},
  others: {},
  sticker: {},
  ...(global.db.data || {})
}
const banned = JSON.parse(fs.readFileSync('./banned.json', 'utf8'))
const prem = JSON.parse(fs.readFileSync('./premium.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
module.exports = conn = async (conn, m, msg, chatUpdate, store) => {
try {
const {
  type,
  quotedMsg,
  mentioned,
  now,
  fromMe,
  getQuotedObj
} = m
var body = (m.mtype === 'conversation' ? m.message.conversation : m.mtype === 'imageMessage' ? m.message.imageMessage.caption : m.mtype === 'videoMessage' ? m.message.videoMessage.caption : m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text : m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId : m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId : m.mtype === 'messageContextInfo' ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text : '');
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const spychat = body.replace().slice().trim()
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const botNumber = await conn.decodeJid(conn.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [botNumber, global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted ? "true" : "false"
const isPremium = [botNumber, ...prem].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const users = global.db.data.users[m.sender]
const isUser = pengguna.includes(m.sender)
const isBan = banned.includes(m.sender)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (m.mtype === "interactiveResponseMessage") {
  let msg = m.message[m.mtype] || m.msg
  if (msg.nativeFlowResponseMessage && !m.isBot) {
    let {
      id
    } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}
    if (id) {
      let emit_msg = {
        key: {
          ...m.key
        },
        message: {
          extendedTextMessage: {
            text: id
          }
        },
        pushName: m.pushName,
        messageTimestamp: m.messageTimestamp || 754785898978
      }
      return conn.ev.emit("messages.upsert", {
        messages: [emit_msg],
        type: "notify"
      })
    }
  }
}
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (time2 < "23:59:00") {
  var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (time2 < "19:00:00") {
  var ucapanWaktu = 'Selamat Petang 🌆'
}
if (time2 < "18:00:00") {
  var ucapanWaktu = 'Selamat Sore 🌇'
}
if (time2 < "15:00:00") {
  var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (time2 < "10:00:00") {
  var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (time2 < "05:00:00") {
  var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (time2 < "03:00:00") {
  var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
if (!conn.public) {
  if (!m.key.fromMe && !isOwner) return
}
const cap = 'PROFILE_PICTURE'
try {
  pplu = await conn.profilePictureUrl(anu.id, 'image')
} catch {
  pplu = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const ditz = {
  key: {
    participant: `0@s.whatsapp.net`,
    ...(m.chat ? {
      remoteJid: `status@broadcast`
    } : {})
  },
  message: {
    "contactMessage": {
      'displayName': `${pushname}`,
      'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;conn,;;;\nFN: Yuki_Botz 2.0.1\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      'jpegThumbnail': pplu,
      thumbnail: pplu,
      sendEphemeral: true
    }
  }
}
const reply = (teks) => {
  conn.sendReplyFooter(m.chat, teks, 'Made By *Ditz*', ditz)
}
const wett = () => {
  conn.sendMessage(from, {
    react: {
      text: '🕒',
      key: m.key,
    }
  })
}
const okk = () => {
  conn.sendMessage(from, {
    react: {
      text: '✅',
      key: m.key,
    }
  })
}
try {
  let isNumber = x => typeof x === 'number' && !isNaN(x)
  let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
  let user = global.db.data.users[m.sender]
  if (typeof user !== 'object') global.db.data.users[m.sender] = {}
  if (user) {
    if (!("afkReason" in user)) user.afkReason = ""
    if (!("banned" in user)) user.banned = false
    if (!isNumber(user.bannedDate)) user.bannedDate = 0
    if (!("catatan" in user)) user.catatan = ""
    if (!("premium" in user)) user.premium = false
    if (!("registered" in user)) user.registered = false
    if (!("role" in user)) user.role = "Beginner"
    if (!("sewa" in user)) user.sewa = false
    if (!("sn" in user)) user.sn = ""
    if (!isNumber(user.limit)) user.limit = limitUser
    if (!isNumber(user.afk)) user.afkTime = -1
    if (!isNumber(user.level)) user.level = 0
    if (!('autolevelup' in user)) user.autolevelup = true
  } else global.db.data.users[m.sender] = {
    afkTime: -1,
    afkReason: '',
    limit: limitUser,
    level: 0,
    autolevelup: true,
    autolevelup: true,
    registered: false,
    banned: false,
    bannedDate: 0,
    premium: false,
    catatan: '',
    role: 'Beginner',
    sewa: false,
    sn: ''
  }
  let chats = global.db.data.chats[m.chat]
  if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
  if (chats) {
    if (!('cai' in chats)) chats.cai = false
    if (!('selfgc' in chats)) chats.selfgc = false
    if (!('mute' in chats)) chats.mute = false
    if (!('wlcm' in chats)) chats.wlcm = true
    if (!('nsfw' in chats)) chats.nsfw = false
    if (!('antitoxic' in chats)) chats.antitoxic = false
    if (!('antilink' in chats)) chats.antilink = false
    if (!('antilinkyt' in chats)) chats.antilinkyt = false
    if (!('antilinktt' in chats)) chats.antilinktt = false
    if (!('antivirtex' in chats)) chats.antivirtex = true
    if (!('antipanel' in chats)) chats.antipanel = false
    if (!('antilinkv2' in chats)) chats.antilinkv2 = false
    if (!('autodown' in chats)) chats.autodown = false
    if (!('antidelete' in chats)) chats.antidelete = true
    if (!('notification' in chats)) chats.notification = {}
  } else global.db.data.chats[m.chat] = {
    cai: false,
    selfgc: false,
    mute: false,
    wlcm: true,
    nsfw: false,
    antitoxic: false,
    antilink: false,
    antilinkyt: false,
    antilinktt: false,
    antivirtex: true,
    antipanel: false,
    antilinkv2: false,
    autodown: false,
    antidelete: true,
    notification: {
      status: false,
      text_left: '',
      text_welcome: ''
    }
  }
  let setting = global.db.data.settings[botNumber]
  if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
  if (setting) {
    if (!isNumber(setting.status)) setting.status = 0
    if (!('autobio' in setting)) setting.autobio = false
    if (!('autoread' in setting)) setting.autoread = false
  } else global.db.data.settings[botNumber] = {
    status: 0,
    autobio: false,
    autoread: false
  }
} catch (err) {
  console.error(err)
}
let cron = require('node-cron')
cron.schedule('02 12 * * *', () => {
  let user = Object.keys(global.db.data.users)
  let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
  for (let jid of user) global.db.data.users[jid].limit = limitUser
  console.log('Reseted Limit')
}, {
  scheduled: true,
  timezone: "Asia/Jakarta"
})
const downloadMp3 = async (Link) => {
  try {
    await ytdl.getInfo(Link)
    let mp3File = getRandom('.mp3')
    console.log(color('Download Audio With ytdl-core'))
    ytdl(Link, {
        filter: 'audioonly'
      })
      .pipe(fs.createWriteStream(mp3File))
      .on('finish', async () => {
        await conn.sendMessage(from, {
          audio: fs.readFileSync(mp3File),
          mimetype: 'audio/mp4'
        }, {
          quoted: m
        })
        fs.unlinkSync(`./${mp3File}`)
      })
  } catch (err) {
    reply(`${err}`)
  }
}

function parseMention(text = '') {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const downloadMp4 = async (Link) => {
  try {
    await ytdl.getInfo(Link)
    let mp4File = getRandom('.mp4')
    console.log(color('Download Video With ytdl-core'))
    let nana = ytdl(Link)
      .pipe(fs.createWriteStream(mp4File))
      .on('finish', async () => {
        await conn.sendMessage(from, {
          video: fs.readFileSync(mp4File),
          gifPlayback: false
        }, {
          quoted: m
        })
        fs.unlinkSync(`./${mp4File}`)
      })
  } catch (err) {
    reply(`${err}`)
  }
}

function getTodayDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
  const year = today.getFullYear();
  const dayOfWeek = today.toLocaleDateString("id-ID", {
    weekday: "long"
  }); // Mengambil nama hari dalam bahasa Inggris.
  return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {
      ...b[i],
      [property]: a[property] === undefined ? _default : a[property]
    }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function randomNomor(min, max = null) {
  if (max !== null) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * min) + 1
  }
}
if (m.sender.startsWith('212')) return conn.updateBlockStatus(m.sender, 'block')
if (m.isBaileys && m.fromMe) {
  reply(`*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)`)
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
const listcolor = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
if (m.message) {
  console.log(chalk.white.bgRed.bold(botname),
    chalk[randomcolor]('[ PESAN ]'),
    chalk[randomcolor]('FROM'),
    chalk[randomcolor](`${pushname}`),
    chalk[randomcolor]('Text :'),
    chalk.white(`${body}`)
  );
}
if (isCmd && !isUser) {
  pengguna.push(sender)
  fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
if (db.data.chats[m.chat].antitoxic) {
  const isToxic = /(anjing|kontol|memek|bangsat|babi|goblok|goblog|kntl|pepek|ppk|ngentod|ngentd|ngntd|kentod|kntd|bgst|anjg|anj|fuck|hitam|ireng|jawir|gay|asw|asu|ktl|ngentot|ngewe|bokep|bkp)/i;
  if (!m.isGroup) return
  const isAntiToxic = isToxic.exec(m.text)
  if (isAntiToxic && !isCreator) {
    conn.sendMessage(m.chat, {
      delete: m.key
    })
    await conn.sendMessage(m.chat, {
      audio: fs.readFileSync('./mp3/toxic.mp3'),
      mimetype: 'audio/mp4',
      ptt: true,
      fileLength: 88738
    }, {
      quoted: ditz
    })
  }
}
// Auto Download
if (db.data.chats[m.chat].autodown) {
  if (budy.match('vt.tiktok.com')) {
    try {
      reply(mess.wait)
      let res = await tiktok2(`${spychat}`)
      conn.sendMessage(m.chat, {
        video: {
          url: res.no_watermark
        },
        fileName: `tiktok.mp4`,
        mimetype: 'video/mp4'
      }).then(() => {
        conn.sendMessage(m.chat, {
          audio: {
            url: res.music
          },
          fileName: `tiktok.mp3`,
          mimetype: 'audio/mp4'
        })
      })
    } catch (err) {
      await reply("*Error! Harap Kirim Berupa Link Saja Tanpa Teks Lain...*\n\n*Hanya Support Link https://vt.tiktok.com/*")
    }
  }
  if (budy.match('youtu.be')) {
    try {
      reply(mess.wait)
      axios.get(`https://api.koi.pics/api/downloader/youtube-video?url=${args[0]}&apikey=koicuy`).then(({
        data
      }) => {
        conn.sendMessage(m.chat, {
          video: {
            url: data.data.url
          },
          mimetype: 'video/mp4'
        })
      })
    } catch (err) {
      await reply("*Error! Harap Kirim Berupa Link Saja Tanpa Teks Lain...*\n\n*Hanya Support Link https://youtu.be/*")
    }
  }
  if (budy.match('www.instagram.com/p/')) {
    try {
      reply(mess.wait)
      let res = await fetch(`https://api.koi.pics/api/downloader/instagram?url=${q}&apikey=koicuy`)
      let json = await res.json()
      let cap = `🍂 Done...`
      let data = json.data[0].url
      conn.sendFile(m.chat, data, 'file', m)
    } catch (err) {
      console.log(util.format(err))
      await reply("*Error! Harap Kirim Berupa Link Saja Tanpa Teks Lain...*\n\n*Hanya Support Link https://www.instagram.com/p/*")
    }
  }
  if (budy.match('www.instagram.com/reel/')) {
    try {
      reply(mess.wait)
      let res = await fetch(`https://api.koi.pics/api/downloader/instagram?url=${q}&apikey=koicuy`)
      let json = await res.json()
      let cap = `🍂 Done...`
      let data = json.data[0].url
      conn.sendFile(m.chat, data, 'file', m)
    } catch (err) {
      console.log(util.format(err))
      await reply("*Error! Harap Kirim Berupa Link Saja Tanpa Teks Lain...*\n\n*Hanya Support Link https://www.instagram.com/reel/*")
    }
  }
  if (budy.match('mediafire.com')) {
    try {
      reply(mess.wait)
      const {
        mediafireDl
      } = require('./database/mediafire.js')
      const baby1 = await mediafireDl(text)
      if (baby1[0].size.split('MB')[0] >= 50) return reply('Oops, the file is too big...')
      const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
      reply(`${result4}`)
      rico.sendMessage(m.chat, {
        document: {
          url: baby1[0].link
        },
        fileName: baby1[0].nama,
        mimetype: baby1[0].mime
      }, {
        quoted: m
      })
    } catch (err) {
      await reply("*Error! Harap Kirim Berupa Link Saja Tanpa Teks Lain...*")
    }
  }
}
// Anti Link
if (db.data.chats[m.chat].antilink) {
  if (budy.match(`chat.whatsapp.com`)) {
    reply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
    if (!isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
    let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(gclink, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
    if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
    if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
if (db.data.chats[m.chat].antilinkv2) {
  if (budy.match(`chat.whatsapp.com`)) {
    reply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
    if (!isBotAdmins) return reply(`Ehh Bot Gak Admin T_T`)
    let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(gclink, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
    if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
    if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
    conn.sendMessage(m.chat, {
      delete: m.key
    })
  }
}
//Anti Panel
if (db.data.chats[m.chat].antipanel) {
  if (budy.match('panel')) {
    reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6285717062467`)
    if (!isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
    if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
    if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
    conn.sendMessage(m.chat, {
      delete: m.key
    })
  }
  if (budy.match('Panel')) {
    reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6285717062467`)
    if (!isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
    if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
    if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
    conn.sendMessage(m.chat, {
      delete: m.key
    })
  }
  if (budy.match('PANEL')) {
    reply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6285717062467`)
    if (!isBotAdmins) return reply(`Kan Aku Belum Jadi Admin 🥲`)
    if (isAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
    if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
    conn.sendMessage(m.chat, {
      delete: m.key
    })
  }
}
if (budy.startsWith('selfgc')) {
  if (!m.isGroup) return
  if (args[0] === "on") {
    if (db.data.chats[m.chat].selfgc) return reply(`Sudah Aktif Sebelumnya 🕊`)
    db.data.chats[m.chat].selfgc = true
    reply(`Mode self grup aktif 🚩`)
  } else if (args[0] === "off") {
    if (!db.data.chats[m.chat].selfgc) return reply(`Sudah Tidak Aktif Sebelumnya 🕊`)
    db.data.chats[m.chat].selfgc = false
    reply(`Mode self grup nonaktif 🚩`)
  } else {
    reply(`Ketik selfgc on/off`)
  }
}
let list = []
for (let i of owner) {
  list.push({
    displayName: await conn.getName(i + '@s.whatsapp.net'),
    vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await conn.getName(i + '@s.whatsapp.net')}\n
FN:${await conn.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:AditGantengJir@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://chat.whatsapp.com/CfoZa7yhouZ51XXYM3lKY7\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Japan;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
  })
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
  let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
  let {
    text,
    mentionedJid
  } = hash
  let messages = await generateWAMessage(from, {
    text: text,
    mentions: mentionedJid
  }, {
    userJid: conn.user.id,
    quoted: m.quoted && m.quoted.fakeObj
  })
  messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
  messages.key.id = m.key.id
  messages.pushName = m.pushName
  if (m.isGroup) messages.participant = m.sender
  let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
  }
  conn.ev.emit('messages.upsert', msg)
}
if (budy.startsWith('©️')) {
  try {
    return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
  } catch (e) {
    reply(e)
  }
}
if (('family100' + from in _family100) && isCmd) {
  kuis = true
  let room = _family100['family100' + from]
  let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
  let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
  if (!isSurender) {
    let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
    if (room.terjawab[index]) return !0
    room.terjawab[index] = m.sender
  }
  let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
  let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
  conn.sendText(from, caption, m, {
    contextInfo: {
      mentionedJid: parseMention(caption)
    }
  }).then(mes => {
    return _family100['family100' + from].pesan = mesg
  }).catch(_ => _)
  if (isWin || isSurender) delete _family100['family100' + from]
}
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklagu[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`
    }, {
      quoted: m
    })
    delete tebaklagu[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = kuismath[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
    delete kuismath[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakgambar[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`
    }, {
      quoted: m
    })
    delete tebakgambar[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakkata[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`
    }, {
      quoted: m
    })
    delete tebakkata[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = caklontong[m.sender.split('@')[0]]
  deskripsi = caklontong_desk[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`
    }, {
      quoted: m
    })
    delete caklontong[m.sender.split('@')[0]]
    delete caklontong_desk[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakkalimat[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`
    }, {
      quoted: m
    })
    delete tebakkalimat[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklirik[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`
    }, {
      quoted: m
    })
    delete tebaklirik[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaktebakan[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
    conn.sendMessage(m.chat, {
      image: ppnyauser,
      caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`
    }, {
      quoted: m
    })
    delete tebaktebakan[m.sender.split('@')[0]]
  } else reply('*Jawaban Salah!*')
}
//TicTacToe
this.game = this.game ? this.game : {}
let roomT = Object.values(this.game).find(roomT => roomT.id && roomT.game && roomT.state && roomT.id.startsWith('tictactoe') && [roomT.game.playerX, roomT.game.playerO].includes(m.sender) && roomT.state == 'PLAYING')
if (roomT) {
  let ok
  let isWin = !1
  let isTie = !1
  let isSurrender = !1
  // reply(`[DEBUG]\n${parseInt(m.text)}`)
  if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
  isSurrender = !/^[1-9]$/.test(m.text)
  if (m.sender !== room.game.currentTurn) { // nek wayahku
    if (!isSurrender) return !0
  }
  if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
    reply({
      '-3': 'Game telah berakhir',
      '-2': 'Invalid',
      '-1': 'Posisi Invalid',
      0: 'Posisi Invalid',
    } [ok])
    return !0
  }
  if (m.sender === roomT.game.winner) isWin = true
  else if (roomT.game.board === 511) isTie = true
  let arr = roomT.game.render().map(v => {
    return {
      X: '❌',
      O: '⭕',
      1: '1️⃣',
      2: '2️⃣',
      3: '3️⃣',
      4: '4️⃣',
      5: '5️⃣',
      6: '6️⃣',
      7: '7️⃣',
      8: '8️⃣',
      9: '9️⃣',
    } [v]
  })
  if (isSurrender) {
    roomT.game._currentTurn = m.sender === roomT.game.playerX
    isWin = true
  }
  let winner = isSurrender ? roomT.game.currentTurn : roomT.game.winner
  let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
  if ((room.game._currentTurn ^ isSurrender ? roomT.x : roomT.o) !== from)
    room[roomT.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
  if (roomT.x !== roomT.o) await conn.sendText(roomT.x, str, m, {
    mentions: parseMention(str)
  })
  await conn.sendText(roomT.o, str, m, {
    mentions: parseMention(str)
  })
  if (isTie || isWin) {
    delete this.game[roomT.id]
  }
}
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
  let win = ''
  let tie = false
  if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
      conn.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
      delete this.suit[roof.id]
      return !0
    }
    roof.status = 'play'
    roof.asal = from
    clearTimeout(roof.waktu)
    //delete roof[roof.id].waktu
    conn.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, {
      mentions: [roof.p, roof.p2]
    })
    if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
    if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
    roof.waktu_milih = setTimeout(() => {
      if (!roof.pilih && !roof.pilih2) conn.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
      else if (!roof.pilih || !roof.pilih2) {
        win = !roof.pilih ? roof.p2 : roof.p
        conn.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
      }
      delete this.suit[roof.id]
      return !0
    }, roof.timeout)
  }
  let jwb = m.sender == roof.p
  let jwb2 = m.sender == roof.p2
  let g = /gunting/i
  let b = /batu/i
  let k = /kertas/i
  let reg = /^(gunting|batu|kertas)/i
  if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
    roof.pilih = reg.exec(m.text.toLowerCase())[0]
    roof.text = m.text
    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
    if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
  }
  if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
    roof.text2 = m.text
    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
    if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
  }
  let stage = roof.pilih
  let stage2 = roof.pilih2
  if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih)
    if (b.test(stage) && g.test(stage2)) win = roof.p
    else if (b.test(stage) && k.test(stage2)) win = roof.p2
    else if (g.test(stage) && k.test(stage2)) win = roof.p
    else if (g.test(stage) && b.test(stage2)) win = roof.p2
    else if (k.test(stage) && b.test(stage2)) win = roof.p
    else if (k.test(stage) && g.test(stage2)) win = roof.p2
    else if (stage == stage2) tie = true
    conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, {
      mentions: [roof.p, roof.p2]
    })
    delete this.suit[roof.id]
  }
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
  let user = global.db.data.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          contextInfo: {
            mentionedJid: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363279875321922@newsletter',
              newsletterName: ucapanWaktu,
              serverMessageId: -1
            },
            externalAdReply: {
              title: 'TENKA-AI',
              body: 'Version: 1.0.7',
              thumbnailUrl: thumbnya,
              sourceUrl: 'https://instagram.com/wayssokasik',
              mediaType: 1,
              renderLargerThumbnail: true
            },
          },
          body: proto.Message.InteractiveMessage.Body.create({
            text: `🚫 *Jangan tag dia!*
❏  *Dia sedang AFK* ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
❏  *Selama* ${clockString(new Date - afkTime)}
`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Powered By _*Dev. Expertise*_'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            subtitle: "DitzOfc",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "quick_reply",
              "buttonParamsJson": "{\"display_text\":\"Maaf Bang\",\"id\":\".maafafk\"}"
            }],
          })
        })
      }
    }
  }, {
    quoted: m
  })
  conn.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: m.key.id
  })
}
if (global.db.data.users[m.sender].afkTime > -1) {
  let user = global.db.data.users[m.sender]
  return reply(`
🚩 ${pushname} Telah Kembali Dari Afk\n\n ❏ ${user.afkReason ? ' *Dengan Alasan* : ' + user.afkReason : ''}\n\n ❏  *Selama* : ${clockString(new Date - user.afkTime)}
`)
  user.afkTime = -1
  user.afkReason = ''
}
const totalfitur = () => {
  var mytext = fs.readFileSync("./commands/case.js").toString()
  var numUpper = (mytext.match(/case '/g) || []).length
  return numUpper
}
async function shortlink(url) {
  isurl = /https?:\/\//.test(url)
  return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url))).data : ''
}
async function jarak(dari, ke) {
  var html = (
    await axios(
      `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`,
    )
  ).data;
  var $ = cheerio.load(html),
    obj = {};
  var img = html.split("var s='")?.[1]?.split("'")?.[0];
  obj.img = /^data:.*?\/.*?;base64,/i.test(img) ?
    Buffer.from(img.split`,` [1], "base64") :
    "";
  obj.desc = $("div.BNeawe.deIvCb.AP7Wnd").text()?.trim();
  return obj;
}
async function jadwalTV(name) {
  let list = JSON.parse(fs.readFileSync("./database/jadwaltv.json", "utf-8"));
  let data = list.find((v) => new RegExp(name, "gi").test(v.channel)),
    result = [];
  if (!data)
    throw (
      "List Channel:\n\n" +
      list
      .map((v) => v.channel)
      .sort()
      .join("\n")
    );
  let html = (
    await axios.get(
      `https://www.jadwaltv.net/${data.isPay ? "jadwal-pay-tv/" : ""}${data.value}`,
    )
  ).data;
  let $ = cheerio.load(html);
  $("div > table.table")
    .find("tbody > tr")
    .slice(1)
    .each(function() {
      let jam = $(this).find("td").eq(0).text();
      let acara = $(this).find("td").eq(1).text();
      if (!/Jadwal TV/gi.test(acara) && !/Acara/gi.test(acara))
        result.push({
          jam,
          acara
        });
    });
  return {
    channel: data.channel.toUpperCase(),
    result
  };
}
async function ceritahantu() {
  const response = await axios.get(
    "https://cerita-hantu-nyata.blogspot.com/search?q=Kentang&m=1",
  );
  const $ = cheerio.load(response.data);
  const popularPosts = [];
  $(".item-content").each((index, element) => {
    const post = {};
    post.title = $(element).find(".item-title a").text();
    post.snippet = $(element).find(".item-snippet").text().trim();
    post.image = $(element).find(".item-thumbnail img").attr("src");
    post.url = $(element).find(".item-title a").attr("href");
    popularPosts.push(post);
  });
  return popularPosts;
}

async function downloadImage(url, filepath) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    throw new Error('Invalid URL: ' + url);
  }
  const res = await fetch(url);
  const buffer = await res.buffer();
  fs.writeFileSync(filepath, buffer);
}
switch (command) {
case 'afk': {
if (!users.registered) return reply(mess.registered);
if (users.banned) return reply(mess.ban);
users.afkTime = + new Date
users.afkReason = text
reply(`😓 Yahh, Kak *${pushname}*... Telah Afk\n\n ❏  *Alasan* ${text ? ': ' + text : ''}`)
}
break
case 'report': {
  if (!text) return reply("Ketikan *.lapor* beserta laporan error/req fitur");
  let lapor = text
  reply("Laporan mu sudah di sampaikan ke owner, Terima kasih sudah melaporkan dan membantu pengembangan Bot ini😊")
  conn.sendMessage(owner + '@s.whatsapp.net', { text: `Lapor owner, Ada Laporan Error/Req Fitur\n\nMessage: ${lapor}` }, { quoted: m })
}
break
  //=======================MAIN FEATURES==================//
  case 'menu':
  case 'allmenu':
  case 'help': {
    if (!users.registered) return reply(mess.registered)
    let gambarnya = 'https://telegra.ph/file/f4bdb0032118f7b5ab8ae.jpg'
    const id = "0@s.whatsapp.net"
    let teksnye = `
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│ *BOT INFORMATION*             
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⫸ VERSION: 2.0.4 (Case_Version)
│⫸ TOTAL FITUR: ${totalfitur()}
│⫸ RUNTIME: ${runtime(process.uptime())}
│⫸ MODE: ${conn.public ? `Public Mode` : `Self Mode`}
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙

❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│ *USER INFORMATION*           
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
│⫸ Premium? ${isPremium ? `Premium` : `No`}
│⫸ Owner? ${isOwner ? `Yes, Owner👑` : `No`}
│⫸ limit: ${global.db.data.users[m.sender].limit}
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
Untuk memilih menu, silahkan pilih melalui list menu di bawah ini
`
    let ini_list = [{
        title: 'MAIN MENU',
        rows: [{
            title: '🌐Downloader Menu',
            description: 'Show me Downloader Menu',
            id: '.downloadermenu'
          },
          {
            title: '🎮Games Menu',
            description: 'Show Me Games Menu',
            id: '.gamesmenu'
          },
          {
            title: '🇯🇵Wibu Menu',
            description: 'Show Me Wibu Menu',
            id: '.wibumenu'
          },
          {
            title: '🔧Tools Menu',
            description: 'Show Me Tools Menu',
            id: '.toolsmenu'
          },
          {
            title: '🌐Internet Menu',
            description: 'Show Me Internet Menu',
            id: '.internetmenu'
          },
          {
            title: '🤖AI Menu',
            description: 'Show Me AI Menu',
            id: '.aimenu'
          }
        ]
      },
      {
        title: '👑OWNER MENU',
        rows: [
          {
            title: 'Main Menu Owner',
            id: '.menuowner',
          }
        ]
      },
      {
        title: 'INFORMATION',
        rows: [{
            title: 'Owner Contact',
            description: 'Get Information About Owner',
            id: '.owner'
          },
          {
            title: 'Show Test Speed Bot⚡',
            description: 'Show Me Test Speed Bot',
            id: '.ping'
          },
          {
            title: '📃 Total Fitur',
            description: 'Show Me Total Features',
            id: '.totalfitur'
          },
          {
            title: 'Scripts & Credits 🔗',
            description: 'Get Information Script And Credits',
            id: '.sc'
          }
        ]
      }
    ]
    await conn.sendListImg(m.chat, teksnye, 'Yuki_Botz, Made By Ditz', 'Click Here!', ini_list, gambarnya, ditz)
  }
  break
case 'owner': {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Ownerkuh!!\nORG:DitzOfc\nTITLE:soft\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Ponsel\nitem2.URL:http://github.com/DitzOfc\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:AditGantengJir@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;PERSIMPANGAN JONGGOL;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
  let sentmsg = await conn.sendMessage(
    m.chat, {
      contacts: {
        displayName: 'DitzOfc My Owner👑',
        contacts: [{
          vcard
        }],
      },
      contextInfo: {
        externalAdReply: {
          title: "DitzOfc",
          body: "Version: 2.0.4-case",
          thumbnailUrl: 'https://telegra.ph/file/01ec46600192632cd6490.jpg',
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      },
    }, {
      quoted: m
    },
  );
  conn.sendMessage(m.chat, {
    text: 'Hai kak, Ini owner ku, Kalo ada perlu bilang aja sama dia😊'
  }, {
    quoted: sentmsg
  })
}
break
case 'ping':
case 'botstatus':
case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, {
length
}) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
‣ Kecepatan Respon *${latensi.toFixed(4)} _Second_* \n *${oldd - neww} _miliseconds_*\n\n‣ *Runtime* : ${runtime(process.uptime())}

▧「 *INFO SERVER* 」
‣ *RAM* : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

${cpus[0] ? `▧「 *TOTAL CPU USAGE* 」\n‣ ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
‣ CPU Core(s) Usage (${cpus.length} Core CPU)` : ''}
`.trim()
await conn.sendMessage(m.chat, {
text: respon,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: 'STATUS SERVER',
body: `${latensi.toFixed(4)} Second`,
thumbnailUrl: 'https://telegra.ph/file/785414ebb99dee1baaa9f.jpg',
sourceUrl: global.link,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: ditz
})
}
break

case 'totalfitur': {
  let fitur = await totalfitur()
  let txt = `
> TOTAL FITUR = ${fitur}
`
  conn.relayMessage(m.chat, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      amount1000: fitur.length * 1000,
      requestFrom: m.sender,
      noteMessage: {
        extendedTextMessage: {
          text: txt,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              showAdAttribution: true
            }
          }
        }
      }
    }
  }, {})
}
break
case 'daftar': {
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let teks = text
  let urrl = 'https://telegra.ph/file/cc3f75f0666f503d367a3.jpg'
  let user = global.db.data.users[m.sender]    
  if (users.registered) {
    return reply("```Kamu Sudah Terdaftar ✓```")
  } else {
    let match = teks.match(Reg)
    if (!match) return reply('Format pendaftaran tidak sesuai. Pastikan untuk menulis nama dan umur dengan benar\n\nContoh: .daftar adit.18')    
    let [name, age] = match
    if (!name.trim()) return reply('Nama Tidak Boleh Kosong')
    if (!age) return reply('Umur Tidak Boleh Kosong')    
    age = parseInt(age)
    if (age > 30) return reply('Tua Banget amjir -_-')
    if (age < 5) return reply('Terlalu bocil ;!')    
    user.name = name.trim()
    user.age = age
    user.regTime = +new Date
    user.registered = true
    user.sn = generateRandomPassword()    
    let sn = crypto.createHash("md5").update(m.sender).digest("hex")
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    let capt = `乂  *R E G I S T E R  S U C C E S S*\n\n`
    capt += `┌  ◦ *Name* : ${name}\n`
    capt += `│  ◦ *Number* : ${m.sender.split("@")[0]}\n`
    capt += `│  ◦ *Age* : ${age}\n`
    capt += `└  ◦ *Serial Number* : .ceksn\n\n`
    capt += `> Powered by DitzOfc`    
    conn.sendMessage(m.chat, { image: { url: urrl }, caption: capt }, { quoted: ditz })
  }
}
break
case 'ceksn': {
  if (!users.registered) return reply(mess.registered)
  let sn = users.sn
  let msg = generateWAMessageFromContent(m.sender, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Hai Kak! Ini Kode Serial Number Kamu, Jangan Di Berikan Oleh Siapapun Ya! Demi Keamanan Data Kamu Di Dalam Database Bot :>"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Your data is safe ✓'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Salin Disini","id":"123456789","copy_code":"${sn}"}`
            }],
          })
        })
      }
    }
  }, {})
  await conn.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  })
}
break
case 'sc': {
  let res = await fetch('https://api.github.com/repos/DitzOfc-Expertise/Yuki_Botz')
  let json = await res.json()
  let sc = `乂  *B O T - S C R I P T*\n\n`
  sc += `┌  ◦  *Name* : ${json.name}\n`
  sc += `│  ◦  *Visitor* : ${json.watchers_count}\n`
  sc += `│  ◦  *Size* : ${(json.size / 1024).toFixed(2)} MB\n`
  sc += `│  ◦  *Updated* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
  sc += `└  ◦  *Url* : ${json.html_url}`
  let tqto = `乂  *B I G - T H A N K S T O*\n\n`
  tqto += `┌  ◦  _Dev. Expertise Team_\n`
  tqto += `│  ◦  _Lenwy_\n`
  tqto += `│  ◦  _Shannz_\n`
  tqto += `└  ◦  _Pipe Scratch Team_\n\n`
  tqto += `Yuki_Botz, Made by ©DitzOfc`
  conn.sendMessage(m.chat, {
    text: `${sc}\n\n${tqto}`,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'Yuki_Botz',
        thumbnailUrl: 'https://telegra.ph/file/ac299e01e76c911d7f25a.jpg',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, {
    quoted: m
  })
}
break
//################# WIBU MENU ##############
case 'wibumenu': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
let teks = `┌    A I - M E N U
│ ∘ animeupdate
│ ∘ kusonime (text)
└
`
reply(teks)
}
break
case 'kusonime': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply("Input text!")
  wett()
  try {
    let res = await fetch(`https://api.saakura.cloud/api/anime/kusonime?query=${text}`)
    let json = await res.json();
    let cards = []
    for (let i of json.result) {
    let title = i.title
    let episode = i.episode
    let duration = i.duration
    let type = i.type
    let status = i.status
    let rilis = i.releaseTime
    let studio = i.produser
    let image = i.image
    let url = i.link
    cards.push({
     header: `${title}`,
     body: `\nJumlah Episode: ${episode}\nDurasi: ${duration}\nTipe: ${type}\nStatus: ${status}\nRilis Pada: ${rilis}\nStudio produksi: ${studio}`,
     footer: '',
     imageUrl: `${image}`,
     buttons: [{
       type: "url",
       text: "Lihat Di Web",
       url: `${url}`
     }]
    })
    }
   await conn.sendButtonCard(m.chat, "Berhasil Mendapatkan Data... [ OK ]", "Made By DitzPfc", cards, m)
  } catch (err) {
   console.log(err)
   reply(mess.error)
  }
}
break
case 'animeupdate': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  wett()
  try {
  let res = await fetch(`https://api.restapisku.xyz/api/anime-update?apikey=${yuki}`)
  let json = await res.json();
  let cards = []
  for (let i of json.result) {
  let title = i.title
  let studio = i.studio
  let genre = i.genres.join(", ")
  let synopsis = i.synopsis
  let release = i.release_on
  let thumbnail = i.image
   cards.push({
     header: `${title}`,
     body: `Studio: ${studio}\nGenre: ${genre}\nRilis Pada: ${release}`,
     footer: `Note: Data ini dapat berubah ubah`,
     imageUrl: `${thumbnail}`,
     buttons: [{
      type: "url",
      text: "Lihat Data Resmi",
      url: "https://www.livechart.me/summer-2024/tv"
     }]
   })
  }
  await conn.sendButtonCard(m.chat, "Berhasil Mendapatkan Data... [ OK ]", "Made By DitzOfc", cards, m)
 } catch (e) {
  console.log(e)
  reply(mess.error)
}
}
break
//################# GAME MENU ##############
case 'gamesmenu': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
reply(`┌  ◦ *GAME-MENU*
│ ∘  ᴛᴛᴄ
│ ∘  ᴅᴇʟᴛᴄ
│ ∘  ꜱᴜɪᴛᴘᴠᴘ
│ ∘  ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
│ ∘  ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
│ ∘  ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
│ ∘  ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
│ ∘  ᴛᴇʙᴀᴋ ʟᴀɢᴜ
│ ∘  ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
│ ∘  ꜰᴀᴍɪʟʏ100
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
│ ∘  ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2
└`)
}
break
case 'family100': {
 if ('family100'+from in _family100) {
 reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await conn.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
case 'tebak': {
if (!users.registered) return reply(mess.registered);
if (users.banned) return reply(mess.ban);
 if (!text) reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/Games/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await conn.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 conn.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/42bf4ce9f4d3d7d49d71d.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/42bf4ce9f4d3d7d49d71d.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/42bf4ce9f4d3d7d49d71d.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/42bf4ce9f4d3d7d49d71d.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(60000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/42bf4ce9f4d3d7d49d71d.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(60000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/42bf4ce9f4d3d7d49d71d.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break

case 'kuismath': case 'math': {
if (!users.registered) return reply(mess.registered);
if (users.banned) return reply(mess.ban);
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('../src/math')
 if (!text) reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
 let result = await genMath(text.toLowerCase())
 conn.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
if (!users.registered) return reply(mess.registered);
if (users.banned) return reply(mess.ban);
 let TicTacToe = require("../library/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
reply('Partner ditemukan!')
room.o = from
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttc': case 'delttt': {
if (!users.registered) return reply(mess.registered);
if (users.banned) return reply(mess.ban);
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) reply(`Kamu sedang tidak berada di room tictactoe`)
delete this.game[roomnya.id]
reply(`Berhasil delete session room tictactoe !`)
}
break

case 'suitpvp': case 'suit': {
if (!users.registered) return reply(mess.registered);
if (users.banned) return reply(mess.ban);
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await conn.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) conn.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

///################ AI MENU #################
case 'aimenu': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  let teks = `
┌    A I - M E N U
│  ◦ ai (teks)
│  ◦ yuki (teks)
│  ◦ flux-image (prompt)
│  ◦ toanime (gambar)
│  ◦ txt2img (prompt)
│  ◦ blackbox (teks)
│  ◦ bing (prompt)
└
`
reply(teks)
}
break

case 'bingimg': 
case 'bingimage': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply("Input prompt untuk melanjutkan!"); 
  wett();
  try {
    let res = await fetch(`https://api.restapisku.xyz/api/bing-img?prompt=${text}&apikey=${yuki}`);
    let json = await res.json();
    if (Array.isArray(json.result)) {
      let jmlh = 1;
      for (let i of json.result) {
        conn.sendMessage(m.chat, { image: { url: i }, caption: `Result ke ${jmlh++}` }, { quoted: m });
      }
    } else {
      reply(`${json.result}`);
    }
  } catch (err) {
    console.error("Detail error:", err);
    reply(mess.error + `\n\n${err}`);
  }
}
break;
case 'degreguru': 
case 'guruai': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply("Input teks untuk melanjutkan!");
  wett();
  try {
    let res = await fetch(`https://api.shannmoderz.xyz/ai/degreeguru?key=${shannz}&query=${text}`);
    let json = await res.json();
    reply(json.result)
  } catch (err) {
    console.log(err);
    reply(mess.error);
  }
}
break
case 'blackbox': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply("Input teks untuk melanjutkan!");
  wett();
  try {
    let res = await fetch(`https://api.shannmoderz.xyz/ai/blackbox?key=${shannz}&query=${text}`);
    let json = await res.json();
    reply(`*[ BLACKBOX-AI ]*\n\n${json.result}`)
    okk()
  } catch (err) {
    console.log(err);
    reply(mess.error);
  }
}
break

case 'txt2img': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if(!text) return reply("Input Prompt!");
  wett();
  try {
    let res = await fetch(`https://api.shannmoderz.xyz/ai/txt2img?key=${shannz}&prompt=${text}`);
    let json = await res.json();
    conn.sendMessage(m.chat, { image: { url: json.result.url }, caption: "Done" }, { quoted: ditz })
    okk()
  } catch (err) {
    console.log(err);
    reply(mess.error);
  }
}
break

case 'toanime': 
case 'imganime': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!/image/.test(mime)) return reply("Reply atau kirim gambar yang ingin di ubah ke anime model!");
  let img = await conn.downloadAndSaveMediaMessage(quoted);
  let upld = await uptotelegra(img);
  wett()
  try {
    let res = await fetch(`https://api.shannmoderz.xyz/ai/img2anime?key=${shannz}&url=${upld}`);
    let json = await res.json();
    conn.sendMessage(m.chat, { image: { url: json.result.convert }, caption: 'Sukses✅' } , { quoted: ditz })
    okk()
  } catch (err) {
    console.log(err);
    reply(mess.error)
  }
}
break

case 'chatgpt': case 'ai': {
  if (!users.registered) return reply(mess.registered);
  if (!text) return reply('Mau tanya apa sama AI?');
  wett()
  try {
    let res = await fetch(`https://api.restapisku.xyz/api/chatgpt?query=${text}&apikey=${yuki}`)
    let json = await res.json();
    reply(json.result.message)
    okk()
  } catch (err) {
    console.log(err)
    reply(mess.error)
  }
}
break

case 'yuki': {
  // logic ganti ama ai kalian 
  if (!users.registered) return reply(mess.registered)
  if (!text) return reply('Hallo! Yuki Siap Membantu! Apa yang yuki bisa bantu hari ini? :D')
  let url = `https://api.restapisku.xyz/api/gpt-logic?apikey=${yuki}`
  let data = {
    messages: [
      {
        role: 'user',
        content: 'Hallo Yuki!',
      },
      {
        role: 'assistant',
        content: 'Halo! Aku Yuki, Model bahasa besar yang di ciptakan oleh Adit!, Ada yang bisa Yuki bantu untuk mu?🥰'
      },
      {
        role: 'user',
        content: 'Yuki! Bisakah kamu membantuku?'
      },
      {
        role: 'assistant',
        content: 'Tentu! Ada yang bisa Yuki bantu?😘'
      }
    ],
    prompt: text,
    model: 'GPT-4',
    markdown: false
  };
  wett()
  try {
    let res = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    });
    reply(res.data.gpt);
    okk()
  } catch (err) {
    console.log(err.response ? err.response.data : err.message);
    reply(mess.error);
  } 
}
break;

case 'flux-image': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply('Input Prompt!');
  wett();
  try {
    let res = await fetch(`https://api.shannmoderz.xyz/ai/flux-schnell?key=${shannz}&prompt=${text}`);
    let json = await res.json();
    conn.sendMessage(m.chat, { image: { url: json.result[0] }, caption: "FLUX-SCHNELL✅" },  { quoted: ditz });
    okk()
  } catch (err) {
    console.log(err);
    reply(mess.error);
  }
}
break
//################ INTERNET #################
case 'internetmenu': {
  if (!users.registered) return reply(mess.registered)
  let itmenu = `
┌    D O W N - M E N U 
│  ◦ jarak *<lokasi>*
│  ◦ jadwaltv *<nama channel>*
│  ◦ ceritahoror
│  ◦ cariresep *<nama makanan>*
│  ◦ film *<judul>*
│  ◦ enka *<id genshin>*
│  ◦ bukalapak (teks)
│  ◦ pin (teks)
│  ◦ mc *<java/bedrock>*
│  ◦ google *<text>*
│  ◦ tiktoksearch (text)
│  ◦ spotify *<text/judul>*
│  ◦ spotifydl *<link>*
│  ◦ pindl *<link>*
└  ◦ git/gitclone *<link>*
`
  await reply(itmenu)
}
break;
case 'bukalapak': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply("Mau cari apa di bukalapak?");
  wett();
  try {
    let res = await fetch(`https://api.restapisku.xyz/api/bukalapak?query=${text}&apikey=${yuki}`);
    let json = await res.json();
    let cards = []
    for (let i of json.result) {
      cards.push({
        header: i.title,
        body: `Rating: ${i.rating}\nTerjual: ${i.terjual}\n\nNama Toko: ${i.store.nama}\nLokasi Penjual: ${i.store.lokasi}`,
        footer: i.harga,
        imageUrl: i.image,
        buttons: [{
          type: 'url',
          text: 'Kunjungi Produk',
          url: i.link,
        }]
      })
    }
    await conn.sendButtonCard(m.chat, 'Hai kak! Ini hasil pencarian BukaLapak nya', '© Made By Ditz', cards, m)
  } catch (err) {
    console.log(err)
    reply(mess.error)
  }
}
break

case 'pin': 
case 'pinterest': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply('Mau cari apa di Pinterest?');
  wett();
  try {
    let res = await fetch(`https://api.shannmoderz.xyz/search/pinterest?key=${shannz}&query=${text}`);
    let json = await res.json();
    let cards = [];
    let jmlh = 1;
    for (let i of json.result.images) {
      cards.push({
        header: '',
        body: `Result Ke ${jmlh++}`,
        footer: 'Made By DitzOfc',
        imageUrl: i,
        buttons: [{
          type: 'url',
          text: 'Lihat Di Web',
          url: i
        }]
      });
    }
    await conn.sendButtonCard(m.chat, 'Hai kak! Ini hasil pencarian Pinterest-nya!', 'Made By DitzOfc', cards, m);
  } catch (err) {
    console.log(err);
    reply(mess.error);
  }
}
break;
case 'tiktoksearch': 
case 'tts': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply("Mau cari apa di tiktok?");
  wett();
  try {
    let res = await fetch(`https://api.restapisku.xyz/api/tiktok-search?query=${text}&apikey=${yuki}`);
    let json = await res.json();
    conn.sendMessage(m.chat, { video: { url: json.no_watermark }, caption: json.title }, { quoted: ditz })
    conn.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: ditz})
  } catch (err) {
    console.log(err);
    reply(mess.error);
  }
}
break
case 'enka':
case 'profilgi':
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (args.length == 0) return reply(`Example: ${prefix + command} 800000001`)
  global.sh = `https://enka.network/u/${args[0]}`
  let krt = await ssweb(global.sh)
  axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({
      data
    }) => {
      var caption = `▧「 *P R O F I L E  G E N S H I N* 」\n\n ‣ *Nickname* : *${data.playerInfo.nickname}*\n`
      caption += ` ‣ *Adventure Rank* : *${data.playerInfo.level}*\n`
      caption += ` ‣ *Signature* : *${data.playerInfo.signature}*\n`
      caption += ` ‣ *World Level* : *${data.playerInfo.worldLevel}*\n\n`
      caption += ` ‣ *Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
      caption += ` ‣ *Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
      caption += `▧ *Mau Lebih Lengkap? Cek Disini :*\nhttps://enka.network/u/${args[0]}\n`
      conn.sendMessage(from, {
        image: krt.result,
        caption: caption
      }, {
        quoted: m
      })
    })
    .catch(console.error)
  break
case 'mc':
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (args.length == 0) return reply(`*List Server:*\n\n> java\n> bedrock`)
  if (args[0] === 'bedrock') {
    axios.get(`https://api.mcstatus.io/v2/status/bedrock/${args[1]}`).then(({
      data
    }) => {
      var caption = `▧「 *S E R V E R  M I N E C R A F T* 」\n\n`
      caption += ` ‣ *IP* : *${data.host}*\n`
      caption += ` ‣ *PORT* : *${data.port}*\n`
      caption += ` ‣ *IP Address* : *${data.ip_address}*\n\n`
      caption += ` ‣ *Players* : *${data.players.online}/${data.players.max}*\n`
      caption += ` ‣ *Version* : *${data.version.name}*\n\n`
      caption += `▧ *Beli Hosting? Di Owner Aja 😋*\n`
      conn.sendMessage(from, {
        image: {
          url: `https://telegra.ph/file/0d4c6b5fab8220394750c.jpg`
        },
        caption: caption
      }, {
        quoted: m
      })
    })
  } else if (args[0] === 'java') {
    axios.get(`https://api.mcstatus.io/v2/status/java/${args[1]}`).then(({
      data
    }) => {
      var caption = `▧「 *S E R V E R  M I N E C R A F T* 」\n\n`
      caption += ` ‣ *IP* : *${data.host}*\n`
      caption += ` ‣ *PORT* : *${data.port}*\n`
      caption += ` ‣ *IP Address* : *${data.ip_address}*\n\n`
      caption += ` ‣ *Players* : *${data.players.online}/${data.players.max}*\n`
      caption += ` ‣ *Version* : *${data.version.name_clean}*\n\n`
      conn.sendMessage(from, {
        image: {
          url: `https://telegra.ph/file/0d4c6b5fab8220394750c.jpg`
        },
        caption: caption
      }, {
        quoted: m
      })
    })
  } else {
    reply('🚫 ERORR')
  }
  break
case 'film': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply(`*• Example:* di ${prefix + command} Superman`)
  wett()
  try {
    let res = await fetch(`https://api.neoxr.eu/api/film?q=${text}&apikey=${global.neo}`)
    let json = await res.json();
    if (json.status && json.data.length > 0) {
      let sections = json.data.slice(0, 6).map(film => ({
        title: 'Result Film',
        rows: [{
            title: film.title,
            description: 'Lihat Detail Film',
            id: `.detailfilm ${film.url}`
          },
          {
            title: film.title,
            description: 'Tonton Sekarang',
            id: `tontonfilm ${film.url}`
          }
        ]
      }));
      let tekss = `Pencarian Mu Berhasil, Silahkan Pilih pencarian di bawah ini\n`
      await conn.sendListMsg(m.chat, tekss, 'Yuki_Botz Made By DitzOfc', 'Click Here!', sections, m)
    }
  } catch (err) {
    reply(mess.err);
    console.log(err)
  }
}
break
case 'detailfilm': {
  if (!users.registered) return reply(mess.registered)
  if (!text) return reply('Tidak ada url Response yang di berikan')
  wett()
  try {
    let res = await fetch(`https://api.neoxr.eu/api/film-get?url=${encodeURIComponent(text)}&apikey=${global.neo}`);
    let result = await res.json();
    if (result.status && result.data) {
      let data = result.data;
      let caption = `
Quality: ${data.quality}
Country: ${data.country}
Actors: ${data.actors}
Director: ${data.director}
Genre: ${data.genre}
Rating: ${data.imdb}
Release: ${data.release}
Duration: ${data.duration}
        `.trim();
      conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: "Film-Detail",
            thumbnailUrl: data.thumbnail,
            sourceUrl: `${text}`,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: ditz
      })
    } else {
      reply('No Data Found!')
    }
  } catch (err) {
    reply(mess.err)
    console.log(err)
  }
}
break
case 'tontonfilm': {
  if (!text) return reply('Mana urlnya?');
  try {
    let res = await fetch(`https://api.neoxr.eu/api/film-get?url=${text}&apikey=${global.neo}`);
    let result = await res.json();
    if (result.status && result.stream.length > 0 && result.download.length > 0) {
      let streamButtons = result.stream.map(v => ({
        type: 'url',
        text: v.quality,
        url: v.url
      }));
      let downloadButtons = result.stream.map(v => ({
        type: 'url',
        text: v.provider,
        url: v.url
      }));
      let allButtons = [...streamButtons, ...downloadButtons]
      await conn.sendButton(m.chat, 'Di bawah ini adalah link streaming dan download film kamu, Selamat menonton!', 'Yuki_Botz Made By DitzOfc', allButtons, m)
    } else {
      reply('Data not found!')
    }
  } catch (err) {
    reply(mess.error);
    console.log(err)
  }
}
break
case 'jarak': {
  var [dari, ke] = text.split(`|`);
  if (!(dari && ke)) return reply(`*• Example:* ${prefix + command} jakarta|bandung`)
  wett()
  try {
    var data = await jarak(dari, ke);
    if (data.img)
      return conn.sendMessage(
        m.chat, {
          image: data.img,
          caption: data.desc
        }, {
          quoted: m
        },
      );
    else reply(data.desc);
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'jadwaltv': {
  if (!text) return reply(`*• Example:* ${prefix + command} mnctv`)
  wett()
  try {
    let res = await jadwalTV(text);
    let txt = res.result.map((v) => `[${v.jam.replace("WIB", "WIB")}] ${v.acara}`).join('\n');
    reply(`Jadwal TV ${res.channel}\n\n${txt}`)
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'ceritahoror': {
  let res = await ceritahantu();
  let hasil = res.map((v) => {
    return `
• Title: ${v.title}
• Snippet: ${v.snippet}
• Image: ${v.image}
• URL: ${v.url}
`
  });
  m.reply(hasil.join("\n"));
}
break
case 'cariresep': {
  if (!text) return reply(`*• Example:* ${prefix + command} Rendang`)
  wett()
  try {
    let resepUser = db.data.chats.resepUser = db.data.chats.resepUser || {}
    let resep = await cariresep(text);
    let hasil = `
*± C A R I R E S E P . C O M* 
*Creator:* ${resep.creator} 
*Pencarian:* ${text}
Silahkan Pilih nomor urutan resep dibawah ini ^^\n\n*[ HASIL  PENCARIAN ]*\n\n` +
      resep.data.map((item, index) => `*${index + 1}.* ${item.judul}`).join("\n");
    reply(hasil);
    resepUser[m.sender] = resep
    if (m.isBaileys) return;
    if (!resepUser[m.sender]) return;
    if (!m.text) return;
    if (isNaN(m.text) || m.text <= 0 || m.text > resepUser[m.sender].data.length)
      return;
    let {
      data,
      creator
    } = resepUser[m.sender];
    let pilihan = data[m.text - 1].link;
    let url = await detailresep(pilihan);
    let teksnye = `*± C A R I R E S E P . C O M*
*creator:* ${creator}
*Nama makanan:* ${url.data.judul || "nothing"}
*Waktu masak:* ${url.data.waktu_masak || "nothing"}
*Tingkat kesulitan:* ${url.data.tingkat_kesulitan || "nothing"}
*Bahan:* ${url.data.bahan || "nothing"}`;
    conn.sendMessage(m.chat, {
      image: {
        url: url.data.thumb
      },
      caption: teksnye
    }, {
      quoted: ditz
    })
    delete resepUser[m.sender];
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'google':
case 'ggs': {
  if (!text) return reply(`*• Example:* ${prefix + command} Skandal`)
  wett()
  try {
    let google = require('google-it');
    google({
      'query': text
    }).then(res => {
      let teks = `Google Search From ${text}\n\n`
      for (let g of res) {
        teks += `*TITLE:* ${g.title}\n`
        teks += `*DESC:* ${g.snippet}\n`
        teks += `*LINK:* ${g.link}\n\n__________________\n\n`
      }
      reply(teks)
    })
  } catch (err) {
    reply('Error!')
    console.log(err)
  }
}
break
//################ DOWNLOADER ################
case 'downloadermenu': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  let dwmenu = `
┌    D O W N - M E N U 
│  ◦ ig/igdl/instagram *<link>*
│  ◦ fb/fbdl/facebook *<link>*
│  ◦ tt/tiktok *<link>*
│  ◦ drive *<link>*
│  ◦ mediafire *<link>*
│  ◦ play *<judul/text>*
│  ◦ ytmp3 *<link>*
│  ◦ spotify *<text/judul>*
│  ◦ spotifydl *<link>*
│  ◦ pindl *<link>*
│  ◦ git/gitclone *<link>*
└  ◦ ytmp4 *<link>*
`
  await reply(dwmenu);
}
break
case 'pindl': {
  if (!text) return reply(`*• Example:* ${prefix + command} https://pinterest.com/xxxx`)
  wett()
  try {
    let res = await fetch(`https://itzpire.com/download/pinterest?url=${text}`)
    let json = await res.json();
    let itung = 1;
    for (let i of json) {
      conn.sendMessage(m.chat, {
        image: {
          url: i
        },
        caption: `Pinterest Downloader\n\nGambar ke ${itung++}`
      }, {
        quoted: ditz
      })
    }
  } catch (err) {
    reply('Error!')
    console.log(err)
  }
}
break
case 'spotify': {
  if (!text) return reply(`*• Example:* ${prefix + command} Somebody Pleasure`)
  try {
    let result = await searchSpotify(text);
    let title = result.name;
    let teks = `Pilih musik pencarian mu dengan memilih list di bawah ini`;
    let sections = []
    for (let i of result) {
      sections.push({
        title: i.name,
        rows: [{
          title: i.name,
          description: `By ${i.artists}`,
          id: `.spotifydl ${i.link}`
        }]
      })
    }
    conn.sendListMsg(m.chat, teks, 'Powered By *Ditz*', 'Click Here!', sections, m)
  } catch (err) {
    reply(mess.err)
    console.log(err)
  }
}
break;
case 'spotifydl': {
  if (!text) return reply(`*• Example:* di ${prefix + command} https://open.spotify.com/track/xxxxx`)
  wett()
  try {
    let hasil = await spotifydl(text)
    conn.sendMessage(m.chat, {
      audio: {
        url: hasil.download
      },
      mimetype: 'audio/mpeg'
    }, {
      quoted: m
    })
  } catch (err) {
    reply('Error!')
    console.log(err)
  }
}
break
case 'ig':
case 'igdl': {
  if (!text) return reply(`*PERMINAAN ERROR!! CONTOH:*\n> .${command} https://www.instagram.com/reel/C6F57rGrV_x/?igsh=OXJxanVpdHdiczVi`)
  try {
    wett()
    let insta = await (await fetch(`https://api.shannmoderz.xyz/downloader/instagram?key=${shannz}&url=${text}`)).json()
    let conn = insta.result.output
    conn.sendMessage(m.chat, {
      video: {
        url: conn.url[0].url
      },
      caption: `${conn.meta.title}`
    }, {
      quoted: m
    })
  } catch (err) {
    reply('masukkan query lainnya atau coba lagi nanti')
  }
  okk()
}
break
case 'tt':
case 'ttdl':
case 'tiktok': {
  if (!text) return reply(`Input link dari tiktok!`)
  wett()
  try {
  let res = await fetch(`https://api.restapisku.xyz/api/tiktok?url=${text}&apikey=${yuki}`)
  let json = await res.json();
  let i = json.result.media
  if (!i.noWatermark) return reply("Link ini adalah link TikTok Slide, Jika kamu ingin mengunduh slide, Gunakan command *.ttslide*")
  let aud = json.result.music
  conn.sendMessage(m.chat, { video: { url: i.noWatermark }, caption: "```TikTok Downloader```" }, { quoted: ditz })
  conn.sendMessage(m.chat, { audio: { url: aud.play_url }, mimetype: 'audio/mpeg' }, { quoted: ditz })
  } catch (err) {
    console.log(err)
    reply(mess.error)
  }
  okk()
}
break

case 'ttslide': 
case 'tiktokslide': {
 if (!text) return reply(mess.url)
 wett()
 try {
  let res = await fetch(`https://api.restapisku.xyz/api/tiktok?url=${text}&apikey=${yuki}`)
  let json = await res.json();
  let aud = json.result.music
  let jumlah = 1
  for (let i of json.result.media) {
   await conn.sendMessage(m.chat, { image: { url: i.url }, caption: `Slide ke ${jumlah++}` }, { quoted: ditz })
  }
   conn.sendMessage(m.chat, { audio: { url: aud.play_url }, mimetype: 'audio/mpeg' }, { quoted: ditz })
  okk()
 } catch (err) {
 console.log(err)
 reply(mess.error)
 }
}
break
case 'play':
case 'playaud': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply(`*perintah mu tidak benar, contoh  :*\n> *.play not you*`)
  if (text.length > 25) return reply(`*PERMINTAAN EROR!! PESAN :*\n> *Gunakan Maksimal 25 Huruf*`)
  let res = await yts(text)
  let url = res.all;
  let result = url[Math.floor(Math.random() * url.length)]
  teks = `⏩ *PLAYING AUDIO*\n\n> *Judul : ${result.title}*\n> *Upload : ${result.ago}*\n> *Url : ${result.url}*\n> *RequestBy : ${pushname}*\n\n📦 *AUDIO SEDANG DIPROSES....*`
  let buttons = [{
    text: 'Ubah Video',
    id: `.ytmp4 ${result.url}`
  }]
  conn.sendButtonImg(m.chat, teks, 'Powered By Dev. Expertise', buttons, result.thumbnail, m)
  let aud = await fetch(`https://api.restapisku.xyz/api/youtube-downloader?url=${result.url}&format=audio&apikey=${yuki}`)
  let json = await aud.json();
  await conn.sendMessage(m.chat, { audio: { url: json.result.download }, mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'ytmp4': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply('*perintah mu tidak benar, contoh  :*\n> *.ytmp4 <link youtube>*')
  let proces = await (await fetch(`https://api.restapisku.xyz/api/youtube-downloader?url=${text}&format=video&apikey=${yuki}`)).json()
  let video = proces.result.download
  let xcap = `Done! \n> Resolusi: 480p`
  reply(mess.wait)
  conn.sendMessage(m.chat, {
    video: {
      url: video
    },
    caption: xcap
  }, {
    quoted: m
  })
}
break
case 'ytmp3': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply('masukkan link')
  reply(mess.wait)
  try {
  let proces = await (await fetch(`https://api.restapisku.xyz/api/youtube-downloader?url=${text}&format=audio&apikey=${yuki}`)).json()
  let audio = proces.result.download
  await conn.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mpeg' }, { quoted: m })
  } catch (err) {
  console.log(err)
  reply(mess.error)
  }
}
break
case 'fb':
case 'fbdl': {
  if (!text) return reply('Link nya mana?')
  wett()
  try {
  let res = await fetch(`https://api.restapisku.xyz/api/fbdl?url=${text}&apikey=${yuki}`)
  let json = await res.json();
  await conn.sendMessage(m.chat, { video: { url: json.result }, caption: '' }, { quoted: ditz })
  } catch (err) {
    reply('Terjadi kesalahan dalam pengambilan data!');
    console.log(err);
  }
}
break;
case 'mediafire':
case 'mf': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (args.length == 0) return reply(`*perintah mu tidak benar, contoh  :*\n> *.mediafire https://www.mediafire.com/download/xxxx*`)
  reply(mess.wait)
  const suu = await mediafireDl(text)
  if (suu[0].size.split('MB')[0] >= 1000) return reply('*PERMINTAAN ERROR!! PESAN :*\n> *ukuran file terlalu besar, maximal 1GB*')
  const result4 = `🔧 *MEDIAFIRE DOWNLOADER*\n\n🔖 *Name* : ${suu[0].nama}\n💽 *Size* : ${suu[0].size}\n📌 *Mime* : ${suu[0].mime}\n📎 *Link* : ${suu[0].link}`
  reply(`${result4}`)
  conn.sendMessage(m.chat, {
    document: {
      url: suu[0].link
    },
    fileName: suu[0].nama,
    mimetype: suu[0].mime
  }, {
    quoted: m
  })
}
break
case 'drive': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (args.length == 0) return reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.drive https://drive.google.com/file/xxxxx*`)
  wett()
  let babyy = await (await fetch(`https://widipe.com/download/gdrive?url=${args[0]}`)).json()
  let baby1 = babyy.result
  if (baby1.fileSize.split('MB')[0] >= 1000) return reply('*PERMINTAAN ERROR!! PESAN :*\n> *ukuran file terlalu besar, maximal 1GB*')
  let result4 = `🔧 *GOOGLE DRIVE DOWNLOADER*

🔖 *Name* : ${baby1.fileName}
💽 *Size* : ${baby1.fileSize}
📌 *Mime* : ${baby1.mimetype}
📎 *Link* : ${baby1.data}`
  reply(`${result4}`)
  conn.sendMessage(m.chat, {
    document: {
      url: baby1.data
    },
    fileName: baby1.fileName,
    mimetype: baby1.mimetype
  }, {
    quoted: m
  })
  okk()
}
break
case 'git':
case 'gitclone':
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!args[0]) return reply(`Mana link nya?`)
  if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
  reply(mess.wait)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = args[0].match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(url, {
    method: 'HEAD'
  })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  conn.sendMessage(m.chat, {
      document: {
        url: url
      },
      fileName: filename,
      mimetype: 'application/zip'
    }, {
      quoted: m
    }).catch((err) => reply(mess.error))
    .catch(console.error)
  break
  //############### TOOLS ################
case 'toolsmenu': {
  let menu_jir = `
┌    T O O L S - M E N U 
│  ◦ hd/remini *<reply foto>*
│  ◦ nitippesan *<pesan>*
│  ◦ npm *<nama paket>*
│  ◦ whatanime *<reply foto>*
│  ◦ reminder *<waktu/satuan waktu/pesan>*
│  ◦ ptrack *<reply foto>*
│  ◦ ssweb *<link>*
│  ◦ tinyurl *<link>*
│  ◦ toaudio *<reply video>*
│  ◦ tovn *<reply media>*
│  ◦ togif *<reply media>*
│  ◦ toimg *<reply sticker>*
│  ◦ tomp4 *<reply sticker gif>*
│  ◦ kalkulator *<text>*
│  ◦ rvo/readvo *<text>*
│  ◦ ppcp
└  ◦ tourl *<reply foto/video>*
`
  await reply(menu_jir);
}
break
case 'couple':
case 'ppcp': {
  await wett()
  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  let random = anu[Math.floor(Math.random() * anu.length)]
  conn.sendMessage(from, {
    image: {
      url: random.male
    },
    caption: `Couple Male`
  }, {
    quoted: m
  })
  conn.sendMessage(from, {
    image: {
      url: random.female
    },
    caption: `Couple Female`
  }, {
    quoted: m
  })
}
break
case "kalkulator":
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Maaf Kak Limit Anda Habis Ingin Membeli Limit Ketik .buylimit')
  db.data.users[sender].limit -= 1 // -1 limit
  reply('1 Limit Anda Terpakai')
  if (!text) return reply(`Mau nge kalkulator apa?`)
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) return reply('Isinya?')
    reply('Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
  }
  break
case "rvo":
case "readvo": {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!m.quoted)
    return reply("Reply gambar/video yang ingin Anda lihat");
  if (m.quoted.mtype !== "viewOnceMessageV2")
    return reply("Ini bukan pesan view-once.");
  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];
  let media = await downloadContentFromMessage(
    msg[type],
    type == "imageMessage" ? "image" : "video",
  );
  let buffer = Buffer.from([]);
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  if (/video/.test(type)) {
    return conn.sendFile(
      m.chat,
      buffer,
      "media.mp4",
      msg[type].caption || "",
      m,
    );
  } else if (/image/.test(type)) {
    return conn.sendFile(
      m.chat,
      buffer,
      "media.jpg",
      msg[type].caption || "",
      m,
    );
  }
}
break;
case 'toimage':
case 'toimg': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  wett()
  try {
    if (!quoted) throw 'Reply Image'
    if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix + command}*`)
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    let ran = await getRandom('.png')
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
      fs.unlinkSync(media)
      if (err) throw err
      let buffer = fs.readFileSync(ran)
      conn.sendMessage(from, {
        image: buffer
      }, {
        quoted: m
      })
      fs.unlinkSync(ran)
    })
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'tomp4':
case 'tovideo': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  wett()
  if (!quoted) return reply(`Balas sticker video Dengan Caption ${prefix + command}`)
  if (/video/.test(mime)) {
    let {
      webp2mp4File
    } = require('./library/uploader')
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    let webpToMp4 = await webp2mp4File(media)
    await conn.sendMessage(from, {
      video: {
        url: webpToMp4.result,
        caption: 'Convert Webp To Video'
      }
    }, {
      quoted: m
    })
    await fs.unlinkSync(media)
  }
}
break
case 'tourl': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  wett()
  try {
    if (!/video/.test(mime) && !/image/.test(mime)) return reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
    if (!quoted) return reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
    let {
      UploadFileUgu,
      webp2mp4File,
      TelegraPh
    } = require('../library/uploader')
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    if (/image/.test(mime)) {
      let anu = await TelegraPh(media)
      reply(util.format(anu))
    } else if (!/image/.test(mime)) {
      let anu = await UploadFileUgu(media)
      reply(util.format(anu))
    }
    await fs.unlinkSync(media)
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'togif': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  wett()
  try {
    if (!quoted) return reply('Reply Image')
    if (!/webp/.test(mime)) return reply(`*reply sticker with caption* *${prefix + command}*`)
    let {
      webp2mp4File
    } = require('../library/uploader')
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    let webpToMp4 = await webp2mp4File(media)
    await conn.sendMessage(from, {
      video: {
        url: webpToMp4.result,
        caption: 'Convert Webp To Video'
      },
      gifPlayback: true
    }, {
      quoted: m
    })
    await fs.unlinkSync(media)
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'tomp3':
case 'toaudio':
case 'mp3': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!/video/.test(mime) && !/audio/.test(mime)) reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  wett()
  try {
    if (!quoted) reply(`*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`)
    let media = await conn.downloadMediaMessage(quoted)
    let {
      toAudio
    } = require('../library/converter')
    let audio = await toAudio(media, 'mp4')
    conn.sendMessage(m.chat, {
      document: audio,
      mimetype: 'audio/mpeg',
      fileName: `Convert By ${conn.user.name}.mp3`
    }, {
      quoted: m
    })
  } catch (err) {
    reply(mess.error);
    console.log(err)
  }
}
break
case 'tovn':
case 'voice': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!/video/.test(mime) && !/audio/.test(mime)) reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
  if (!quoted) reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
  wett()
  try {
    let media = await quoted.download()
    let {
      toPTT
    } = require('../library/converter')
    let audio = await toPTT(media, 'mp4')
    conn.sendMessage(from, {
      audio: audio,
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 1,
          mediaUrl: 'https://xnxx.com',
          title: `Yuki_Botz`,
          sourceUrl: `https://saweria.co/ditzofc`,
          thumbnail: thumb
        }
      }
    })
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'tinyurl': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!text) return reply(`*• Example:* di ${prefix + command} https://youtube.com/@DitzOfc`)
  wett()
  try {
    let short = await shortlink(text);
    reply(short)
  } catch (err) {
    reply(mess.error);
    console.log(err)
  }
}
break
case 'ssweb': {
  if (!text) return reply(`*• Example:* di ${prefix + command} https://xnxx.com/`)
  wett()
  try {
    let crot = await ssweb(text);
    conn.sendMessage(m.chat, {
      image: crot.result,
      caption: 'Nih Done'
    }, {
      quoted: ditz
    })
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
//Dapetin apikeynya sendiri di neoxr
case 'trackp':
case 'phototracker':
case 'ptrack': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('Mana Fotonya?')
  if (!/image\/(jpe?g)/.test(mime)) return reply('Unsuported Format!')
  wett()
  try {
    let img = q.download()
    let up = await uptotelegra(img)
    let res = await fetch(`https://api.neoxr.eu/api/photo-tracker?image=${upload}&apikey=${global.neo}`)
    let hasil = await res.json();
    reply(hasil.data)
  } catch (err) {
    reply(mess.error)
    console.log(err)
  }
}
break
case 'reminder': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!args[0] || !args[1] || !args[2]) return reply('Format: reminder [waktu] [detik/menit/jam] [pesan]')
  const time = parseInt(args[0]) * (args[1].match(/(m|minute)/i) ? 60 : args[1].match(/(h|hour)/i) ? 3600 : 1) * 1000
  const message = args.slice(2).join(' ')
  setTimeout(() => {
    conn.sendMessage(from, {
      text: `Hai Kak @${sender.split("@")[0]}, Aku hanya mengingatkan nih\n\nPesan: ${message}`,
      contextInfo: {
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363279875321922@newsletter',
          newsletterName: "≡ Click Button Here For More Info:3",
          serverMessageId: -1
        },
        forwardingScore: 9999999,
        isForwarded: true,
        mentionedJid: [sender]
      }
    }, {
      quoted: ditz
    })
  }, time)
  reply(`⏰ Reminder telah diatur untuk ${args[0]} ${args[1]} ke depan\n\nAku akan mengingatkan mu nanti ya ><`)
}
break;
case 'whatanime': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
if (!/image/.test(mime)) return reply('Foto nya mana kak?')
reply(mess.wait)
let img = await conn.downloadAndSaveMediaMessage(quoted);
let upld = await uptotelegra(img);
await reply("Mencari....");
let res = await fetch(
`https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(upld)}`
);
let json = await res.json();
let {
id,
idMal,
title,
synonyms,
isAdult
} = json.result[0].anilist;
let {
filename,
episode,
similarity,
video,
image
  } = json.result[0];
  let _result = `*Title :* ${title.romaji} (${title.native})\n*Synonyms :* ${synonyms}\n*Adult :* ${isAdult}\n*Similiarity :* ${(similarity * 100).toFixed(1)}\n*Episode :* ${episode}`;
  await conn.sendMessage(m.chat, {
    image: {
      url: image
    },
    caption: _result
  }, {
    quoted: ditz
  })
}
break;
case 'npm': {
  if (!text) return reply('✳️ Masukkan nama paket.');
  let img = 'https://i.ibb.co/HxNbmxd/npm2.png';
  wett()
  try {
    let pkg = await npmSearch(text);
    if (!pkg || !pkg.name) {
      return reply(`✳️ Tidak dapat menemukan informasi untuk paket dengan nama "${text}". Pastikan nama paket valid.`);
    }
    let caption = `
▢ *Nama Paket:* ${pkg.name}
▢ *Versi:* ${pkg.version}
▢ *Pemilik:* ${pkg.owner}
▢ *Diterbitkan:* ${pkg.publishedDate}
▢ *Deskripsi:* ${pkg.description}
▢ *Halaman:* ${pkg.homepage} 
▢ *Link:* ${pkg.packageLink} 
`;
    conn.sendMessage(m.chat, {
      image: {
        url: img
      },
      caption: caption
    }, {
      quoted: ditz
    });
    await sleep(1500);
    conn.sendFile(m.chat, pkg.downloadLink, `${pkg.packageName}-${pkg.version}.tgz`, m);
    okk()
  } catch (err) {
    reply(`✳️ Kesalahan: Periksa bahwa nama paket ada di https://www.npmjs.com`);
    console.error(err);
  }
}
break;
case 'nitippesan':
case 'kirimpesan': {
  let [number, pesan] = text.split`|`
  if (!number) return reply(`Salah bajindul, Ga ada nomornya, contohnya gini\n\n${prefix}pesan 62857xxx|pesan mu`);
  if (!pesan) return reply(`Salah bajindul, Ga ada pesannya, contohnya gini\n\n${prefix}pesan 62857xxx|pesan mu`);
  if (text > 500) return m.reply('Panjang bet dah! Emang mau Ngapain sih😤')
  wett()
  try {
    let user = global.db.data.users[m.sender]
    let korban = `${number}`
    let pengirim = m.sender
    let ngarep = `*「 PENITIPAN PESAN 」*\n\nUntuk : wa.me/${korban}\nPesan : ${pesan}`
    await conn.sendMessage(`${korban}@s.whatsapp.net`, {
      text: ngarep
    }, {
      quoted: null
    })
    m.reply('Tuh Done!');
  } catch (err) {
    reply('Penitipan pesan gagal');
    console.log(err)
  }
}
break
case 'hd':
case 'hdr':
case 'remini': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!quoted) return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hd*`)
  if (!/image/.test(mime)) return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *Kirim/Reply Gambar Dengan Caption .hd*`)
  wett();
  let media = await quoted.download()
  let proses = await remini(media, "enhance");
  conn.sendMessage(m.chat, {
    image: proses,
    caption: '*SUCCESS ✅*'
  }, {
    quoted: m
  })
  okk();
}
break
//############### OWNER ####################
case 'menuowner': {
let teks = `
┌    O W N E R - M E N U 
│  ◦ gc *<nama case>*
│  ◦ delcase *<nama case>*
│  ◦ addcase *<nama case + code>*
│  ◦ public 
│  ◦ self
│  ◦ ban *<nomor>*
│  ◦ unban *<nomor>*
│  ◦ addprem *<nomor>*
│  ◦ delprem *<nomor>*
│  ◦ myip
│  ◦ block *<nomor>*
│  ◦ unblock *<nomor>*
│  ◦ setppbot *<gambar>*
└
`
reply(teks)
}
break
case 'gc':
case 'getcase':
  if (!isOwner) return reply(mess.owner)
  const getCase = (cases) => {
    return "case" + fs.readFileSync("./commands/case.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
  }
  try {
    if (!isOwner) return reply(mess.owner)
    if (!q) return reply(`*PERMINTAAN ERROR!! CONTOH :*\n> *.gc namacase*`)
    let getc = await getCase(q)
    reply(getc)
  } catch (err) {
    console.log(err)
    reply(`*CASE ${q} TIDAK DITEMUKAN!!*`)
  }
  break
case "delcase": {
  if (!isOwner) return reply(mess.owner)
  if (!q) return reply("*PERMINTAAN ERROR!! CONTOH :*\n> *.delcase namacase*");
  dellCase("./commands/case.js", q);
  reply(`*CASE ${text} SUKSES DI HAPUS*`);
}
break
case 'addcase': {
  if (!isOwner) return reply(mess.owner)
  if (!text) return reply(`*PERMINTAAN ERROR!! CONTOH :*\n> .addcase case \'test\': {\n> reply('hello world')\n> }\n> break`)
  const fileName = 'commands/case.js';
  const newCase = `${text}`;
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('*ERROR SAAT MEMBACA FILE*', err);
      return;
    }
    const posisiAwal = data.indexOf("case 'addcase':");
    if (posisiAwal !== -1) {
      const kodeBaru = data.slice(0, posisiAwal) + '\n' + newCase + '\n' + data.slice(posisiAwal);
      fs.writeFile(fileName, kodeBaru, 'utf8', (err) => {
        if (err) {
          reply('*TERJADI KESALAHAN SAAT MENULIS CASE* :', err);
        } else {
          reply('*CASE SUKSES DITAMBAHKAN*');
        }
      });
    } else {
      reply('*CASE ADDCASE TIDAK DITEMUKAN');
    }
  });
}
break
case 'public': {
  if (!users.registered) return reply(mess.registered);
  if (users.banned) return reply(mess.ban);
  if (!isOwner) return reply(mess.owner)
  conn.public = true
  reply('PUBLIC MODE ACTIVATED ✅')
}
break
case 'self': {
  if (!isOwner) {
    reply(mess.owner);
  } else {
    conn.public = false;
    reply('SELF MODE ACTIVATED ✅');
  }
  return false; // Ensure no further execution in this case
}
break
case 'listban': {
  if (!isOwner) return reply(mess.owner)
  if (banned.length === 0) return reply('*TIDAK ADA NOMOR YANG DIBANNED SAAT INI!!!')
  let listBan = '*DAFTAR NOMOR YANG DIBANNED :*\n'
  banned.forEach((user, index) => {
    listBan += `${index + 1}. ${user}\n`
  })
  reply(listBan)
}
break
case 'ban': {
  if (!isOwner) return reply(mess.owner)
  if (!text) return reply(`*perintah mu tidak benar, contoh  :*\n> *.${command} 62xxxxx*`)
  let orgnye = args[0] ? args[0] + "@s.whatsapp.net" : m.quoted.sender
  if (banned.includes(orgnye)) return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *nomor ${args[0]} sudah ada didaftar banned*`)
  banned.push(orgnye)
  global.db.data.users[orgnye].banned = true
  fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
  reply(`*SUCCES!! PESAN :*\n> *nomor ${args[0]} telah dibanned*`)
}
break
case 'unban': {
  if (!isOwner) return reply(mess.owner)
  if (!text) return reply(`*perintah mu tidak benar, contoh  :*\n> *.${command} 62xxxxx*`)
  let orgnye = args[0] ? args[0] + "@s.whatsapp.net" : m.quoted.sender
  if (!banned.includes(orgnye)) return reply(`*PERMINTAAN ERROR!! PESAN :*\n> *nomor ${args[0]} belum di banned*`)
  const index = banned.indexOf(orgnye)
  if (index !== -1) banned.splice(index, 1)
  fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
  global.db.data.users[orgnye].banned = false
  reply(`*SUCCES!! PESAN :*\n> *nomor ${args[0]} telah diunbanned*`)
}
break
case 'listprem':
  teksss = '*LIST USER PREMIUM*\n\n'
  for (let i of prem) {
    teksss += `• ${i}\n`
  }
  teksss += `*TOTAL :* _${prem.length}_`
  conn.sendMessage(from, {
    text: teksss.trim()
  }, 'extendedTextMessage', {
    quoted: m,
    contextInfo: {
      "mentionedJid": prem
    }
  })
  break
case "addprem": {
  if (!isOwner) return reply(mess.owner)
  if (!args[0]) return reply(`*perintah mu tidak benar, contoh  :*\n> *.addprem 62xxxx*`)
  prrkek = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
  let ceknya = await conn.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  prem.push(prrkek)
  global.db.data.users[prrkek].premium = true
  fs.writeFileSync("../premium.json", JSON.stringify(prem))
  reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem": {
  if (!isOwner) return reply(mess.owner)
  if (!args[0]) return reply(`*perintah mu tidak benar, contoh  :*\n> *.delprem 62xxxx*`)
  ya = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
  unp = prem.indexOf(ya)
  prem.splice(unp, 1)
  global.db.data.users[prrkek].premium = false
  fs.writeFileSync("./premium.json", JSON.stringify(prem))
  reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case 'myip': {
  if (!isCreator) return reply(mess.owner)
  try {
    const {
      data
    } = await axios.get('https://api.ipify.org')
    reply(`IP kamu adalah ${data}`)
  } catch (err) {
    reply('Terjadi kesalahan saat memproses permintaan.')
    console.log(err)
  }
}
break
case 'block': {
  if (!isOwner) return reply(mess.owner)
  await wett()
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
  if (!isOwner) return reply(mess.owner)
  await wett()
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case "setppbot": {
  if (!isCreator) return reply(mess.owner)
  if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
  if (args[0] == `/full`) {
    var {
      img
    } = await generateProfilePicture(medis)
    await conn.query({
      tag: 'iq',
      attrs: {
        to: botNumber,
        type: 'set',
        xmlns: 'w:profile:picture'
      },
      content: [{
        tag: 'picture',
        attrs: {
          type: 'image'
        },
        content: img
      }]
    })
    fs.unlinkSync(medis)
    reply(`Sukses`)
  } else {
    var memeg = await conn.updateProfilePicture(botNumber, {
      url: medis
    })
    fs.unlinkSync(medis)
    reply(`Sukses`)
  }
}
break
default:
  if (budy.startsWith('=>')) {
    if (!isOwner) return reply('*Khusus Owner*')

    function Return(sul) {
      sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined) {
        bang = util.format(sul)
      }
      return reply(bang)
    }
    try {
      reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
    } catch (e) {
      reply(String(e))
    }
  }
  if (budy.startsWith('>')) {
    if (!isOwner) return reply('*Khusus Owner*')
    try {
      let evaled = await eval(budy.slice(2))
      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
      await reply(evaled)
    } catch (err) {
      await reply(String(err))
    }
  }
  if (budy.startsWith('get')) {
    if (!isCreator) return reply('*Khusus Owner*')
    try {
      conn.sendFile(m.chat, `${q}`, 'file', m)
    } catch (err) {
      e = String(err)
      reply(e)
    }
  }
  if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
    this.menfes = this.menfes ? this.menfes : {}
    let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
    if (room) {
      if (/^.*(next|leave|start)/.test(m.text)) return
      if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
      find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
      let other = find.a == m.sender ? find.b : find.a
      await m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
        contextInfo: {
          ...m.msg.contextInfo,
          participant: other
        }
      } : {})
    }
  }
  if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
    this.anonymous = this.anonymous ? this.anonymous : {}
    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
    if (room) {
      if (/^.*(next|leave|start)/.test(m.text)) return
      if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
      let other = [room.a, room.b].find(user => user !== m.sender)
      m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
        contextInfo: {
          ...m.msg.contextInfo,
          forwardingScore: 0,
          isForwarded: true,
          participant: other
        }
      } : {})
    }
    return !0
  }
  if (budy.startsWith('text')) {
    if (!isOwner) return reply('*Khusus Owner*')
    try {
      const d = await fetch(`${q}`);
      const u = await d.json();
      const V = u.search_results.characters.slice(0x0, 0x5);
      const L = V.map(U => ({
        'external_id': U.external_id,
        'participant_name': U.participant__name,
        'title': U.title
      }));
      reply(JSON.stringify(L, null, 0x2));
    } catch (err) {
      e = String(err)
      reply(e)
    }
  }
  if (budy.startsWith('$')) {
    if (!isOwner) return reply('*Khusus Owner*')
    exec(budy.slice(2), (err, stdout) => {
      if (err) return reply(err)
      if (stdout) return reply(stdout)
    })
  }
  if (isCmd && budy.toLowerCase() != undefined) {
    if (m.isBaileys) return
    if (from.endsWith('broadcast')) return
    let msgs = global.db.data.database
    if (!(budy.toLowerCase() in msgs)) return
    conn.copyNForward(from, msgs[budy.toLowerCase()], true)
  }
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage(owner + "@s.whatsapp.net", {
  text: `Lapor Owner, Ada yang error! : ` + util.format(e),
  contextInfo: {
    forwardingScore: 9999999,
    isForwarded: true
  }
})
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})