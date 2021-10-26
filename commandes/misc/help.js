const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
const pagination = require('discord.js-pagination');

module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const help = new MessageEmbed()
    .setAuthor(`🏹 Help`)
    .setImage(config.bot.image)
    .setDescription(`• Salut ** ${message.author}**\n• Je suis sur \`${client.guilds.cache.size}\` serveurs\n• Plus de \`${client.users.cache.size}\` membres!,\n • Plus de \`${client.channels.cache.size}\` salons! \n • Version : \`${config.bot.version}\`\n• Préfix du bot sur ${message.guild} : \`${db.prefix}\`\n• Commandes : \`${client.commands.size}\` `)
    .setColor(db.color)

    const administratif = new MessageEmbed()
    .setAuthor(`🏹 Administratif`)
    .setColor(db.color)
    .setDescription(`Partie administratif du Bot, dont seul les admin peux modifier / interagir avec les commandes de cette catégorie.
    
> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)

.addField("`prefix`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`setprefix\`\n - Permet de changer le prefixe du bot`)
.addField("`settings`" , `[Alias:](https://discord.gg/4TDSA2UQ9t)  \`config\`\n - Permet d'avoir quelque info sur le bot.`)
.addField("`dm`" , `[Alias:](https://discord.gg/4TDSA2UQ9t)  \`mp\`\n - Permet d'envoyer des mp avec le bot.`)
.addField("`say`" , `[Alias:](https://discord.gg/4TDSA2UQ9t)  \`❌\`\n - Faire dire n'importe quoi au bot.`)
.addField("`poll`" , `[Alias:](https://discord.gg/4TDSA2UQ9t)  \`sondage\`\n - Faire un sondage.`)

