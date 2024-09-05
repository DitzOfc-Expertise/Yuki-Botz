# WELCOME TO PROJECT YUKI_BOTZ
Bot ini dibuat oleh DitzOfc, seorang programmer pemula. Bot ini dibuat dengan tujuan untuk mempermudah aktivitas sehari-hari, saya sangat berterima kasih dan tidak bisa melupakan dukungan yang telah Anda berikan kepada saya selama ini.

# NOTE!
Script Ini *Gratis* Dan No ENC 100% Dan Saya Akan akan melanjutkan Update, Dilarang di jual, Jika ketahuan menjual Script Ini maka saya akan memberhentikan Update dan mencari siapa yang menjual dan saya akan pastikan orang tersebut tidak dapat membuka WhatsApp nya kembali

# Penggunaan Dan Penginstallan 
`Pilih Sesuai Kebutuhanmu`

<details close="close">
<summary><i><b>For Termux</b></i></summary>

***
### 1. Install Aplikasi [Termux](https://f-droid.org/repo/com.termux_118.apk)
> Setelah Install Aplikasi Termux, Silahkan Salin Teks Dibawah, Setelah Disalin Tempel Di Aplikasi Termux.
```bash
pkg update -y;pkg upgrade -y;pkg install nodejs -y;pkg install git -y;git clone https://github.com/DitzOfc-Expertise/Yuki_Botz.git && cd Yuki_Botz; node index
```
***
</details></details>

### Tutorial Pengunaan Function Send Button
<details close="close">
<summary><i><b>Send Button Message</b></i></summary>

***
```js
/**
  * ©DitzOfc
  **/
let buttons = [{ text: '', id: '' }]

conn.sendButtonMsg(jid, 'text', 'footer', buttons, quoted)
// Or
conn.sendButtonMsg(jid, 'text', 'footer', [{ text: '', id: '' }], quoted)
```
***
</details></details>
<details close="close"><summary><i><b>Send Button Message With Image</b></i></summary>

***
```js
/**
  * ©DitzOfc
  * The imageUrl part must be a string of url
  **/
let buttons = [{ text: '', id: '' }]
conn.sendButtonImg(jid, 'text', 'footer', buttons, imageUrl, quoted)
// or
conn.sendButtonImg(jid, 'text', 'footer', [{ text: '', id: '' }], imageUrl, quoted)
```
***
</details></details>
<details close="close">
<summary><i><b>Send List Message</b></i></summary>

  ***
```js
/**
  * ©DitzOfc
  **/
let sections = [{
  title: 'title',
  rows: [{
  header: 'header',
  title: 'title',
  description: 'description',
  id: 'id' 
}] 
}]

conn.sendListMsg(jid, 'text', 'footer', 'titleButton', sections, quoted)
```
***
</details></details>
<details close="close">
<summary><i><b>Send List Message With Image</b></i></summary>

***
```js
/**
  * ©DitzOfc
  * The imageUrl part must be a string of url
  **/
let sections = [{
  title: 'title',
  rows: [{
  header: 'header',
  title: 'title',
  description: 'description',
  id: 'id' 
}] 
}]

conn.sendListImg(jid, 'text', 'footer', 'titleButton', sections, imageUrl, quoted)
```
***
</details></details>
<details close="close">
<summary><i><b>Send Button Card</b></i></summary>

***
```js
/**
  * ©DitzOfc
  * The imageUrl part must be a string of url
  * [cards] Must follow the example below
  * type = ['buttons', 'url']
  **/
  let cards = [
    {
      header: 'header',
      body: 'body',
      footer: 'footer',
      imageUrl: 'string',
      buttons: [
        {
          type: 'url',
          text: "text of buttons url",
          url: "https://example.com"
        },
        {
          type: 'buttons',
          text: "text of buttons",
          id: "quick_reply_id_1"
        }
      ]
    }
  ];

  await conn.sendButtonCard(jid, 'text', 'footer', cards, quoted);
```
***
</details></details>
<details close="close">
<summary><i><b>Send Multiple Button</b></i></summary>
  
***
```js
let buttons = [{
  // type url
  type: "url",
  text: "Your Text",
  url: "Your Url Here"
 },
 {
   // type buttons
   type: "buttons",
   text: "Your Title Button Here",
   id: "toid"
 },
 {
   // type copy buttons
   type: "copy",
   text: "Your title button copy here",
   copy_code: "Your Text to copy here"
}]
// Integrasikan Button Copy Ke Socket
await conn.sendButton(m.chat, 'Your Text Here', 'Your Footer Here', buttons, m) 
```
***
</details></details>

# Credits
Thanks To:

- Shannz

# Issues
Jika terjadi masalah atau script error silahkan buka Issues atau hubungi [Saya](https://wa.me/6285717062467)
