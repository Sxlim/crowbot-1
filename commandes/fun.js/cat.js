const axios = require('axios');

const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")


    const url = "https://some-random-api.ml/img/cat";
    const facts = "https://some-random-api.ml/facts/cat"

    let image, response;
    let fact, responses;
    try {
        response = await axios.get(url);
        image = response.data;

        responses = await axios.get(facts)
        fact = responses.data

    } catch (e) {
        return message.channel.send(`Une erreur s'est produite, veuillez réessayer!`)
    }

    const embed = new MessageEmbed()
        .setTitle(`Image de chat aléatoire `)
        .setColor(`${db.color}`)
                .setImage(image.link)

     message.channel.send(embed)

};


module.exports.help = {
    name: "cat",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };