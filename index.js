const Discord = require("discord.js");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_BANS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]
});
const fetch = require('node-fetch');
// AD Comm
client.on('messageCreate', async msg => {
  if (msg.guild.id != "1050155352018141267") return; //ايدي السيرفر
  if (msg.channel.id != "1065585999884857434" && msg.channel.id !=  "1066339433416237187" & msg.channel.id != "1066342551013031956" & msg.channel.id != "1067121887265689630") return;//ايدي روم الشات
  if (msg.author.bot) return;
  if (msg.content) {

    msg.reply('OK, Please Wait.')
      .then(msg => {
        setTimeout(() => msg.delete(), 8000)
      })
      .catch();

    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        "prompt": msg.content,
        "max_tokens": 1000,
        "top_p": 1,
        "temperature": 0.5
      })
    }).then(response => response.json())
      .then(data => {

        msg.channel.send(`${data['choices'][0]['text']}`)

      })
      .catch(error => {
        console.error(error);
      });

  }
})



      
// makfi 
client.on('messageCreate', async msg => {
  if (msg.guild.id != "975722856178659328") return; //ايدي السيرفر
  if (msg.channel.id != "1052331267296862268") return; //ايدي روم الشات
  if (msg.author.bot) return;

  if (msg.content) {

    msg.reply('OK, Please Wait.')
      .then(msg => {
        setTimeout(() => msg.delete(), 8000)
      })
      .catch();

    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        "prompt": msg.content,
        "max_tokens": 1000,
        "top_p": 1,
        "temperature": 0.5
      })
    }).then(response => response.json())
      .then(data => {

        msg.channel.send(`${data['choices'][0]['text']}`)

      })
      .catch(error => {
        console.error(error);
      });

  }
})



client.on('messageCreate', async msg => {
  if (msg.guild.id != "1050155352018141267") return; //ايدي السيرفر
  if (msg.channel.id != "1065586671887847454") return; //ايدي روم البرمجة
  if (msg.author.bot) return;

  if (msg.content) {

    msg.reply('OK, Please Wait.')
      .then(msg => {
        setTimeout(() => msg.delete(), 8000)
      })
      .catch();

    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        "prompt": msg.content,
        "max_tokens": 1000,
        "top_p": 1,
        "temperature": 0.5
      })
    }).then(response => response.json())
      .then(data => {

        msg.channel.send(`\`\`\`js\n${data['choices'][0]['text']}\`\`\``)

      })
      .catch(error => {
        console.error(error);
      });

  }
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTA1MjEyNTU2MTU2MjA4MzM5OQ.GH7Mfm.rmXgZrOgGEqAEC6xAinCSRLGLFZ0L3Ug0-l7QY');//توكن البوت
