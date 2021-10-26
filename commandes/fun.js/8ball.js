const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = (client, message, args) => {
  if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    
    let question = message.content.slice(db.prefix.length + 6);
    if (!question)
      return message.channel.send(`Vous n'avez pas précisé votre question!`);
    else {
      let responses = [
        "oui",
        "Non",
        "Absolument",
        "peut être"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Ta question: ${question}\nMa réponse: ${response}`)
        .setColor(db.color)
        .setFooter(config.bot.fhouther , config.bot.image)

        message.channel.send(Embed)
    }}
    
        
        
        module.exports.help = {
            name: "8ball",
            category: 'Fun',
            description: "Il y a de grandes chances que je vous insulte!"

          }