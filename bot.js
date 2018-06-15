const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$";
/////////////////////سيرف جديد///////////////////////////////
//اسيرفر جديد
client.on('message', (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content.startsWith(Prefix[message.guild.id].prefix+"سيرفر جديد")) {
if(!message.member.hasPermission('MANAGE_ROLES'))return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)});
let claim  = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)   
.setDescription(`** اوامر بناء سيرفر جديد  : 
${Prefix[message.guild.id].prefix}رتب عربية : لأنشاء رتب عربية
${Prefix[message.guild.id].prefix}رتب اجنبية : لانشاء رتب اجنبية  
${Prefix[message.guild.id].prefix}رتب اجنبية مزخرفة : لانشاء رتب اجنبية مزخرفة   
${Prefix[message.guild.id].prefix}رتب فاميلي : لانشاء رتب سيرفر فاميلي
${Prefix[message.guild.id].prefix}رتب بوتات : لانشاء رتب سيرفر بوتات
${Prefix[message.guild.id].prefix}خواص : لانشاء الخواص    
${Prefix[message.guild.id].prefix}الوان : لانشاء الالوان    
${Prefix[message.guild.id].prefix}رومات العاب : لانشاء رومات سيرفر العاب     
${Prefix[message.guild.id].prefix}رومات بوتات : لانشاء رومات سيرفر بوتات  
${Prefix[message.guild.id].prefix}رومات فاميلي : لانشاء رومات سيرفر فاميلي
${Prefix[message.guild.id].prefix}حذف الرتب : لحذف الرتب
${Prefix[message.guild.id].prefix}حذف الرومات : لحذف الرومات**`)
.setColor('RED')
message.channel.sendEmbed(claim);
}
});
//حذف الرومات
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content===(Prefix[message.guild.id].prefix+"حذف الرومات")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send("need ``MANAGE_CHANNELS`` premission").then(msg => msg.delete(6000));
var user = message.author;
    message.reply(`** (هل انت متأكد من انك تريد حذف الرومات جميعها (نعم/لا**`)
    const collector = new Discord.MessageCollector(message.channel, m => user === user , { max : 1 , time: 7000 , errors: ['time']}) 
    collector.on('collect', message => {
if (message.content == "لا")return message.channel.send(`**${message.author.username}**| تم ابطال العملية `).then(msg => msg.delete(5000));
if (message.content == "نعم"){
message.channel.send(`**${message.author.username}**|  جاري مسح الرومات`).then(msg => msg.delete(5000));
        message.guild.channels.forEach(c => {
        c.delete()
 })
message.channel.send(`**${message.author.username}**| تم مسح كل الرتب كل الرومات`)
  }
})
}
});
//حذف الرتب
client.on('message', (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content===(Prefix[message.guild.id].prefix+"حذف الرتب")) {
if(!message.member.hasPermission('ADMINISTRATOR'))return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)});
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("need ``MANAGE_ROLES`` premission").then(msg => msg.delete(6000));
var user = message.author;
    message.reply(`** (هل انت متأكد من انك تريد حذف الرتب جميعها (نعم/لا**`)
    const collector = new Discord.MessageCollector(message.channel, m => user === user , { max : 1 , time: 7000 , errors: ['time']}) 
    collector.on('collect', message => {
if (message.content == "لا")return message.channel.send(`**${message.author.username}**| تم ابطال العملية `).then(msg => msg.delete(5000));
if (message.content == "نعم"){
message.channel.send(`**${message.author.username}**|  جاري مسح الرتب`).then(msg => msg.delete(5000));
message.guild.roles.forEach(r => {
r.delete()
})
message.channel.send(`**${message.author.username}**| تم مسح كل الرتب كل الرتب`)
}
})		
}
});
//رومات العاب
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content===(Prefix[message.guild.id].prefix+"رومات العاب")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
message.channel.send(`**${message.author.username}**|  جاري انشاء رومات سيرفر العاب`)
	message.guild.createChannel('info', 'text');
	message.guild.createChannel('chat', 'text');
	message.guild.createChannel('photo', 'text');
	message.guild.createChannel('youtube', 'text');
	message.guild.createChannel('party', 'text');
	message.guild.createChannel('bot', 'text');
	message.guild.createChannel('log', 'text');	
	message.guild.createChannel('❋─────❃─────❋', 'voice');
    message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('♚ ↯α∂мιη-الاداره ↯♚', 'voice');
	message.guild.createChannel('*gαтнєяιиg*/تجمع', 'voice');
    message.guild.createChannel('⚔кιиgѕ ѕєяνєя/ملوك السيرفر⚔', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('Quran||القرآن الكريم ♧♤', 'voice');
	message.guild.createChannel('ƒα3αℓιαт /فعاليات', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('αgαя.ισ/تجمعات', 'voice');
	message.guild.createChannel('αgαя.ισ/تجمعات', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('✬↯sαωαℓιғ↯سوالف✬', 'voice');
	message.guild.createChannel('✬↯sαωαℓιғ↯وناسة✬', 'voice');
	message.guild.createChannel('мαℓαqєf /ملاقيفـ', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('اغاني🎵', 'voice');
	message.guild.createChannel('اغاني🎶', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('LIVE 🔴 مباشر ♤', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('✬тεαм 1✬', 'voice');
	message.guild.createChannel('✬тεαм 2✬', 'voice');
	message.guild.createChannel('✬тεαм 3✬', 'voice');
	message.guild.createChannel('✬тεαм 4✬', 'voice');
	message.guild.createChannel('❋─────❃─────❋', 'voice');
	message.guild.createChannel('✿  ᏚᏞᎬᎬᏢ▪ zZ  ✿', 'voice');
  }			
});
//رتب اجنبية مزخرفة
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content===(Prefix[message.guild.id].prefix+"رتب اجنبية مزخرفة")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
message.channel.send(`**${message.author.username}**|  جاري انشاء الرتب  `)
message.guild.createRole({
     name: "♚ԾಬƝЄℜ"
})
message.guild.createRole({
     name: "♚Λ∂ministrator"
})
message.guild.createRole({
     name: "♚Ⅽᤢིᰟ҉᠁ᎧᷱⷤᎳהᎬᎡ⟜⼀►"
})
message.guild.createRole({
     name: "♚ѴÏㄗ※ﾚモ丹刀૯Ʀ"
})
message.guild.createRole({
     name: "♚ৡ͜͡➢𖦲ᏞꯐꪁꤪꤨᗫꯐᎡ𖦲"
})
message.guild.createRole({
     name: "♚Ⅽᤢིᰟ҉᠁♚ৡ͜͡➢𖦲ᏞꯐꪁꤪꤨᗫꯐᎡ𖦲"
})
message.guild.createRole({
     name: "♚𖤍⟆⟅᪶ᎯᎠꤪꤨᎷᏐ꤆⟆⟅᪶𖤍"
})
message.guild.createRole({
     name: "♚乃iG 乃Ф§§"
})
message.guild.createRole({
     name: "♚乃Ф§§"
})
message.guild.createRole({
     name: "♚QUEEN❀"
})
message.guild.createRole({
     name: "♚↾FRIEND"
})
message.guild.createRole({
     name: "♚乃Фイ"
})
message.guild.createRole({
     name: "♚ℳ̷̷̐Є₥β̃̾ÊR"
})
message.guild.createRole({
     name: "______________Bots______________"
	 ,color: "#fff000"
})
}
 });
