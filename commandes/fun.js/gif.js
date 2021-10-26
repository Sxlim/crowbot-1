const fetch = require('node-fetch');
const { tenorAPI } = require('./../../config.json');

const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

   if (args > 50) {
            return message.reply('Oups, ce que vous me demandez est trop précis pour être trouvé!');
        }

        fetch(`https://api.tenor.com/v1/random?key=VMUXIB2ND575&q=${args}&limit=1`)
            .then(res => res.json())
            .then(json => message.channel.send(json.results[0].url))
            .catch(e => {
                message.channel.send('Impossible de trouver un gif correspondant à votre requête');
                // console.error(e);
                return;
            });

};


module.exports.help = {
    name: "gif",
    category: 'Fun',
    description: ".",
    aliases: ['tenor'],

  };