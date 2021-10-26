
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `Vous n'avez pas mentionné / donné l'identifiant de votre salon!`
      );
    }
    let question = message.content
      .split(`${bot.prefix}poll ${channel} `)
      .join("");
    if (!question)
      return message.channel.send(`Vous n'avez pas précisé votre question!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`Sondage !`)
      .setDescription(`${question}`)
      .setFooter(`${config.fouther}` , `${config.fimage}`)
      .setColor(`${config.color}`)
      let msg = await bot.channels.cache.get(channel.id).send(Embed);
    await msg.react("✅");
    await msg.react("❌");


};


module.exports.help = {
    name: "poll",
    category: 'Fun',
    description: ".",
    aliases: ['sondage'],

  };
