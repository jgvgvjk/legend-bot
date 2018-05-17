const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDQ2Njc4MTQ1MjY1ODI3ODUw.Dd9rvw.pb9Ve73wq-xyOlL5gbVxbgwl5gc');
