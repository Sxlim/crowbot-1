
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

const embed = new MessageEmbed()
.setTitle(`${message.guild.name}`)
.setImage(message.guild.iconURL({dynamic : true}))
.setColor(`${db.color}`)
message.channel.send(embed)

};


module.exports.help = {
    name: "server-pic",
    category: 'Fun',
    description: ".",
    aliases: ['sp'],

  };
