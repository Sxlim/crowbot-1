const ms = require('ms');
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    logsmod = message.guild.channels.cache.find(c => c.id === db.mods.logs);



    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas l\'autorisation ** MANAGE_CHANNELS **!').then(m => m.delete({ timeout: 5000 }));

    if (!args[0]) return message.channel.send('Vous n\'avez pas précisé une heure!').then(m => m.delete({ timeout: 5000}));

    const currentCooldown = message.channel.rateLimitPerUser;

    const reason = args[1] ? args.slice(1).join(' ') : 'sans raison:';

    const embed = new MessageEmbed()
        .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`${db.color}`)
    if (args[0] === 'off') {

        if (currentCooldown === 0) return message.channel.send('Le temps de recharge de la chaîne est déjà désactivé').then(m => m.delete({ timeout: 5000 }));

        embed.setTitle('Slowmode Disabled')
        .setColor(`${db.color}`);
                return message.channel.setRateLimitPerUser(0, reason)

    }

    const time = ms(args[0]) / 1000;

    if (isNaN(time)) return message.channel.send('pas une heure valide, veuillez réessayer!').then(m => m.delete({ timeout: 5000 }));

    if (time >= 21600) return message.channel.send('Cette limite de mode lent est trop élevée, veuillez saisir une valeur inférieure à 6 heures.').then(m => m.delete({ timeout: 5000 }));

    if (currentCooldown === time) return message.channel.send(`Slowmode est déjà défini sur ${args[0]}`);

    embed.setTitle('Slowmode Activé')
        .addField('Slowmode: ', args[0])
        .addField('Reson: ', reason)
        .setColor(`${db.color}`)
    message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

};


module.exports.help = {
    name: "slowmode",
    category: 'Fun',
    description: ".",
    aliases: ['slow'],

  };