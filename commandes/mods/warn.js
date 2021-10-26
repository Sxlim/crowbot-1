getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    logsmod = message.guild.channels.cache.find(c => c.id === db.mods.logs);
    var user = message.mentions.members.first()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        const error_permissions = new Discord.MessageEmbed()
            .setDescription("Vous ne disposez pas les permissions nécessaires pour envoyer un avertissement à un utilisateur.")
            .setColor(`${db.color}`)

            message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let args = message.content.split(" ").slice(2);
        let thingToEcho = args.join(" ")
        const member = message.mentions.members.first();
        if (!member) return message.channel.send(" Merci de mentionner un utilisateur à avertir.");
        if(!args[0]) return message.channel.send(" Merci de donner une raison pour envoyer un avertissement.");
        message.channel.send(`:warning: | L'utilisateur **${member.user.tag}** viens de recevoir un avertissement par **${message.author}** pour la raison suivante : **` + thingToEcho + `**`)
        if(logsmod) logsmod.send({embed:{ description: `**${message.author.username}**#${message.author.discriminator} a warn**${user.user.username}**#${user.user.discriminator} dans le salon [\`${message.channel.name}\`](https://discord.com/channels/${message.guild.id}/${message.channel.id}) car: \`\`\`${thingToEcho}\`\`\` `, color: 3553599, author: { name: "🎃 Warn d'un membre" }, footer: { text: `🕙 ${getNow().time}` } }})
        member.send(":warning: | Vous avez reçu un avertissement dans le serveur **" + message.guild.name + "** par " + message.author + " pour la raison suivante : **" + thingToEcho + "**")
        message.delete();

    }
};


module.exports.help = {
    name: "warn",
    category: 'Fun',
    description: ".",
    aliases: ['wrn'],

  }