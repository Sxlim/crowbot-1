
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")


    if(message.author.id !== config.bot.owner) return;
      
    message.channel.send(new MessageEmbed()
    .setTitle(`**Voice les serveur ou je me trouve !!**`)
    .setColor(`${db.color}`)
    .setFooter(config.bot.fhouther , config.bot.image)
    .setDescription(client.guilds.cache.map(r => r.name + ` | *${r.memberCount}* membres`)) )

};


module.exports.help = {
    name: "server-list",
    category: 'Fun',
    description: ".",
    aliases: ['slt'],

  };