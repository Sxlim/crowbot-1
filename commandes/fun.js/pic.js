const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions");
const fs = require("fs")

module.exports.run = (bot, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`Votre avatar!`);
      Embed.setThumbnail(`${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
      Embed.setColor(`${db.color}`)
      Embed.setFooter(config.bot.fhouther , config.bot.image)


 Embed.setDescription(
        `Rejoint: ${formatDate(message.member.joinedAt)}\nID: ${
          message.author.id
        }\nRoles: ${roles}`
      );
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`L\'avatar de ${bot.users.cache.get(User.id).tag}' !`);
      Embed.setThumbnail(`${bot.users.cache.get(User.id).displayAvatarURL({ format: 'png', dynamic: true })}`);
      Embed.setColor(`${db.color}`)
      Embed.setFooter(config.bot.fhouther , config.bot.image)
      Embed.setDescription(
        `Rejoint:  ${formatDate(User.joinedAt)}\nID: ${
          User.id
        }\nRoles: ${roles}`
      );
      return message.channel.send(Embed);
    }
}
    
        
        
module.exports.help = {
    name: "pic",
    aliases: ['pp','avatar'],
    category: 'utilitaires',
    description: "Obtenez votre propre avatar ou celui de quelqu'un d'autre.",
  };