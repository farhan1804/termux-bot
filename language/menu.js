const { processTime } = ('@adiwajshing/baileys')
const uptime = process.uptime()
const moment = require("moment-timezone");
const a = '```';
const JAM = moment.tz('Asia/Jakarta').format('HH:mm:ss')
function tanggal(){

myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}
function kyun(seconds){

  function pad(s){

    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
const menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
┌────❏ ${a}ABOUT USER${a}
├◪ ${a}Nama : ${pushname}${a}
├◪ ${a}Premium :${a} ${premi}
├◪ ${a}Nomer : wa.me/${sender.split("@")[0]}${a}
├◪ ${a}Uang mu : Rp${uangku}${a}
├◪ ${a}XP : ${getLevelingXp(sender)}/${reqXp}${a}
├◪ ${a}Level : ${getLevelingLevel(sender)}${a}
├◪ ${a}Role : ${role}${a}
├◪ ${a}User register : ${_registered.length}${a}
└─────────────────────

┌──────「 *ABOUT FARHAN BOT* 」
│
├◪ *https://tinyu.ly/frhnrzky*
├◪ *AKTIF* : 
│ *${kyun(uptime)}*
├◪ *JAM* : *${JAM} WIB*
├◪ *TANGGAL* : 
│ *${tanggal()}*
├◪ *V 2.1.0*
├◪ *http://wa.me/6288279179668*
├◪ *POWERED BY FARHAN*
└──────────────

┌──────「 *TOP UP GAME* 」
├◪ ${a}${prefix}vilogff${a}
├◪ ${a}${prefix}ff${a}
├◪ ${a}${prefix}payment${a}
├◪ ${a}${prefix}info${a}
├◪ ${a}${prefix}donasi${a}
├◪ ${a}${prefix}owner${a}
└────────────────
 
┌───❏ ${a}MENU FARHAN BOT${a}
├◪ ${a}•${prefix}makermenu${a}
├◪ ${a}•${prefix}funmenu${a}
├◪ ${a}•${prefix}groupmenu${a}
└──────────────
┌───❏ ${a}MUTUAL${a}
├◪ ${a}•${prefix}mutual${a}
├◪ ${a}•${prefix}next${a}
└──────────────
 
┌───❏ ${a}MEDIA MENU${a}
├◪ ${a}•${prefix}brainly${a} *[VIP]*
├◪ ${a}•${prefix}pinterest${a}
├◪ ${a}•${prefix}resepmasakan${a}
├◪ ${a}•${prefix}igstalk${a}
├◪ ${a}•${prefix}bitly${a}
├◪ ${a}•${prefix}tiktokstalk${a} *[VIP]*
├◪ ${a}•${prefix}ssweb${a}
├◪ ${a}•${prefix}kbbi${a}
├◪ ${a}•${prefix}joox${a} *[VIP]*
└─────────────────────
 
┌────❏ ${a}NSFW${a}
├◪ ${a}•${prefix}anjing${a}
├◪ ${a}•${prefix}nekonime${a}
├◪ ${a}•${prefix}pokemon${a}
├◪ ${a}•${prefix}husbu${a}
├◪ ${a}•${prefix}nangis${a}
├◪ ${a}•${prefix}cium${a}
├◪ ${a}•${prefix}peluk${a}
├◪ ${a}•${prefix}ranime${a}
└───────────────────
 
┌──❏ ${a}LIMIT & UANG${a}
├◪ ${a}•${prefix}limit${a}
├◪ ${a}•${prefix}buylimit${a}
├◪ ${a}•${prefix}transfer${a}
├◪ ${a}•${prefix}dompet${a}
├◪ ${a}•${prefix}giftlimit${a}
└────────────────
 
┌───❏ ${a}TOOLS${a}
├◪ ${a}•${prefix}bass${a}
├◪ ${a}•${prefix}tomp3${a}
├◪ ${a}•${prefix}slowmo${a}
├◪ ${a}•${prefix}gemok${a}
├◪ ${a}•${prefix}wasted${a}
├◪ ${a}•${prefix}tourl${a}
├◪ ${a}•${prefix}triggered${a}
├◪ ${a}•${prefix}tupai${a}
└──────────────
 
┌────❏ ${a}CLOUD STORAGE${a}
├◪ ${a}•${prefix}addsticker${a}
├◪ ${a}•${prefix}getsticker${a}
├◪ ${a}•${prefix}stickerlist${a}
├◪ ${a}•${prefix}addvideo${a}
├◪ ${a}•${prefix}getvideo${a}
├◪ ${a}•${prefix}videolist${a}
├◪ ${a}•${prefix}getimage${a}
├◪ ${a}•${prefix}addImage${a}
├◪ ${a}•${prefix}imagelist${a}
├◪ ${a}•${prefix}addaudio${a}
├◪ ${a}•${prefix}getaudio${a}
├◪ ${a}•${prefix}audiolist${a}
└──────────────────
 
┌───❏ ${a}OWNER MENU${a}
├◪ ${a}•${prefix}bc${a}
├◪ ${a}•${prefix}addbadword${a}
├◪ ${a}•${prefix}delbadword${a}
├◪ ${a}•${prefix}bcgc${a}
├◪ ${a}•${prefix}kickall${a}
├◪ ${a}•${prefix}setreply${a}
├◪ ${a}•${prefix}setprefix${a}
├◪ ${a}•${prefix}clearall${a}
├◪ ${a}•${prefix}block${a}
├◪ ${a}•${prefix}unblock${a}
├◪ ${a}•${prefix}leave${a}
├◪ ${a}•${prefix}event [1/0]${a}
├◪ ${a}•${prefix}clone${a}
├◪ ${a}•${prefix}setppbot${a}
└──────────────
 
`
}
exports.menu = menu
