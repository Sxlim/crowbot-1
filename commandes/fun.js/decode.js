const axios = require('axios');
const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    const url = `http://some-random-api.ml/binary?decode=${args}`;

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`Une erreur s'est produite, veuillez réessayer!`)
    }

    const embed = new MessageEmbed()
        .setTitle('Décoder le binaire')
        .setDescription(data.text)
        .setColor(`${db.color}`)
        .setFooter(config.bot.fhouther , config.bot.image)
     message.channel.send(embed)
}



module.exports.help = {
    name: "decode",
    category: 'Fun',
    description: "decode binary.",
  };