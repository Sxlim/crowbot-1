
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    var str_filtrer = message.guild.members.cache.filter(member => member.bans)
    var str_map = str_filtrer.map(m => `${m.user.id}: ${m.user.username},`).join("\n")
    message.guild.fetchBans().then(bans => {
        message.channel.send(`Liste des membres / bot ban sur le serveur   (**${bans.size}**)`)
    }) 
    for(let i = 0; i < str_map.length; i += 1995) {
        const str_content = str_map.substring(i, Math.min(str_map.length, i + 1995));
        message.channel.send(`\`\`\`json\n${str_content}\`\`\``);
    }
}


module.exports.help = {
    name: "total-ban",
    category: 'Fun',
    description: ".",
    aliases: ['bans'],

  }
