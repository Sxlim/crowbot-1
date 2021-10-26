
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    logsmod = message.guild.channels.cache.find(c => c.id === db.mods.logs);


    if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
    return message.channel.send(
        `:x: Vous ne disposez pas des autorisations appropriées pour effectuer cette action, ${message.author.username}` // returns this message to user with no perms
    );
if (!args[0]) {
    return message.channel.send(`Veuillez saisir un montant de 1 à 100`)
}

let deleteAmount;

if (parseInt(args[0]) > 100 ) {
    deleteAmount = 100;
} else {
    deleteAmount = parseInt(args[0]);
}

await message.channel.bulkDelete(deleteAmount, true);


};


module.exports.help = {
    name: "clear",
    category: 'Fun',
    description: ".",
    aliases: ['purge'],

  };