//رتب اجنبية
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content===(Prefix[message.guild.id].prefix+"رتب اجنبية ")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
message.channel.send(`**${message.author.username}**|  جاري انشاء الرتب  `)
message.guild.createRole({
     name: "♚"
})
message.guild.createRole({
     name: "OWNER"
})
message.guild.createRole({
     name: "ADMINISTRATOR"
})
message.guild.createRole({
     name: "CO-OWNER"
})
message.guild.createRole({
     name: "VIP-LEADER"
})
message.guild.createRole({
     name: "LEADER"
})
message.guild.createRole({
     name: "CO-LEADER"
})
message.guild.createRole({
     name: "ADMIN"
})
message.guild.createRole({
     name: "BIG-BOSS"
})
message.guild.createRole({
     name: "BOOS"
})
message.guild.createRole({
     name: "QWEEN"
})
message.guild.createRole({
     name: "FREIND"
})
message.guild.createRole({
     name: "BOT"
})
message.guild.createRole({
     name: "MUSIC-BOT"
})
message.guild.createRole({
     name: "MEMBER"
})
message.guild.createRole({
     name: "______________Bots______________"
})
}
 });
///رتب عربية
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content===(Prefix[message.guild.id].prefix+"رتب عربية")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
message.channel.send(`**${message.author.username}**|  جاري انشاء الرتب  `)
message.guild.createRole({
     name: "ৡ͜͡➣مهيب"
})
message.guild.createRole({
     name: "⚔ مشير ⚔"
})
message.guild.createRole({
     name: "✵✵✵فريق اول✵✵✵"
})
message.guild.createRole({
     name: "✵✵فريق✵✵"
})
message.guild.createRole({
     name: "✵لواء✵"
})
message.guild.createRole({
     name: "𖡦𖡦𖡦عميد𖡦𖡦𖡦"
})
message.guild.createRole({
     name: "𖡦𖡦عقيد𖡦𖡦"
})
message.guild.createRole({
     name: "𖡦مقدم𖡦"
})
message.guild.createRole({
     name: "𖤍𖤍𖤍رائد𖤍𖤍𖤍"
})
message.guild.createRole({
     name: "𖤍𖤍استشاري𖤍𖤍"
})
message.guild.createRole({
     name: "𖤍نقيب𖤍"
})
message.guild.createRole({
     name: "𖤐𖤐𖤐ملازم اول𖤐𖤐𖤐"
})
message.guild.createRole({
     name: "𖤐𖤐ملازم𖤐𖤐"
})
message.guild.createRole({
     name: "𖤐تلميذ مرشح𖤐"
})
message.guild.createRole({
     name: "☤الشعب☤"
})
}
 });
 //خواص
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content.startsWith(Prefix[message.guild.id].prefix+"خواص")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)});
message.channel.send(`**${message.author.username}**|  جاري انشاء الخواص الان`)		
	message.guild.createRole({
     name: "______________الخصائص______________"
	 ,color: "#ffe002"
	 })
