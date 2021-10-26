const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    var errMessage = ":x: NSFW ne peut pas être publié dans ce salon";
    if (!message.channel.nsfw) {
        message.react('💢');
  
        return message.reply(errMessage)}
    const image = await nsfw.hentai();
    const embed = new Discord.MessageEmbed()
        .setTitle(`Hentai`)
        .setColor(db.Color)
        .setImage(image);
    message.channel.send(embed);

  

};


module.exports.help = {
    name: "hentai",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };