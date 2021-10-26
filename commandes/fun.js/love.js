
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    let mentioned = message.mentions.users.array();

    let love = (Math.round(Math.random() * 101) - 1);
    let loveIndex = Math.floor(love / 10);
    let loveLevel = '💖'.repeat(loveIndex) + '💔'.repeat(10 - loveIndex);

    if (args.length > 1) {
       message.channel.send('Trop d\'arguments!!');
       return;
    }

    if (args.length == 1 && mentioned.length == 1) {
       message.channel.send(new MessageEmbed()
       .setColor(`${db.color}`)
       .addField('**' + mentioned[0].username + ' **+** ' + message.member.displayName + '** = ', Math.floor(love) + '%\n\n' + loveLevel + ':gift_heart:' )
       )
    } else {
       let guildMembersArray = message.guild.members.cache.array();

       let randomUser = guildMembersArray[Math.floor(Math.random() * guildMembersArray.length)];

       const love = Math.random() * 100;
       const loveIndex = Math.floor(love / 10);
       const loveLevel = '💖'.repeat(loveIndex) + '💔'.repeat(10 - loveIndex);

       message.channel.send(new MessageEmbed()
          .addField('☁ **' + randomUser.nickname + ' **+** ' + message.author.username + '** =', Math.floor(love) + '%\n\n' + loveLevel + ':gift_heart:')
          .setColor(`${db.color}`)

       );
    }


};


module.exports.help = {
    name: "love",
    category: 'Fun',
    description: ".",
    aliases: ['lc'],

  };