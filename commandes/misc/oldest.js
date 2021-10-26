const { formatDate } = require("../../functions");
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    let mem = message.guild.members.cache
    .filter((m) => !m.user.bot)
    .sort((a, b) => a.user.createdAt - b.user.createdAt)
    .first();
  const Embed = new MessageEmbed()
    .setTitle(`Le membre le plus âgé de ${message.guild.name}`)
    .setColor(`${db.color}`)
        .setFooter(`Date format: MM/DD/YYYY`)
    .setDescription(`**l'utilisateur le plus ancien** : \`${mem.user.tag}\` \n** Date de création du compte**: \`${formatDate(mem.user.createdAt)}\``);
  message.channel.send(Embed);


};


module.exports.help = {
    name: "ancien",
    category: 'Fun',
    description: ".",
    aliases: ['oldest'],

  };