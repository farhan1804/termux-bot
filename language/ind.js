const a = '```'

exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 BELUM DAFTAR 」*\n\n*cara daftar ${prefix}daftar nama|umur*\nExample: ${prefix}daftar Farhan|17`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}
exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.funmenu = (prefix) => {
return `
┌───❏ ${a}FUN MENU${a}
├◪ ${a}•${prefix}lirik${a}
├◪ ${a}•${prefix}artinama${a}
├◪ ${a}•${prefix}chord${a}
├◪ ${a}•${prefix}bisakah${a}
├◪ ${a}•${prefix}kapankah${a}
├◪ ${a}•${prefix}apakah${a}
├◪ ${a}•${prefix}rate${a}
├◪ ${a}•${prefix}tebakgambar${a}
├◪ ${a}•${prefix}meme${a}
├◪ ${a}•${prefix}moddroid${a} *[VIP]*
├◪ ${a}•${prefix}happymod${a} *[VIP]*
└─────────────────────
` 
}
exports.makermenu = (prefix) => {

return `
┌──❏ ${a}MAKER MENU${a}
├◪ ${a}•${prefix}stiker${a}
├◪ ${a}•${prefix}textlight${a}
├◪ ${a}•${prefix}glitchtext${a}
├◪ ${a}•${prefix}slap${a}
├◪ ${a}•${prefix}tampar${a}
├◪ ${a}•${prefix}quotemaker${a}
├◪ ${a}•${prefix}qrcode${a}
├◪ ${a}•${prefix}nulis${a}
├◪ ${a}•${prefix}tahta${a}
├◪ ${a}•${prefix}ttp${a}
└─────────────────────
` 
}
exports.groupmenu = (prefix) => {
return `
┌──❏ ${a}GROUP MENU${a}
├◪ ${a}•${prefix}delete${a}
├◪ ${a}•${prefix}hidetag${a}
├◪ ${a}•${prefix}blocklist${a}
├◪ ${a}•${prefix}grouplist${a}
├◪ ${a}•${prefix}level${a}
├◪ ${a}•${prefix}linkgc${a}
├◪ ${a}•${prefix}tagall${a}
├◪ ${a}•${prefix}setpp${a}
├◪ ${a}•${prefix}add${a}
├◪ ${a}•${prefix}kick${a}
├◪ ${a}•${prefix}setname${a}
├◪ ${a}•${prefix}setdesc${a}
├◪ ${a}•${prefix}demote${a}
├◪ ${a}•${prefix}promote${a}
├◪ ${a}•${prefix}listadmin${a}
├◪ ${a}•${prefix}group [buka/tutup]${a}
├◪ ${a}•${prefix}leveling [enable/disable]${a}
├◪ ${a}•${prefix}nsfw [1/0]${a}
├◪ ${a}•${prefix}simih [1/0]${a}
├◪ ${a}•${prefix}welcome [1/0]${a}
├◪ ${a}•${prefix}antilink [1/0]${a}
├◪ ${a}•${prefix}nobadword [enable/disable]${a}
└─────────────────────
 `
 }
 exports.vilogff = () => {
 return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ───⊱ *FREE FIRE VIA LOGIN* ⊰───
┃➻ ${a}Process: 1 - 10 menit${a}
┃➻ ${a}Stock  : Unlimited${a}
┃➻ ${a}Need   : DATA AKUN${a}
┣━━━━━━━━━━━━━━━━━━━━━━━━━┛
┃  *───⊱ NOMINAL DIAMONDS ⊰───*
┃ ${a}100    DM = IDR 12.000${a}
┃ ${a}200    DM = IDR 24.000${a}
┃ ${a}310    DM = IDR 36.000${a}
┃ ${a}520    DM = IDR 60.000${a}
┃ ${a}830    DM = IDR 96.000${a}
┃ ${a}1060   DM = IDR 120.000${a}
┃ ${a}1370   DM = IDR 156.000${a}
┃ ${a}1580   DM = IDR 180.000${a}
┃ ${a}2180   DM = IDR 240.000${a}
┃ ${a}2700   DM = IDR 300.000${a}
┃ ${a}3240   DM = IDR 360.000${a}
┃ ${a}4360   DM = IDR 480.000${a}
┃ ${a}5600   DM = IDR 590.000${a}
┃ ${a}6660   DM = IDR 708.000${a}
┃ ${a}7780   DM = IDR 826.000${a}
┃ ${a}11200  DM = IDR 1.150.000${a}
┃  ───⊱ *MEMBERSHIP* ⊰───
┃ ${a}MM      = Rp. 24.000${a}
┃ ${a}MB      = Rp. 96.000${a}
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛
*NOTE :*
${a}• Proses 1 - 10 menit ( Tergantung antrian )${a}
${a}• Harga sewaktu waktu bisa berubah.${a}
${a}• Wajib Kirim kode pemulihan apabila memakai 2Faktor ( Terutama Login GOOGLE )${a}

*ALASAN PROSES LAMA :*
${a}• Jumlah orderan banyak${a}
${a}• Jaringan admin${a}
`
}
exports.ff = () => {
return `
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*𒆜 List DIAMOND Free Fire BattleGround*
*By FiiGANZ*

${a}• 5💎 : 840${a}
${a}• 20💎 : 2,800${a}
${a}• 30💎 : 4.480${a}
${a}• 50💎 : 6,720${a}
${a}• 70💎 : 9,240${a}
${a}• 100💎 : 13,440${a}
${a}• 140💎 : 18,480${a}
${a}• 150💎 : 20,160${a}
${a}• 170💎 : 23.000${a}
${a}• 210💎 : 27.720${a}
${a}• 250💎 : 33.320${a}
${a}• 280💎 : 36.960${a}
${a}• 355💎 : 46.200${a}
${a}• 425💎 : 55,440${a}
${a}• 500💎 : 65,520${a}
${a}• 635💎 : 83,160${a}
${a}• 720💎 : 92,400${a}
${a}• 860💎 : 110,900${a}
${a}• 930💎 : 120,200${a}
${a}• 1000💎 : 129,500${a}
${a}• 1075💎 : 138,600${a}
${a}• 1440💎 : 184,800${a}
${a}• 2000💎 : 252,000${a}

*MEMBERSHIP*
${a}MINGGUAN : 28,000${a}
${a}BULANAN : 112,000${a}

${a}• Format Pesanan : ID + NICK | NOM DM${a}

*𒆜NB : KESALAHAN ID + NICK BUKAN TANGGUNG JAWAB ADMIN!*
*TANYAKAN STOK DULU KEPADA ADMIN🙏*
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`
}
exports.ml = () => {
return `
┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃    *────⊱ MOBILE LEGENDS ⊰────*
┃➻ ${a}Process: 1 - 10 menit${a}
┃➻ ${a}Stock  : Unlimited${a}
┃➻ ${a}Need   : ID & Server${a}
┣━━━━━━━━━━━━━━━━━━━━━━━━━┛
┃   *───⊱ NOMINAL DIAMONDS ⊰───*
┃ ${a}86   DM = Rp. 00${a}
┃ ${a}172  DM = Rp. 00${a}
┃ ${a}257  DM = Rp. 00${a}
┃ ${a}344  DM = Rp. 00${a}
┃ ${a}429  DM = Rp. 00${a}
┃ ${a}514  DM = Rp. 00${a}
┃ ${a}706  DM = Rp. 00${a}
┃ ${a}878  DM = Rp. 00${a}
┃ ${a}1050 DM = Rp. 00${a}
┃ ${a}1412 DM = Rp. 00${a}
┃ ${a}2195 DM = Rp. 00${a}
┃ ${a}3688 DM = Rp. 00${a}
┃ ${a}5532 DM = Rp. 00${a}
┃  *───⊱ STARLIGHT ⊰───*
┃ ${a}SL/TL   = Rp. 00${a}
┃ ${a}STAR+   = Rp. 00${a}
┗━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
}
exports.payment = () => {
return `
┏━━━━━━━⊱ *PAYMENT* ⊰━━━━━━━━━━━━━┓
┃${a}GOPAY  : 0895604611413 | Fii GANZ${a}
┃${a}DANA   : 0895604611413 | SURYATI${a}
┃${a}OVO    : 0895604611413 | SURYATI${a}
┃${a}QRIS   : PP GRUB${a}
┗━━━━━━━⊱ *PAYMENT* ⊰━━━━━━━━━━━━━┛ 
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 SELAMAT 」*
┏⊱ *Nama* : ${pushname}
┣⊱ *Nomer* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*beli limit untuk mendapatkan limit/ naik level*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nama* : ${pushname}\n┣⊱ *Nomer* : ${sender.split("@")[0]}\n┣⊱ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}
