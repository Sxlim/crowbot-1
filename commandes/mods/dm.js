
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    logsmod = message.guild.channels.cache.find(c => c.id === db.mods.logs);

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
  let user =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]);
  if (!user)
    return message.channel.send(
      `Vous n'avez pas mentionné un utilisateur, ou vous avez donné un identifiant invalid`
    );
  if (!args.slice(1).join(" "))
    return message.channel.send("Vous n'avez pas spécifié votre message");
  user.user
    .send(args.slice(1).join(" "))
    .catch(() => message.channel.send("Cet utilisateur n'a pas pu être DM!"))
    .then(() => message.channel.send(` ${message.author} a envoyé un message à ${user.user.tag}`));
    

};


module.exports.help = {
    name: "dm",
    category: 'Fun',
    description: "Dm un membre du serveur.",
    aliases: ['mp'],

  };