const role = message.guild.createRole({ name:'FM.', permissions:[4194304],color: "#d6680e" });
const role2 = message.guild.createRole({ name:'FD.', permissions:[8388608],color: "#d6680e" });
const role3 = message.guild.createRole({ name:'CN.', permissions:[134217728],color: "#1a7939"});
const role4 = message.guild.createRole({ name:'MM.', permissions:[16777216],color: "#1a7939" });
const role5 = message.guild.createRole({ name:'EP.', permissions:[32768],color: "#277ecd" });
const role6 = message.guild.createRole({ name:'EL.', permissions:[16384],color: "#277ecd" });
const role7 = message.guild.createRole({ name:'DM.', permissions:[8192],color: "#843da4" });
const role8 = message.guild.createRole({ name:'SL.', permissions:[128],color: "#843da4" });
     message.guild.createRole({
	  name:'ER.'
	 ,color: "#ffe002"
	 })
	  message.guild.createRole({
      name: "DJ."
	 ,color: "#ffe002"
	 })
const role9 = message.guild.createRole({ name:'FK.', permissions:[2], color: "#ff0202"});
const role10 = message.guild.createRole({ name:'FB.', permissions:[3],color: "#ff0202" });
}
 });
//الوان
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content.startsWith(Prefix[message.guild.id].prefix+"الوان")) {
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})    
message.channel.send(`**${message.author.username}**| جاري اضافة الالوان الان`)
message.guild.createRole({
     name: "______________colors______________"
     ,color: "#fc80fb"
})
message.guild.createRole({
     name: "1"
     ,color: "#fc80fb"
})
message.guild.createRole({
     name: "2"
     ,color: "#ffd27f"
})
message.guild.createRole({
     name: "3"
     ,color: "#bf7fbf"
})
message.guild.createRole({
     name: "4"
     ,color: "#7fff7f"
})
message.guild.createRole({
     name: "5"
     ,color: "#7f7fff"
})
message.guild.createRole({
     name: "6"
    ,color: "#ffff7f"
})
message.guild.createRole({
     name: "7"
     ,color: "ff7f7f"
})

