
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);

	let str = args.join(" ");
	if(!str) return message.channel.send("Veuillez fournir du contenu.");
	message.delete();
	const embed = new MessageEmbed()
	.setDescription(str)
    .setColor(`${db.color}`)
    	 message.channel.send(embed)


};


module.exports.help = {
    name: "embed",
    category: 'Fun',
    description: "écrire en embed.",
    aliases: [''],

  };