const serveur = new MessageEmbed()
.setAuthor(`🏹 Gestion de serveur`)
.setColor(db.color)
.setDescription(`Partie Gestion de serveur, les personnes ayant les permissions administrateur sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)
.addField("`giveaway`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`gstart\`,\`giveawaystart\` \n - Permet d'afficher le panel de configuration des giveaways.`)
.addField("`reroll`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`greroll\`,\`giveawayreroll\`\n - Re-sélectionne un gagnant du dernier giveaway.`)
.addField("`statut`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`spanel\`,\`statutpanel\`\n - Permet d'afficher le panel de configuration des Custom Status.`)
.addField("`tempchannel`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`tpanel\`,\`configtempo\`,\`tempo\`\n - Permet d'afficher le panel de configuration des salon temporaires.`)
.addField("`membercount`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`cpanel\`,\`mbpanel\`,\`membercounterpanel\`\n - Permet d'afficher le panel de configuration des salons temporaires.`)
.addField("`logs`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`lpanel\`,\`logspanel\`\n - Permet d'afficher le panel de configuration des logs. (Non terminée)`)
.addField("`autorole`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`apanel\`,\`autorolepanel\`\n - Permet d'afficher le panel de configuration de l'autorole.`)

const moderation = new MessageEmbed()
.setAuthor(`🏹 Modération`)
.setColor(db.color)
.setDescription(`Catégorie Modération de serveur, les personnes ayant les rôles préfinis sur les serveurs ou est présent le bot pourront utiliser les commandes de cette catégorie.
    
> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)
.addField("`mpanel`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`mods\`,\`modspanel\` \n - Permet d'afficher le panel de configuration des modérateurs.`)
.addField("`mute`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`m\`,\n - Retirer la permissions de parler dans tout les salons textuels.`)
.addField("`unmute`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`um\`\n - Redonne la permissions de parler dans tout les salons textuels.`)
.addField("`ban`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`b\` \n - Bannis la personne.`)
.addField("`unban`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`ub\`\n - Débannir une personne`)
.addField("`nuke`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`purge\`,\`boom\`\n - Permet de supprimer et recrée le salon ou est écris la commande`)
.addField("`voicemove`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`vm\`,\`voicem\`\n - Déplace toutes les personnes du salon vers un autre salon`)
.addField("`clear`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`purge\`\n - Suprime le nombre de message que vous vouler`)
.addField("`slowmode`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`slow\`\n - Active le slow mode dans le salon`)
.addField("`lock-all`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`lkall\`\n - Ferme tout les salons du server`)
.addField("`warn`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`wrn\`\n - Warn un membre`)

const fun = new MessageEmbed()
.setAuthor(`🏹  Fun`)
.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)
.addField("`kiss`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Fais un bisous.`)
.addField("`fight`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Combat une personne`)
.addField("`hug`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Fais un calin a une personne.`)
.addField("`8ball`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Il y a de grandes chances que je vous insulte!.`)
.addField("`pic`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`pp\`, \`avatar\` \n - Obtenez votre propre avatar ou celui de quelqu'un d'autre.`)
.addField("`calc`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`calcule\`, \`math\` \n - Resoudre des calcules simples`)
.addField("`love`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`lc\` \n - A combien en t'aime ?.`)
.addField("`gif`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`tenor\` \n - Fournissez une requête et je vous retournerai un gif!.`)
.addField("`cat`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Donne une image random de chat!.`)
.addField("`dog`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Donne une image random de chien!.`)
.addField("`koala`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Donne une image random de koala!.`)
.addField("`trivia`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`trv\` \n - Quiz pour un developer`)
.addField("`panda`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n -  Donne une image random de panda`)
.addField("`punsh`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Fraper un membre`)
.addField("`flip`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`coin\` \n - Lance une pièce`)

const util = new MessageEmbed()
.setAuthor(`🏹  Utilitaires`)
.setColor(db.color)
.setDescription(`C'est des catégories utile au serveur, certains commande sont accesible a tout le monde.
    
> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)
.addField("`vc`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`vocalmembers\`,\`voicemember\` \n - Obtenez le nombre de personne en vocal ainsi que le nombre de personne sur le serveur.`)
.addField("`la`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`listeadmin\` \n - Liste de toutes les personnes ayant la permissions administrateur sur le serveur`)
.addField("`lrm`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`listerolemembers\` \n - Obtenez la liste de personne dans un rôle`)
.addField("`help`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`aide\` \n - Affiche la liste des commandes`)
.addField("`ping`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Affiche le ping du bot et de l'Api Discord`)
.addField("`embed`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - Ecrire en embed`)
.addField("`server-pic`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`sp\` \n - Donne la pdp du server`)
.addField("`server-info`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`si\` \n - Donne des infos sur le server`)
.addField("`user-info`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`info\`, \`ui\` \n - Donne des infos sur une perssonne`)
.addField("`ancien`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`oldest\` \n - Donne la personne la plus ancienne du server`)
.addField("`recent`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`yougest\` \n - Donne la personne la plus jeune du server`)
.addField("`commmand retiré`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`invite\` \n - `)
.addField("`total-ban`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`bans\` \n - Liste des membres / bot ban sur le serveur `)

const nsfw = new MessageEmbed()
.setAuthor(`🏹  Nsfw`)
.addField("`4k`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - 4k`)
.addField("`anal`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - anal`)
.addField("`ass`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - ass`)
.addField("`boobs`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - boobs`)
.addField("`hentai`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - hentai`)
.addField("`porngif`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`pgif\` \n - prongif`)
.addField("`pussy`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - pussy`)


.setColor(db.color)
.setDescription(`C'est des catégories non-utile au serveur, c'est pour le fun tout le monde peux les utiliser.
    
> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)
const owner = new MessageEmbed()
.setAuthor(`🏹  Owner`)
.setColor(db.color)
.setDescription(`Catégorie Owner du Bot, dont seul l'owner peux modifier / interagir avec les commandes de cette catégorie.

> [Liste des commandes](https://discord.gg/4TDSA2UQ9t)`)
.addField("`server-list`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`slt\` \n - Donne les serveurs ou ce trouve le bot`)
.addField("`setavatar`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`botavatar\`\n - Permet de changer la photo de profil du bot`)
.addField("`setname`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`botname\`\n - Permet de changer le pseudonyme du Bot`)
.addField("`stream`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`play\`,\`watch\`,\`listen\`,\`setstream\`,\`activity\`\n - Permet de changer l'activité du Bot`)
.addField("`color`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`colorembed\`,\`theme\`\n - Permet de définir une couleur au embed du Bot.`)
.addField("`eval`", `[Alias:](https://discord.gg/4TDSA2UQ9t) \`❌\` \n - ❌ `)
.addField("`down`" , `[Alias:](https://discord.gg/4TDSA2UQ9t) \`shutdown\` \n - Eteint le bot`)

    const pages = [
        help,
        util,
        fun,
        nsfw,
      serveur,
      moderation,
      administratif,
      owner
]

const emojiList = ["◀️", "▶️"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)
};


module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: "Obtenez les informations de votre bot ",
  };