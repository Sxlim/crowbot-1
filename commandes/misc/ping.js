const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const Embed = new MessageEmbed()
      .setTitle("**__» Temps de réponse__**")
      .addField('**Temps de réponse du WebSocket**' , `${client.ws.ping}ms`)
      .addField('**Temps de réponse de l\'API**' , `${message.createdAt - message.createdAt + "ms"}`)
      .setColor(db.color)
      .setFooter(config.bot.fhouther , config.bot.image)
      message.channel.send(Embed)
};


module.exports.help = {
    name: "ping",
    category: 'utilitaires',
    description: "Donn le ping du bot et de l'api discord.",
  };