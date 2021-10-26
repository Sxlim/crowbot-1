const { formatDate } = require("../../functions");
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => b.user.createdAt - a.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`Le plus jeune membre de ${message.guild.name}`)
      .setColor(`${db.color}`)      .setFooter(`Date format: MM/DD/YYYY`)
      .setDescription(`**l'utilisateur Le plus jeune** : \`${mem.user.tag}\` \n ** Date de création du compte**: \`${formatDate(mem.user.createdAt)}\``);

    message.channel.send(Embed);


};


module.exports.help = {
    name: "recent",
    category: 'Fun',
    description: ".",
    aliases: ['youngest'],

  };