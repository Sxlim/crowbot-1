
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
     let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
      let config = require("./../../config.json")
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  {
  var msg2 = Array(2);
          msg2[1] = "Face";
          msg2[2] = "Pile";
          var x = getRandomInt(0, 8);
          if (x < 4){
              message.channel.send(msg2[1]);
          }
          else{
              message.channel.send(msg2[2]);
          }
      }
  
};


module.exports.help = {
    name: "flip",
    category: 'Fun',
    description: ".",
    aliases: ['coin'],

  };