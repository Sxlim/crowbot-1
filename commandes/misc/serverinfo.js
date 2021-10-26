const pagination = require('discord.js-pagination');
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    const embed = new MessageEmbed()
    .setTitle(`${message.guild} Server info`)
    .addField("Owner", ` ${message.guild.owner}`)
    .addField("Member ", ` ${message.guild.memberCount} members`)
    .addField("Roles ", ` ${message.guild.roles.cache.size} roles`)
    .setColor(`${db.color}`)

    const embed2 = new MessageEmbed()
    .setTitle(`${message.guild} Server info`)
    .setColor(`${db.color}`)
    .setDescription(  `Emojie :\n\n**Animé [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**All emojis [${OverallEmojis}]**`)
    const pages = [
       embed,
       embed2
]

const emojiList = ["⏪", "⏩"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)

};


module.exports.help = {
    name: "server-info",
    category: 'Fun',
    description: ".",
    aliases: ['si'],

  };