message.guild.createRole({
     name: "8"
     ,color: "#008000"
})
message.guild.createRole({
     name: "9"
     ,color: "ff0000"
})
message.guild.createRole({
     name: "10"
     ,color: "#ffff00"
})
message.guild.createRole({
     name: "11"
     ,color: "#0000ff"
})
message.guild.createRole({
     name: "12"
     ,color: "#ffa500"
})
message.guild.createRole({
     name: "13"
     ,color: "#ee82ee"
})
message.guild.createRole({
     name: "14"
     ,color: "#00cccc"
})
message.guild.createRole({
     name: "15"
     ,color: "#cc0000"
})
message.guild.createRole({
     name: "16"
     ,color: "#8b0000"
})
message.guild.createRole({
     name: "17"
     ,color: "008f50"
})
message.guild.createRole({
     name: "18"
     ,color: "#9dc4c3"
})
message.guild.createRole({
     name: "19"
     ,color: "#566777"
})
message.guild.createRole({
     name: "20"
     ,color: "#a4b6c0"
})
message.guild.createRole({
     name: "22"
     ,color: "#01e1fe"
})
message.guild.createRole({
     name: "23"
     ,color: "190425" 
})
 message.guild.createRole({
     name: "24"
     ,color: "#297994"
})
message.guild.createRole({
     name: "25"
     ,color: "#1c7097"
})
message.guild.createRole({
     name: "26"
     ,color: "#a9efe0"
})
message.guild.createRole({
     name: "27"
     ,color: "#103584"
})
message.guild.createRole({
     name: "28"
     ,color: "#ffe4e1"
})
message.guild.createRole({
     name: "29"
     ,color: "#fef5f6"
})
message.guild.createRole({
     name: "30"
     ,color: "#05bbd8"
})
message.guild.createRole({
     name: "31"
     ,color: "#f99cc9"
})
message.guild.createRole({
     name: "32"
     ,color: "#731114"
})
message.guild.createRole({
     name: "34"
     ,color: "#e01449"
})
message.guild.createRole({
     name: "35"
     ,color: "#feca14"
})
message.guild.createRole({
     name: "36"
     ,color: "#ffdb00"
})
message.guild.createRole({
     name: "37"
     ,color: "#a50008"
})
message.guild.createRole({
     name: "38"
     ,color: "#8591ca"
})
message.guild.createRole({
     name: "39"
     ,color: "#538cc6"
})
message.guild.createRole({
     name: "40"
     ,color: "#05307a"
})
message.guild.createRole({
     name: "41"
     ,color: "#ffffff"
})
message.guild.createRole({
     name: "42"
     ,color: "#34aac1"
})
message.guild.createRole({
     name: "43"
     ,color: "#faa009"
})
message.guild.createRole({
     name: "43"
     ,color: "#ff0202"
})
message.guild.createRole({
     name: "44"
     ,color: "#00e7ff"
})
message.guild.createRole({
     name: "45"
     ,color: "#0032ff"
})
message.guild.createRole({
     name: "46"
     ,color: "#6e00ff"
})
message.guild.createRole({
     name: "47"
     ,color: "#a07532"
})
message.guild.createRole({
     name: "48"
     ,color: "#3b2500"
})
message.guild.createRole({
     name: "49"
     ,color: "#153b00"
})
message.guild.createRole({
     name: "50"
     ,color: "#316418"
})
message.guild.createRole({
     name: "51"
     ,color: "#162e0a"
})
message.guild.createRole({
     name: "52"
     ,color: "#0f3a33"
})
message.guild.createRole({
     name: "53"
     ,color: "#00ffd5"
})
message.guild.createRole({
     name: "54"
     ,color: "#3a4947"
})
message.guild.createRole({
     name: "55"
     ,color: "#3f1069"
})
message.guild.createRole({
     name: "56"
     ,color: "#691066"
})
message.guild.createRole({
     name: "57"
     ,color: "#e61ddf"
})
message.guild.createRole({
     name: "58"
     ,color: "#6f4f6d"
})
message.guild.createRole({
     name: "59"
     ,color: "#42053f"
})
message.guild.createRole({
     name: "60"
     ,color: "#420506"
})
message.guild.createRole({
     name: "61"
     ,color: "#8a2527"
})
message.guild.createRole({
     name: "62"
     ,color: "#c9679b"
})
message.guild.createRole({
     name: "63"
     ,color: "#585f21"
})
message.guild.createRole({
     name: "64"
     ,color: "#3a4609"
})
message.guild.createRole({
     name: "65"
     ,color: "#74fa74"
})
message.guild.createRole({
     name: "66"
     ,color: "#74c9fa"
})
message.guild.createRole({
     name: "67"
     ,color: "#072f44"
})
message.guild.createRole({
     name: "68"
     ,color: "#002a42"
})
message.guild.createRole({
     name: "69"
     ,color: "#1643c5"
})
message.guild.createRole({
     name: "70"
     ,color: "#576eb1"
})
message.guild.createRole({
     name: "71"
     ,color: "#320557"
})
message.guild.createRole({
     name: "72"
     ,color: "#5a025a"
})
message.guild.createRole({
     name: "73"
     ,color: "#5c3a54"
})
message.guild.createRole({
     name: "74"
     ,color: "#4b0516"
})
message.guild.createRole({
     name: "75"
     ,color: "#663443"
})
message.guild.createRole({
     name: "76"
     ,color: "#da7697"
})
message.guild.createRole({
     name: "77"
     ,color: "#c276da"
})
message.guild.createRole({
     name: "78"
     ,color: "#b4bd17"
})
message.guild.createRole({
     name: "79"
     ,color: "#414701"
})
message.guild.createRole({
     name: "80"
     ,color: "#7b7c6a"
})
message.guild.createRole({
     name: "81"
     ,color: "#638b69"
})
message.guild.createRole({
     name: "82"
     ,color: "#37878d"
})
message.guild.createRole({
     name: "83"
     ,color: "#044d52"
})
message.guild.createRole({
     name: "84"
     ,color: "#1559a8"
})
message.guild.createRole({
     name: "85"
     ,color: "#545d69"
})
message.guild.createRole({
     name: "86"
     ,color: "#396161"
})
message.guild.createRole({
     name: "87"
     ,color: "#148f8f"
})
message.guild.createRole({
     name: "88"
     ,color: "#00ffff"
})
message.guild.createRole({
     name: "89"
     ,color: "#5c4022"
})
message.guild.createRole({
     name: "90"
     ,color: "#994f00"
})
message.guild.createRole({
     name: "91"
     ,color: "#b89268"
})
message.guild.createRole({
     name: "92"
     ,color: "#737507"
})
message.guild.createRole({
     name: "93"
     ,color: "#1b3a17"
})
message.guild.createRole({
     name: "94"
     ,color: "#587750"
})
message.guild.createRole({
     name: "95"
     ,color: "#428830"
})
message.guild.createRole({
     name: "96"
     ,color: "#308854"
})
message.guild.createRole({
     name: "97"
     ,color: "#3c8574"
})
message.guild.createRole({
     name: "98"
     ,color: "#063f31"
})
message.guild.createRole({
     name: "99"
     ,color: "#0effc0"
})
message.guild.createRole({
     name: "100"
     ,color: "#0e3dff"
})
}
 });
