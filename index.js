/**
 * Made By DitzOfc
 * Dont Delete This Credit!
 */
(async () => {
  require("./system/settings")
  const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    getAggregateVotesInPollMessage,
    proto
  } = require("@whiskeysockets/baileys");
  const pino = require("pino");
  const fs = require("fs");
  const path = require('path');
  const readline = require("readline");
  const yargs = require("yargs/yargs");
  const chalk = require("chalk");
  const CFonts = require("cfonts");
  const _ = require("lodash");
  const cp = require("child_process");
  const {
    promisify
  } = require("util");
  let exec = promisify(cp.exec).bind(cp)
  const moment = require("moment-timezone");
  const {
    Boom
  } = require('@hapi/boom')
  const {
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    sleep
  } = require('./lib/simple')
  const FileType = require('file-type')
  const PhoneNumber = require('awesome-phonenumber')
  const usePairingCode = true // set to false if you want qrcode
  const Spinnies = require("spinnies");
  const spinner = new Spinnies();
  const express = require("express");
  const app = express();

  console.log(chalk.yellow("Checking folder tmp..."));
  if (!fs.existsSync('./tmp')) {
    console.log(chalk.yellow("Folder tmp not found, Creating..."));
    fs.mkdirSync('./tmp');
    console.log(chalk.green("Folder tmp succes created! Continuing service... [ OK ]"));
  }
  else {
    console.log(chalk.green("Folder tmp already satisfied, Continuing service... [ OK ]"));
  }

  const question = (text) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise((resolve) => {
      rl.question(text, resolve);
    });
  }
  const store = makeInMemoryStore({
    logger: pino().child({
      level: 'silent',
      stream: 'store'
    })
  })
  const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
  }
  const PORT = process.env.PORT || 8080;

  const startSpinners = () => {
    spinner.add("spinnies-1", {
      text: "Creating localhost server... [ WAITING ]",
      color: "yellow"
    });
    setTimeout(() => {
      require("http").createServer((_, res) => res.end("Uptime!")).listen(PORT);
      spinner.succeed("spinnies-1", {
        text: `Success, visit http://localhost:${PORT}... [ OK ]`,
        color: "green"
      });
      spinner.add("spinnies-2", {
        text: "Setting up database... [ WAITING ]",
        color: "yellow"
      });
      setTimeout(() => {
        global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
        var low;
        try {
          low = require('lowdb');
        }
        catch (e) {
          low = require('./lib/lowdb');
        }
        const {
          Low,
          JSONFile
        } = low;
        const mongoDB = require('./lib/mongoDB');
        global.db = new Low(
          /https?:\/\//.test(opts['db'] || '') ?
          new cloudDBAdapter(opts['db']) :
          /mongodb/.test(opts['db']) ?
          new mongoDB(opts['db']) :
          new JSONFile(`./database.json`)
        );
        global.DATABASE = global.db; // Backwards Compatibility
        global.loadDatabase = async function loadDatabase() {
          if (global.db.READ) return new Promise((resolve) => setInterval(function () {
            (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null);
          }, 1 * 1000));
          if (global.db.data !== null) return;
          global.db.READ = true;
          await global.db.read();
          global.db.READ = false;
          global.db.data = {
            users: {},
            chats: {},
            game: {},
            database: {},
            settings: {},
            setting: {},
            others: {},
            sticker: {},
            ...(global.db.data || {})
          };
          global.db.chain = _.chain(global.db.data);
        }
        loadDatabase();
        spinner.succeed("spinnies-2", {
          text: `Success, database has been set up!... [ OK ]`,
          color: "green"
        });
        const {
          say
        } = CFonts;
        say('YUKI\nBOTZ', {
          font: 'slick',
          align: 'center',
          colors: ['blue']
        })
        say(`Made By DitzOfc`, {
          font: 'chrome',
          align: 'center',
          colors: ['green']
        })
        connectToWhatsApp()
      }, 3000);
    }, 5000);
  };

  startSpinners();
  async function connectToWhatsApp() {
    const {
      state,
      saveCreds
    } = await useMultiFileAuthState('./mysession')
    const conn = makeWASocket({
      logger: pino({
        level: "silent"
      }),
      printQRInTerminal: !usePairingCode,
      auth: state,
      browser: ['Ubuntu', 'Chrome', '20.0.04']
    });
    if (usePairingCode && !conn.authState.creds.registered) {
      const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 628xx :\n');
      const code = await conn.requestPairingCode(phoneNumber.trim())
      console.log(chalk.green(`Your Pairing Code: ${code}`))
    }
    conn.decodeJid = (jid) => {
      if (!jid) return jid
      if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
        return decode.user && decode.server && decode.user + '@' + decode.server || jid
      }
      else return jid
    }

    conn.ev.on('messages.upsert', async chatUpdate => {
      try {
        if (global.db.data) await global.db.write()
        if (!chatUpdate.messages) return;
        var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
        if (!m.message) return
        if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
        m = smsg(conn, m, store)
        require("./commands/case")(conn, m, chatUpdate, store)
      }
      catch (err) {
        console.log(err)
      }
    })

    conn.ev.on('call', async (celled) => {
      let botNumber = await conn.decodeJid(conn.user.id)
      let koloi = global.anticall
      if (!koloi) return
      console.log(celled)
      for (let kopel of celled) {
        if (kopel.isGroup == false) {
          if (kopel.status == "offer") {
            let nomer = await conn.sendTextWithMentions(kopel.from, `*${conn.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
            conn.sendContact(kopel.from, owner.map(i => i.split("@")[0]), nomer)
            await sleep(8000)
            await conn.updateBlockStatus(kopel.from, "block")
          }
        }
      }
    })
    conn.ev.on('contacts.update', update => {
      for (let contact of update) {
        let id = conn.decodeJid(contact.id)
        if (store && store.contacts) store.contacts[id] = {
          id,
          name: contact.notify
        }
      }
    })

    conn.getName = (jid, withoutContact = false) => {
      let id = conn.decodeJid(jid)
      withoutContact = conn.withoutContact || withoutContact
      let v
      if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
        v = store.contacts[id] || {}
        if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
        resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
      })
      else v = id === '0@s.whatsapp.net' ? {
          id,
          name: 'WhatsApp'
        } : id === conn.decodeJid(conn.user.id) ?
        conn.user :
        (store.contacts[id] || {})
      return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }

    conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
      let list = []
      for (let i of kon) {
        list.push({
          displayName: await conn.getName(i + '@s.whatsapp.net'),
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:AditGantengJir@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/CfoZa7yhouZ51XXYM3lKY7\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
        })
      }

      conn.sendMessage(jid, {
        contacts: {
          displayName: `${list.length} Kontak`,
          contacts: list
        },
        ...opts
      }, {
        quoted
      })
    }
    conn.public = true
    conn.ev.on('creds.update', saveCreds)
    conn.downloadMediaMessage = async (message) => {
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(message, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
      }
      return buffer
    }

    conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
      let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
      return await conn.sendMessage(jid, {
        image: buffer,
        caption: caption,
        ...options
      }, {
        quoted
      })
    }

    conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, {
      text: text,
      ...options
    }, {
      quoted
    })

    conn.sendTextWithMentions = async (jid, text, quoted, options = {}) => conn.sendMessage(jid, {
      text: text,
      contextInfo: {
        mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net')
      },
      ...options
    }, {
      quoted
    })

    conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
      let buffer
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options)
      }
      else {
        buffer = await imageToWebp(buff)
      }
      await conn.sendMessage(jid, {
        sticker: {
          url: buffer
        },
        ...options
      }, {
        quoted
      })
      return buffer
    }

    conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
      let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
      let buffer
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options)
      }
      else {
        buffer = await videoToWebp(buff)
      }
      await conn.sendMessage(jid, {
        sticker: {
          url: buffer
        },
        ...options
      }, {
        quoted
      })
      return buffer
    }

    conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
      let quoted = message.msg ? message.msg : message
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(quoted, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
      }
      let type = await FileType.fromBuffer(buffer)
      trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
      // save to file
      await fs.writeFileSync(trueFileName, buffer)
      return trueFileName
    }
    //=================================================
    conn.cMod = (jid, copy, text = '', sender = conn.user.id, options = {}) => {
      //let copy = message.toJSON()
      let mtype = Object.keys(copy.message)[0]
      let isEphemeral = mtype === 'ephemeralMessage'
      if (isEphemeral) {
        mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
      }
      let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
      let content = msg[mtype]
      if (typeof content === 'string') msg[mtype] = text || content
      else if (content.caption) content.caption = text || content.caption
      else if (content.text) content.text = text || content.text
      if (typeof content !== 'string') msg[mtype] = {
        ...content,
        ...options
      }
      if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
      else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
      if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
      else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
      copy.key.remoteJid = jid
      copy.key.fromMe = sender === conn.user.id
      return proto.WebMessageInfo.fromObject(copy)
    }
    conn.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
      let types = await conn.getFile(PATH, true)
      let {
        filename,
        size,
        ext,
        mime,
        data
      } = types
      let type = '',
        mimetype = mime,
        pathFile = filename
      if (options.asDocument) type = 'document'
      if (options.asSticker || /webp/.test(mime)) {
        let {
          writeExif
        } = require('./lib/sticker.js')
        let media = {
          mimetype: mime,
          data
        }
        pathFile = await writeExif(media, {
          packname: global.packname,
          author: global.packname2,
          categories: options.categories ? options.categories : []
        })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
      }
      else if (/image/.test(mime)) type = 'image'
      else if (/video/.test(mime)) type = 'video'
      else if (/audio/.test(mime)) type = 'audio'
      else type = 'document'
      await conn.sendMessage(jid, {
        [type]: {
          url: pathFile
        },
        mimetype,
        fileName,
        ...options
      }, {
        quoted,
        ...options
      })
      return fs.promises.unlink(pathFile)
    }
    conn.parseMention = async (text) => {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
      let vtype
      if (options.readViewOnce) {
        message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
        vtype = Object.keys(message.message.viewOnceMessage.message)[0]
        delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
        delete message.message.viewOnceMessage.message[vtype].viewOnce
        message.message = {
          ...message.message.viewOnceMessage.message
        }
      }
      let mtype = Object.keys(message.message)[0]
      let content = await generateForwardMessageContent(message, forceForward)
      let ctype = Object.keys(content)[0]
      let context = {}
      if (mtype != "conversation") context = message.message[mtype].contextInfo
      content[ctype].contextInfo = {
        ...context,
        ...content[ctype].contextInfo
      }
      const waMessage = await generateWAMessageFromContent(jid, content, options ? {
        ...content[ctype],
        ...options,
        ...(options.contextInfo ? {
          contextInfo: {
            ...content[ctype].contextInfo,
            ...options.contextInfo
          }
        } : {})
      } : {})
      await conn.relayMessage(jid, waMessage.message, {
        messageId: waMessage.key.id
      })
      return waMessage
    }

    conn.getFile = async (PATH, save) => {
      let res
      let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
      //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
      let type = await FileType.fromBuffer(data) || {
        mime: 'application/octet-stream',
        ext: '.bin'
      }
      filename = path.join(__filename, '../tmp/' + new Date * 1 + '.' + type.ext)
      if (data && save) fs.promises.writeFile(filename, data)
      return {
        res,
        filename,
        size: await getSizeMedia(data),
        ...type,
        data
      }
    }
    spinner.add("on", {
      text: "...",
      color: "yellow"
    });
    conn.ev.on('connection.update', async (update) => {
      const {
        connection,
        lastDisconnect
      } = update;
      if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          spinner.fail("on", {
            text: `Bad Session File, Please Delete Session and Scan Again`,
            color: "red"
          });
          process.exit();
        }
        else if (reason === DisconnectReason.connectionClosed) {
          spinner.update("on", {
            text: 'Connection closed, reconnecting....',
            color: "yellow"
          });
          connectToWhatsApp();
        }
        else if (reason === DisconnectReason.connectionLost) {
          spinner.update("on", {
            text: 'Connection Lost from Server, reconnecting...',
            color: "yellow"
          });
          connectToWhatsApp();
        }
        else if (reason === DisconnectReason.connectionReplaced) {
          spinner.fail("on", {
            text: 'Connection Replaced, Another New Session Opened, Please Restart Bot',
            color: "red"
          });
          process.exit();
        }
        else if (reason === DisconnectReason.loggedOut) {
          spinner.fail("on", {
            text: `Device Logged Out, Please Delete Folder Session and Scan Again.`,
            color: "red"
          });
          process.exit();
        }
        else if (reason === DisconnectReason.restartRequired) {
          spinner.update("on", {
            text: 'Restart Required, Restarting...',
            color: "yellow"
          });
          connectToWhatsApp();
        }
        else if (reason === DisconnectReason.timedOut) {
          spinner.update("on", {
            text: 'Connection TimedOut, Reconnecting...',
            color: 'yellow'
          });
          connectToWhatsApp();
        }
        else {
          console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
          connectToWhatsApp();
        }
      }
      else if (connection === 'open') {
        spinner.succeed("on", {
          text: "Connected! Dont forget to subscribe YouTube channel DitzOfc",
          color: "green"
        });
        conn.sendMessage(owner + '@s.whatsapp.net', {
          text: `Your bot has successfully connected!`
        });
      }
    });
    return conn;
  }
  setInterval(async () => {
    await exec("rm -rf ./tmp/*")
  }, 60 * 60 * 1000)
})()