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
    else if (message.content.startsWith(prefix + 'vol')) {
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


  client.on('ready', function(){
        client.user.setStatus("dnd");
        var ms = 100000 ;
        var setGame = [`-help`];
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
            client.user.setGame(setGame[i],`http://www.twitch.tv/r3b`);
        }, ms);100000
    
   });

client.on("message", message => {
 if (message.content === "-help") {
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
     
      -invite
       الاضافة البوت لسيرفرك

══════════ஜ۩۞۩ஜ════════════ 
الاضافة البوت: https://discordapp.com/api/oauth2/authorize?client_id=447382628673388544&permissions=8&scope=bot

رابط سيرفر البورت:https://discord.gg/MTpT3Dt 

══════════ஜ۩۞۩ஜ════════════ 
 `)

   message.author.sendEmbed(embed)
   
   }
   }); 



client.on('message', message => {
    
   if (message.content.startsWith("-id")) {

if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');















        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }













const w = ['./pf.png'];
var Canvas = require('canvas')
var jimp = require('jimp')

         const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
          dateFormat(now, 'dddd, mmmm dS, yyyy');
              let time = `${dateFormat(defineduser.createdAt)}`



        let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);

})
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }


                let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 114, 10, 70, 70);
                                              var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }  
                           var status;
    if (defineduser.presence.status === 'online') {
        status = 'اون لاين';
    } else if (defineduser.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (defineduser.presence.status === 'idle') {
        status = 'خمول';
    } else if (defineduser.presence.status === 'offline') {
        status = 'اوف لاين';
    }
    
                        ctx.font = '20px Arial Bold';
                        ctx.fontSize = '29px';
                        ctx.fillStyle = "#00ff00";
                        ctx.textAlign = "center";
                        ctx.fillText(status, 150, 272);
                        
    
                        
                        ctx.font = '13px Arial Bold';
                        ctx.fontSize = '10px';
                        ctx.fillStyle = "#00fff0";
                        ctx.textAlign = "center";
                        ctx.fillText(`${defineduser.username}`, 55, 181);

                        var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }
           
                                                //wl
                        ctx.font = '10px Arial Bold';
                        ctx.fontSize = '5px';
                        ctx.fillStyle = "#00fff0";
                        ctx.textAlign = "center";
                        ctx.fillText(time2, 224, 180);
                        
message.channel.sendFile(canvas.toBuffer())

            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.
        })
    })




}

})

  


client.login(process.env.BOT_TOKEN);