//////////////////////اوامر اخرآ////////////////////////
//الاعضاء
client.on('message', message => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content.startsWith(Prefix[message.guild.id].prefix+"الاعضاء")) {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
//ايدي
client.on("message", (message) => {
if (message.author.bot) return;
if (message.author.id === client.user.id) return;
if(!message.channel.guild) return;       
if (message.content.startsWith(Prefix[message.guild.id].prefix+"ايدي")) {
message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);    
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد ', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر ', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .addField(': قمت بدعوة', inviteCount ,true)
    .setFooter(`ProBot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
})    
} 
});
///قرعة
client.on('message', function(message) {
   if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;      
 if(message.content ===( Prefix[message.guild.id].prefix + 'قرعة')) {
let args = message.content.split(" ").slice(1);
if (!args) {
message.channel.send(`**${message.author.username}**|  ستتم القرعة على عشرة ما لم تضع رقما`).then(function(m) {
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 10 ));
}, 1000)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 9 ));
}, 1200)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 5 ));
}, 1300)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 10 ));
}, 1400)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 2 ));
}, 1500)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 10 ));
}, 1600)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 6 ));
}, 1700)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 8 ));
}, 1800)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * 4 ));
}, 1900)
setTimeout(function() {    
m.edit( `__${Math.floor(Math.random() * 10 )}__ النتيجة النهائية`);
}, 2000)
});
return;
}
if (args){
message.channel.send(`**${message.author.username}**|ستتم القرعة على رقم __${args}__ `).then(function(m) {
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1000)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1200)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1300)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1400)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1500)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1600)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1700)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1800)
setTimeout(function() {    
m.edit(Math.floor(Math.random() * args ));
}, 1900)
setTimeout(function() {    
m.edit( `__${Math.floor(Math.random() * args )}__ النتيجة النهائية`);
}, 2000)
});
}
}
});
//اقتراح
client.on('message', message => {
      if(message.content.split(' ')[0] == prefix + 'اقتراح') {
      if(message.channel.guild) return;
      let args = message.content.split(" ").slice(1).join('');
      let join = new Discord.RichEmbed()
             .setThumbnail(`${message.author.avatarURL}`)
             .addField("الأسم:",`${message.author.username}#${message.author.discriminator}`, true)
             .addField('الأقتراح','```'+ args +'```')
             .setColor('RANDOM')
client.channels.get("442775445637693476").sendEmbed(join);
const sugg = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('شكرا على اقتراحك و سيتم مراجعته باذن الله') 
             .setColor('RANDOM')  
              message.author.sendEmbed(sugg);	
  }
});	
//معلومات البوت
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
if(message.content === Prefix[message.guild.id].prefix+ 'معلومات البوت') {
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("صاحب البوت:" , '<@347838851605331968>')
  .addField("البريفكس:" , prefix)
  .addField('مدة التشغيل:', timeCon(process.uptime()), true)
  .addField('البنغ:' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
  .addField('الرام:', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
  .addField("عدد السيرفرات:" , client.guilds.size)
  .addField("عدد مستخدمين البوت:" , client.users.size)
  .addField("عدد الرومات:" , client.channels.size)
  .setColor("#000000")
message.channel.sendEmbed(embed);
 }
});	     
function timeCon(time) {
      let days = Math.floor(time % 31536000 / 86400)
      let hours = Math.floor(time % 31536000 % 86400 / 3600)
      let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
      let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
       days = days > 9 ? days : '0' + days
       hours = hours > 9 ? hours : '0' + hours
       minutes = minutes > 9 ? minutes : '0' + minutes
       seconds = seconds > 9 ? seconds : '0' + seconds
 return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
//افتار
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
      if(message.content.startsWith(Prefix[message.guild.id].prefix + 'افتار')) {
      var mentionned = message.mentions.users.first();
      if(mentionned) {
           var getvalueof = mentionned;
          } else {
           var getvalueof = message.author;
          }
          message.channel.send(`${getvalueof.avatarURL}`);
  }
});	
//
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
     if(message.content === Prefix[message.guild.id].prefix + "افتار السيرفر") {
     message.channel.send(`${message.guild.iconURL}`)
  }
}); 
//سكوت
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
      if(message.content === Prefix[message.guild.id].prefix+ "سكوت") {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
             message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
 })
              message.channel.send('تم قفل الشات')            
 }
});
//
client.on('message', message => {
   if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;      
      if(message.content === Prefix[message.guild.id].prefix + "تكلمو") {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
              message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
 })
              message.channel.send('تم فتح الشات')        
 }
});
//برودكاست
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
    if (message.content.startsWith(Prefix[message.guild.id].prefix + "برودكاست")) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})
    let args = message.content.split(' ').slice(1).join(' ')
    if (!args) return message.reply('يجب وضع رسالة لأرسال البرودكاست');
    message.reply(`** هل أنت متأكد من أنك تريد أرسال البرودكاست ؟ **`).then(() => {
    message.channel.awaitMessages(msg => msg.content == 'yes' || msg.content == "نعم", {
            max: 1,
            time: 30000,
            errors: ['time']
             })
            message.guild.members.forEach(m => {
			m.send(args)                
            })
            .then(() => {
             message.channel.send('...انتظر قليلا').then(function(m) {
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓]1`)
             }, 1000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓]2%`)
             }, 3000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة: \n[▓▓▓]3%`)
             }, 5000)
             setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓]4%`)
             }, 7000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓]15%`)
             }, 9000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓]23%`)
             }, 10000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓]46%`)
             }, 12000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓]59%`)
             }, 14000)
               setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓]68%`)
             }, 16000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓]75%`)
             }, 18000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]87%`)
             }, 20000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]95%`)
             }, 21000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]96%`)
             }, 23000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]97%`)
             }, 24000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]98%`)
             }, 25000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]99%`)
             }, 26000)
                setTimeout(function() {
               m.edit(`جاري ارسال الرسالة:\n [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100%`)
             }, 27000)
                setTimeout(function() {
               m.edit(`☑ ${message.guild.memberCount} | تم أرسال الرسالة لـ`)
             }, 29000)
             }); 
                //message.guild.members.filter(m=> m.presence.status !== 'offline').forEach(m => {
});
});
}
});
//كك
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
  var sender = message.author;
  if (message.content.startsWith(Prefix[message.guild.id].prefix+"كك")) {
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`**${sender.username} , يجب انت تكون لديك خاصية الطرد لاستخدام هاذا الامر**`).then(msg => {msg.delete(5000)})
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`**${sender.username} , لا امتلك صلاحية الطرد**`).then(msg => {msg.delete(5000)})
  var mention = message.mentions.users.first();
  var reas = message.content.split(" ").slice(2).join(" ");
  if (!mention) return message.channel.send(`**${sender.username} , ضع منشن لشخص**`).then(msg => {msg.delete(5000)})
  if(!reas) return message.channel.send(`**${sender.username} , اكتب سبب الطرد **`).then(msg => {msg.delete(5000)})
  if (!message.guild.member(mention).kickable) return message.channel.send(`**${sender.username} , **لا امتلك الصلاحية لطرد هاذا الشخص`).then(msg => {msg.delete(5000)})
  const embed = new Discord.RichEmbed()
  .setAuthor("تم طردك", mention.displayAvatarURL)
  .addField("من قبل:", `**${sender.username}**`)
  .addField("السبب:",`**${reas}**`)
  .setColor("RANDOM")
  mention.send({embed : embed}).then(()=>{
message.guild.member(mention).kick();
})
}
});
//باند
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
  var sender = message.author;
  if (message.content.startsWith(Prefix[message.guild.id].prefix+"باند")) {
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`**${sender.username} , يجب انت تكون لديك خاصية الطرد لاستخدام هاذا الامر**`).then(msg => {msg.delete(5000)})
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`**${sender.username} , لا امتلك صلاحية التبنيد**`).then(msg => {msg.delete(5000)})
  var mention = message.mentions.users.first();
  var reas = message.content.split(" ").slice(2).join(" ");
  if (!mention) return message.channel.send(`**${sender.username} , ضع منشن لشخص**`).then(msg => {msg.delete(5000)})
  if(!reas) return message.channel.send(`**${sender.username} , اكتب سبب الباند **`).then(msg => {msg.delete(5000)})
  if (!message.guild.member(mention).banable) return message.channel.send(`**${sender.username} , **لا امتلك الصلاحية لتبنيد هاذا الشخص`).then(msg => {msg.delete(5000)})
  const embed = new Discord.RichEmbed()
  .setAuthor("تم تبنيدك", mention.displayAvatarURL)
  .addField("من قبل:", `**${sender.username}**`)
  .addField("السبب:",`**${reas}**`)
  .setColor("RANDOM")
  mention.send({embed : embed}).then(()=>{
message.guild.member(mention).ban();
})
}
});
//دعواتي
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
      if (message.content.startsWith(Prefix[message.guild.id].prefix+'دعواتي')) {
      var mentionned = message.mentions.users.first();
      var os;
      if(mentionned){
          var os = mentionned.id;
      } else {
          var os = message.author.id;
      }
          var oss;
      if(mentionned){
          var oss = mentionned;
      } else {
          var oss = message.author;
      }
message.guild.fetchInvites().then(invites =>{
if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, لم تقم بدعوة احد على الأطلاق**`);
message.channel.send(`**${oss.username} من قبل__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ عدد الاعضاء الذين دخلو    !** :chart_with_upwards_trend: `)
 })
}
});
//مسح
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
      if (message.content.startsWith(Prefix[message.guild.id].prefix+'مسح')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username} , انت لا تمتلك الصلاحيات لمسح الشات`).then(msg => {msg.delete(3000)})
      if(!message.channel.guild) return;
      let args = message.content.split(" ").slice(1);
      if(!args) {
      message.channel.fetchMessages({  
      limit: 100
      }).then(messages => message.channel.bulkDelete(messages));
      message.channel.sendMessage('```عدد الرسائل التي تم مسحها :'+"100"+'```').then(msg => {msg.delete(3000)})
      }else
      if(args){
      const clear = parseInt(args.join(' '));
      message.channel.fetchMessages({  
      limit: clear + 1
}).then(messages => message.channel.bulkDelete(messages));
message.channel.sendMessage('```عدد الرسائل التي تم مسحها :'+ args +'```').then(msg => {msg.delete(3000)})
}
}
});
//اطلع
client.on("message", message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
if(message.content.startsWith(Prefix[message.guild.id].prefix+"اطلع")) {
if (!message.member.hasPermission('MOVE_MEMBERS') || !message.member.hasPermission('ADMINISTRATOR'))return message.channel.send(`**${message.author.username}**| انت لا تملك الصلاحيات`).then(msg => {msg.delete(5000)});
let mention = message.mentions.members.first;
if(!mention) return message.channel.send(`**${message.author.username}**| منشن شخص`).then(msg => {msg.delete(5000)});
if(!mention.voiceChannel)return message.channel.send(`**${message.author.username}**| انه ليس في روم صوتي`).then(msg => {msg.delete(5000)});
message.guild.createChannel('vkick', 'voice').then(c => {
                mention.setVoiceChannel(c).then(() => {
                c.delete(310).catch(console.log)
      });
     });
    }
});
//اسكت
client.on("message", (message) => {
     if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
	  let mention = message.mentions.members.first
	  let role = (message.guild.roles.find("name","muted"));
	  if (!role) message.guild.createRole({ name:'muted', permissions:[1] });
      if (message.content.startsWith(Prefix[message.guild.id].prefix+"اسكت")) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**انت لا تملك الصلاحية للأسكات**").then(msg => {msg.delete(5000)});
      if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username} , لا امتلك صلاحية الاسكات**`).then(msg => {msg.delete(5000)});
	  if(!mention) return message.channel.send(`**${message.author.username}**| منشن شخص`).then(msg => {msg.delete(5000)});
      message.guild.member(mention).addRole(role).catch(console.error);
      message.channel.send(":zipper_mouth: '**تم اسكاته**").then(msg => {msg.delete(5000)});
      }
});
client.on("message", (message) => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
	  if (message.content.startsWith(Prefix[message.guild.id].prefix+"تكلم")) {
	  let mention = message.mentions.members.first
	  let role = (message.guild.roles.find("name","muted"))
	  if (!role) return;
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**انت لا تملك الصلاحية لفك الميوت**").then(msg => {msg.delete(5000)});
      if(!mention) return message.channel.send(`**${message.author.username}**| منشن شخص`).then(msg => {msg.delete(5000)});
      message.guild.member(mention).removeRole(role);
	  message.channel.send(`تكلم الان** ${mention.username}**`).then(msg => {msg.delete(5000)});
	  }
});

client.login(process.env.BOT_TOKEN);
