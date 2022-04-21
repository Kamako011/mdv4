const fs = require('fs')
const chalk = require('chalk')

//===> FREE API
global.APIs = {
	ryuu: 'https://api-ryubotz.herokuapp.com',
}

global.APIKeys = {
	'https://api-ryubotz.herokuapp.com': 'RyuBotz',
}

//===> UBAH DISINI
global.namaowner = 'ʜᴀɴᴀ ᴍᴀᴋᴀɪʀᴀ' //Ganti Jadi Namamu
global.owner = ['6281298309340','6288289729113'] //Kalo Mau Lebih Tambahin Aja
global.nomerowner = '6281298309340' //Owner Utama Istilahnya
global.namabot = 'ᴠɪᴏʟᴇᴛʙᴏᴛ-ᴍᴅ' //Ganti Jadi Nama Botmu
global.packname = '© ᴠɪᴏʟᴇᴛʙᴏᴛ-ᴍᴅ' //Sticker Weem
global.author = 'ᴠɪᴏʟᴇᴛʙᴏᴛ-ᴍᴅ By ʜᴀɴᴀ ᴍᴀᴋᴀɪʀᴀ' //Sticker Weem
global.webme = 'https://instabio.cc/violet'
global.sessionName = 'session'
global.bg_welcome = 'https://telegra.ph/file/528b594d5d91c08482515.jpg' //Max 30kb Agar Tidak Delay
global.youtube = 'https://youtube.com/c/ApriNaLdyMusicRemix'
global.github = 'https://github.com/kamako011'
global.instagram = 'instagram.com/kelvin01996'

//===> BACKGROUND SETIAP MENU
global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','/','#','.']
global.sp = '⭔'

//===> EDIT SESUAI KEMAUANMU
global.mess = {
admin: '*LU ADMIN? 🤨*',
botAdmin: '*BOT BUKAN ADMIN 😔*',
owner: '*LU BUKAN OWNER GW 😠*',
group: '*KHUSUS GROUP 😏*',
private: '*KHUSUS PRIVATE CHAT*',
bot: '*KHUSUS PENGGUNA NOMER BOT*',
wait: '*SABAR SEDANG DI PROSES ...*',
done: '*DONE NGAB 🤗*',
}
global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
