//Ceknya
if(cekUser("id", sender) !== null) return reply('Kamu sudah terdaftardi database.)
if (!q) return reply(`Example: $(prefix+command) email\n\nContoh ${prefix+command} support@kizakixd.xyz`)

// Buat transporter
let transporter = nodemailer.createTransport({
service: 'gmail
auth: {
user: 'helloiamkizakixd@gmail.com,
pass: '-'
}
});

 // Buat opsi email
let mailOptions = {
from: 'X-Zey Multi Device Verify'
to: "${q}",
subject: 'EMAIL VERIFY BOT WHATSAPP',
text: `Halo \n\nTerimakasih, anda telah mendaftar di bot kami!\ntetap patuhi rules bot yah \n\nJangan berikan kode ini ke siapapun!!\n==========\nKode Verifikasi Anda: ${toDigit(kodeVerify)}\n=========\n\n© KiZakiXD`
}

//Pengirimannya
transporter.sendMail(mailOptions, function(error, info){
if (error) {
console.log(error);
 } else {
console.log('Email terkirim:' color(info.response,'red'));
}
 });
m.reply('Kode sudah dikirim di email anda, jika tidak ada cek bagian folder spam.')
