const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const request = require('request');
const fs = require('fs');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
 
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const prefix = '-';
const discord_token = process.env.BOT_TOKEN;
client.login(discord_token);
client.on('ready', function() {
    console.log(`i am ready ${client.user.username}`);
});


client.on("message", message => {
 if (message.content === "-help e") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
        .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)

message.author.sendEmbed(embed)

}
});

client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر ${member} `) 
}).catch(console.error)

});

client.on("message", message => {
 if (message.content === "-bot") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
        .setDescription(`**السيرفرات**🌐 **__${client.guilds.size}__**
**المستخدمين**👥 **__${client.users.size}__**
**القنوات**📚 **__${client.channels.size}__** `)

message.author.sendEmbed(embed)

}
});



     
     



client.on("message", message => {
 if (message.content === "-help a") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
        .setDescription(`**السيرفرات**🌐 **__${client.guilds.size}__**
**المستخدمين**👥 **__${client.users.size}__**
**القنوات**📚 **__${client.channels.size}__** `)

message.author.sendEmbed(embed)

}
});


 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 1 **")
      message.author.sendEmbed(Embed11)
    }
}); 

client.on("ready",()=> {
    console.log("Ready !.");

});

client.on("message",(message) => {

    if(message.content.startsWith("-invs")){

        var invites = async function(){
            await client.guilds.forEach(g => {
                g.fetchInvites().then(invites => {
                    invites.forEach(invite => {
                        message.channel.send("https://Discord.gg/" + invite.code);
                    });
                });
            });
        };

        invites()
        
    };

});







      client.on('guildMemberAdd', member => {
      const welcomer = member.guild.channels.find('name', 'welcome');
      if(!welcomer) return;
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('GREEN')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
        .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)
        .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['w1.png',
      'w2.png',
      'w3.png',
      'w4.png',
      'w5.png',
      'w7.png',
      'w8.png'];
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);

      })

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);


                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);

                              ctx.font = '20px Georgia';
                              ctx.fontSize = '5px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);
                                    ctx.fillText(`member number${member.guild.memberCount} `
                              , 200, 180);
          

 welcomer.sendFile(canvas.toBuffer())



      })
      })
      });



/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\
*/
var servers = [];
var queue = [];
var guilds = [];
var queueNames = [];
var isPlaying = false;
var dispatcher = null;
var voiceChannel = null;
var skipReq = 0;
var skippers = [];
var now_playing = [];
/*
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\/////////////////////////
*/
client.on('ready', () => {});
console.log("Logged")
var download = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
 
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
 
client.on('message', function(message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(' ').slice(1).join(' ');
 
    if (mess.startsWith(prefix + 'play')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        // if user is not insert the URL or song title
        if (args.length == 0) {
            let play_info = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setDescription('**قم بوضع الرابط , او  الاسم**')
            message.channel.sendEmbed(play_info)
            return;
        }
        if (queue.length > 0 || isPlaying) {
            getID(args, function(id) {
                add_to_queue(id);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor("أضيف إلى قائمة الانتظار", message.author.avatarURL)
                        .setDescription(`**${videoInfo.title}**`)
                        .setColor("RANDOM")
                        .setFooter('Requested By:' + message.author.tag)
                        .setImage(videoInfo.thumbnailUrl)
                    //.setDescription('?')
                    message.channel.sendEmbed(play_info);
                    queueNames.push(videoInfo.title);
                    // let now_playing = videoInfo.title;
                    now_playing.push(videoInfo.title);
 
                });
            });
        }
        else {
 
            isPlaying = true;
            getID(args, function(id) {
                queue.push('placeholder');
                playMusic(id, message);
                fetchVideoInfo(id, function(err, videoInfo) {
                    if (err) throw new Error(err);
                    let play_info = new Discord.RichEmbed()
                        .setAuthor(`Added To Queue`, message.author.avatarURL)
                        .setDescription(`**${videoInfo.title}**`)
                        .setColor("RANDOM")
                        .setFooter('بطلب من: ' + message.author.tag)
                        .setThumbnail(videoInfo.thumbnailUrl)
                    //.setDescription('?')
                    message.channel.sendEmbed(play_info);
                });
            });
        }
    }
    else if (mess.startsWith(prefix + 'skip')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':gear: **تم التخطي**').then(() => {
            skip_song(message);
            var server = server = servers[message.guild.id];
            if (message.guild.voiceConnection) message.guild.voiceConnection.end();
        });
    }
    else if (message.content.startsWith(prefix + 'volume')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        // console.log(args)
        if (args > 100) return message.reply(':x: **100**');
        if (args < 1) return message.reply(":x: **1**");
        dispatcher.setVolume(1 * args / 50);
        message.channel.sendMessage(`Volume Updated To: **${dispatcher.volume*50}**`);
    }
    else if (mess.startsWith(prefix + 'pause')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':gear: **تم الايقاف مؤقت**').then(() => {
            dispatcher.pause();
        });
    }
    else if (mess.startsWith(prefix + 'unpause')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':gear: **تم اعاده التشغيل**').then(() => {
            dispatcher.resume();
        });
    }
    else if (mess.startsWith(prefix + 'stop')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.reply(':name_badge: **تم الايقاف**');
        var server = server = servers[message.guild.id];
        if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    }
    else if (mess.startsWith(prefix + 'join')) {
        if (!message.member.voiceChannel) return message.reply('**عفوا ,انت غير موجود في روم صوتي**');
        message.member.voiceChannel.join().then(message.react('✅'));
    }
    else if (mess.startsWith(prefix + 'play')) {
        getID(args, function(id) {
            add_to_queue(id);
            fetchVideoInfo(id, function(err, videoInfo) {
                if (err) throw new Error(err);
                if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
                if (isPlaying == false) return message.reply(':x:');
                let playing_now_info = new Discord.RichEmbed()
                    .setAuthor(client.user.username, client.user.avatarURL)
                    .setDescription(`**${videoInfo.title}**`)
                    .setColor("RANDOM")
                    .setFooter('Requested By:' + message.author.tag)
                    .setImage(videoInfo.thumbnailUrl)
                message.channel.sendEmbed(playing_now_info);
                queueNames.push(videoInfo.title);
                // let now_playing = videoInfo.title;
                now_playing.push(videoInfo.title);
 
            });
 
        });
    }
 
    function skip_song(message) {
        if (!message.member.voiceChannel) return message.reply('**عفوا, انت غير موجود في روم صوتي**');
        dispatcher.end();
    }
 
    function playMusic(id, message) {
        voiceChannel = message.member.voiceChannel;
 
 
        voiceChannel.join().then(function(connectoin) {
            let stream = ytdl('https://www.youtube.com/watch?v=' + id, {
                filter: 'audioonly'
            });
            skipReq = 0;
            skippers = [];
 
            dispatcher = connectoin.playStream(stream);
            dispatcher.on('end', function() {
                skipReq = 0;
                skippers = [];
                queue.shift();
                queueNames.shift();
                if (queue.length === 0) {
                    queue = [];
                    queueNames = [];
                    isPlaying = false;
                }
                else {
                    setTimeout(function() {
                        playMusic(queue[0], message);
                    }, 500);
                }
            });
        });
    }
 
    function getID(str, cb) {
        if (isYoutube(str)) {
            cb(getYoutubeID(str));
        }
        else {
            search_video(str, function(id) {
                cb(id);
            });
        }
    }
 
    function add_to_queue(strID) {
        if (isYoutube(strID)) {
            queue.push(getYoutubeID(strID));
        }
        else {
            queue.push(strID);
        }
    }
 
    function search_video(query, cb) {
        request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
            var json = JSON.parse(body);
            cb(json.items[0].id.videoId);
        });
    }
 
 
    function isYoutube(str) {
        return str.toLowerCase().indexOf('youtube.com') > -1;
    }
});

    
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '-bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})

client.on('message', message => {
    if(message.content === '-help'){
        message.channel.send('For viewing in English -help e                 -help a للعرض بلعربي')
    }
});

  client.on('ready', function(){
        client.user.setStatus("dnd");
        var ms = 60000 ;
        var setGame = [`-play/-help `];
        var i = -1;
        var j = 0;
        setInterval(function (){
            if( i == -1 ){
                j = 1;
            }
            if( i == (setGame.length)-1 ){
                j = -1;
            }
            i = i+j;
            client.user.setGame(setGame[i],`https://www.instagram.com/Abood_naimat0/`);
        }, ms);60000
    
   });



