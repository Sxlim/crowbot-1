
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")


    let afk = JSON.parse(fs.readFileSync("./afk.json", "utf8"));
    if (!afk[message.guild.id]) afk[message.guild.id] = {
     afk: false,
 };
 var serverQueue = afk[message.guild.id]
    if (serverQueue) {
         serverQueue.afk = !serverQueue.afk;
          message.channel.send({
             embed: {
                 color: db.color,
                 description: `💤  **|**  AFK est **\`${serverQueue.afk === true ? "activé" : "désactivé"}\`**`
             }
         });
         return  fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {
     if (err) console.error(err);
 });
     };

};


module.exports.help = {
    name: "afk",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };