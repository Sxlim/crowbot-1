
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(
          `Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`)

        message.delete();

        let list = [];
        message.guild.emojis.cache.map(em => {

            list.push(`${em.toString()} => :${em.name}:`)
        })

        message.channel.send(list.sort().join("\n"), { split: true })
  

};


module.exports.help = {
    name: "emoji-list",
    category: 'Fun',
    description: ".",
    aliases: ['emolist'],

  };