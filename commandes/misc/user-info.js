const moment = require('moment');
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const member = message.guild.member(user);
    
    const embed = new MessageEmbed()
        .setColor(db.color)
        .setThumbnail(message.author.avatarURL)
        .addField(`${user.tag}`, `${user}`, true)
        .addField("ID:", `${user.id}`, true)
        .addField(" Server", message.guild.name, true)
        .addField("Join le:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
        .addField("Compte crée:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
        .setFooter(`Fait par ${message.author.username}#${message.author.discriminator}`)
    message.channel.send(embed);


}


module.exports.help = {
    name: "user-info",
    category: 'Fun',
    description: ".",
    aliases: ['ui' , 'info'],

  };