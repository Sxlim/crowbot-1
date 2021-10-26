
const { MessageEmbed } = require("discord.js")
const fs = require("fs");


let questions = [
    {
      title: "Best programming language",
      options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
      correct: 1,
    },
    {
      title: "Best NPM package",
      options: ["int.engine", "ms", "ws", "discord.js"],
      correct: 3,
    },
  ];
  module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
     let config = require("./../../config.json")
     let q = questions[Math.floor(Math.random() * questions.length)];
     let i = 0;
     const Embed = new MessageEmbed()
       .setTitle(q.title)
       .setDescription(
         q.options.map((opt) => {
           i++;
           return `${i} - ${opt}\n`;
         })
       )
       .setColor(`${db.color}`) 
         .setFooter(`Répondez à ce message avec le bon numéro de question! Vous avez 15 secondes.`);
 
         `Répondez à ce message avec le bon numéro de question! Vous avez 15 secondes.`
       
     message.channel.send(Embed);
     try {
       let msgs = await message.channel.awaitMessages(
         (u2) => u2.author.id === message.author.id,
         { time: 15000, max: 1, errors: ["time"] }
       );
       if (parseInt(msgs.first().content) == q.correct) {
         return message.channel.send(`Vous avez raison!`);
       } else {
         return message.channel.send(`Vous l'avez mal compris .`);
       }
     } catch (e) {
       return message.channel.send(`Vous n'avez pas répondu!`);
     }
 
};
module.exports.help = {
    name: "trivia",
    category: 'Fun',
    description: ".",
    aliases: ['trv'],

  };