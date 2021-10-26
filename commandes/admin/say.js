
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")


    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
let MSG = message.content.split(`${db.prefix}say `).join("");
if (!MSG)
  return message.channel.send(`Vous n'avez pas spécifié votre message à envoyer!`);
message.channel.send(MSG);
message.delete();

};


module.exports.help = {
    name: "say",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };
