const fs = require("fs");

module.exports = async (client) => {
let config = require("./../../config.json")
console.log(`                                   ___________________________________________________ \n`.red)
console.log(`[BOTS]`.red + ` Chargé sous la version ` + `${config.bot.version}`.red + ` \n> Type d'abonnement:` + ` ${config.login.type}`.green + ` \n> Temps de l'abonnement:` + ` ${config.login.date}`.blue)
console.log(`[BOTS]`.red + ` Informations du bot ` + `${client.user.username}`.red + `#${client.user.discriminator}` + ` (` + `${client.user.id}`.red + `) \n> ` + `${client.guilds.cache.size}`.red + ` guildes \n> ` + `${client.users.cache.size}`.red + ` membres`)

// -- Définir les guildes

let str_content = { 
    prefix: '=',
    color: "#ff0000",
    giveaway: {
        duree: "360000",
        channel: "743523912238760019",
        gagnant: false,
        voice: false,
        gain: "Nitro Classic",
        last: "704833402515488880"
    },
    statut: {
        role: "743523912238760019",
        state: "discord.gg/hunterfr",
        module: false
    },
    tempo: {
        category: "743523912238760019",
        channel: "704833402515488880",
        emoji: "🕙",
        module: false
    },
    logs: {
        serveur: false,
        vocal: false,
        role: false,
        message: false
    },
    membercounter: {
        guild: "555",
        total: "555",
        totalformat: "👥 Membres: <count>",
        online: "555",
        onlineformat: "✅ En ligne: <count>",
        vocal: "555",
        vocalformat: "🎧 En vocal: <count>",
    },
    autorole: {
        role: "755705834842882089",
        module: false
    },
    mods: {
        logs: "755705834842882089",
        mute: "755705834842882089",
        muted: "755705834842882089",
        ban: "755705834842882089"
    }
};
let str_data = JSON.stringify(str_content);
// --
await client.guilds.cache.forEach(async g => {
await fs.readFile(`./serveur/${g.id}.json`, async (err, data) => {
        if (err) await fs.writeFileSync(`./serveur/${g.id}.json`, str_data);
});
});

var interval = setInterval (function () {

// -- 
client.guilds.cache.forEach(guild => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${guild.id}.json`, "utf8"));
    if(db) { 
    var guild = client.guilds.cache.get(db.membercounter.guild)
    if(!guild) return;
    if(db.membercounter.total !== false) { 
    var total = guild.channels.cache.get(db.membercounter.total)
    if(total) total.setName(db.membercounter.totalformat.replace(`<count>`, guild.memberCount)).catch(console.error)
    } 
    
    if(db.membercounter.vocal !== false) {
        var vocal = guild.channels.cache.get(db.membercounter.vocal)
        if(vocal) vocal.setName(db.membercounter.vocalformat.replace(`<count>`, guild.members.cache.filter(m => m.voice.channel).size)).catch(console.error)
    }
    
    if(db.membercounter.online !== false) {
        var online = guild.channels.cache.get(db.membercounter.online)
        if(online) online.setName(db.membercounter.onlineformat.replace(`<count>`, guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size)).catch(console.error)
    }
    
    }
    });
    
}, 1 * 30000); 
// -- 
client.guilds.cache.forEach(guild => {
fs.readFile(`./serveur/${guild.id}.json`, async (err, data) => {
        if (err) return;
});
let db = JSON.parse(fs.readFileSync(`./serveur/${guild.id}.json`, "utf8"));
if(db) { 
var guild = client.guilds.cache.get(db.membercounter.guild)
if(!guild) return;
if(db.membercounter.total !== false) { 
var total = guild.channels.cache.get(db.membercounter.total)
if(total) total.setName(db.membercounter.totalformat.replace(`<count>`, guild.memberCount)).catch(console.error)
} 

if(db.membercounter.vocal !== false) {
    var vocal = guild.channels.cache.get(db.membercounter.vocal)
    if(vocal) vocal.setName(db.membercounter.vocalformat.replace(`<count>`, guild.members.cache.filter(m => m.voice.channel).size)).catch(console.error)
}

if(db.membercounter.online !== false) {
    var online = guild.channels.cache.get(db.membercounter.online)
    if(online) online.setName(db.membercounter.onlineformat.replace(`<count>`, guild.members.cache.filter(({ presence }) => presence.status !== 'offline').size)).catch(console.error)
}

}
});
};