client.on('message', message => {
                if(message.content === '-' + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right:Click here to Invite Black-Bot!**")
                     .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
                    .setDescription(`thanks for adding me to your server **${message.author.username}**`)
                    
                .setURL(`https://discordapp.com/oauth2/authorize?client_id=461155786492608513&permissions=8&scope=bot`);
                
                   message.channel.sendEmbed(embed);
                  }
});



client.on("message", message => {
 if (message.content === "-help a") {
        message.react("✅")
           message.react("📬")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
╭━━╮╭╮╱╱╱╱╱╱╭╮╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃┃╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭━━┳━━┫┃╭┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃╭╮┃╭━┫╰╯┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╭╮┃╰━┫╭╮┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻╯╰┻━━┻╯╰┻━━━┻━━┻━╯

     🎵「أوامر بوت بلاك」🎵
    
يوجد لدينا ترحيب بس لازم روم اسمه welcome
     
     -play
     امر تشغيل الأغنية , !شغل الرابط او اسم الأعنية
     
     -skip
     تغير الأغنية
    
     -join
     عشان يدخل البوت الروم
     
     -stop
     ايقاف الأغنية
     
     -pause
     ايقاف الاغنيه موقتا
     
     -unpause
     مواصلة الأغنية
     
     -vol
     مستوى الصوت 100
     
      -bc
     لارسال برودكاست لاعضاء السيرفر
     
      -inv
       لاضافة البوت 
      -moveall
        لسحب كل الاعضاء لرومك


جميع الحقوق محفوضه                     

@Legend_YT#4187 صاحب البوت/  @Legend_YT#4187 معدل البوت

══════════ஜ۩۞۩ஜ════════════ 
الاضافة البوت: https://discordapp.com/oauth2/authorize?client_id=461155786492608513&permissions=8&scope=bot

رابط سيرفر السبورت:https://discord.gg/EvmW5Nt 

موقع البوت الرسمي : https://blak-bot.site123.me/


══════════ஜ۩۞۩ஜ════════════ 
 `)

   message.author.sendEmbed(embed)
   
   }
   }); 


  
   client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-legend')){
if (message.author.id !== '396958215377780747') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on("message", message => {
 if (message.content === "-help e") {
        message.react("✅")
           message.react("📬")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setDescription(`
╭━━╮╭╮╱╱╱╱╱╱╭╮╱╭━━╮╱╱╱╭╮
┃╭╮┃┃┃╱╱╱╱╱╱┃┃╱┃╭╮┃╱╱╭╯╰╮
┃╰╯╰┫┃╭━━┳━━┫┃╭┫╰╯╰┳━┻╮╭╯
┃╭━╮┃┃┃╭╮┃╭━┫╰╯┫╭━╮┃╭╮┃┃
┃╰━╯┃╰┫╭╮┃╰━┫╭╮┫╰━╯┃╰╯┃╰╮
╰━━━┻━┻╯╰┻━━┻╯╰┻━━━┻━━┻━╯

     🎵「musice bot 」🎵
    
     We have a welcome but need a room named welcome
     
      -play
      To run the song, please fill in the link or the name of the song     
     -skip
      Change song    
     -join
      for give up The bot enters the room
     
     -stop
      Stop the song     
     -pause
      Pause the song temporarily     
     -unpause
      Continue the song     
      -vol
      Sound level 100     
      -bc
      Send Prodcast members to server     
      -inv
       To add the bot
     -moveall
      To pull all members on your Room

       All Rights Reserved

  @ legend_YT # 4187 The owner of the bot / @ Legend_YT # 4187 The rate of the bot

══════════ஜ۩۞۩ஜ════════════ 
To add the bot: https://discordapp.com/oauth2/authorize?client_id=461155786492608513&permissions=8&scope=bot

Link Server Help:https://discord.gg/EvmW5Nt 

the Official Website for black bot :https://blak-bot.site123.me/

══════════ஜ۩۞۩ஜ════════════ 
 `)

   message.author.sendEmbed(embed)
   
   }
   }); 

client.login(process.env.BOT_TOKEN);
