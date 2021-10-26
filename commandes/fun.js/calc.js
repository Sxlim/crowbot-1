const math = require('mathjs');
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    if(!args[0]) return message.channel.send('Veuillez fournir une question');

    let resp;

    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send('Veuillez fournir une question ** valide **')
    }

    const embed = new MessageEmbed()
         .setTitle('Calculator')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Réponsse', `\`\`\`css\n${resp}\`\`\``)
 .setColor(`${db.color}`)
    .setFooter(config.bot.fhouther , config.bot.image)
    message.channel.send(embed);




};


module.exports.help = {
    name: "calc",
    category: 'Fun',
    aliases: ['calcule' , 'math'],
    description: ".",
  };