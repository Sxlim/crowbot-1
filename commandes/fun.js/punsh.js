
const {MessageEmbed} = require("discord.js");
const fs = require("fs");
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

function update(message, db) {
    fs.writeFile(`./serveur/${message.guild.id}.json`, JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
};

kiss = [ "https://i.imgur.com/R5KBiYV.gif", "https://media.tenor.com/images/a18e527fc55adf5e18ed4edf62b7f64f/tenor.gif" , "https://i.pinimg.com/originals/e9/8c/59/e98c598df1874844ba2c488f827ea57f.gif" , "https://25stanley.com/wp-content/uploads/2013/08/REARRANGED-FACE.gif" , "https://i.kym-cdn.com/photos/images/newsfeed/001/039/474/715.gif"]

module.exports.run = async (client, message, args) => {
  if(!message.guild) return;
  let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8")),
  user = message.mentions.members.first()|| message.guild.members.cache.get(args[0])
  var randomkiss = kiss[Math.floor(Math.random()*kiss.length)]

if(user) { 
var embed = new MessageEmbed()
.setTitle(`:right_facing_fist: **${message.author.username}** frappe **${user.user.username}**`)
.setImage(randomkiss)
.setColor(db.color)
message.channel.send(embed)
} else {
   if(args[0]) {
var member = message.guild.members.cache.find( m => m.displayName.toLowerCase().indexOf(args[0].toLowerCase()) > -1)
if(!member) member = client
var embed = new MessageEmbed()
.setTitle(`:right_facing_fist: **${message.author.username}** frappe **${member.user.username}**`)
.setImage(randomkiss)
.setColor(db.color)
message.channel.send(embed)
   } else {
var embed = new MessageEmbed()
.setTitle(`:right_facing_fist: **${message.author.username}** frappe **${client.user.username}**`)
.setImage(randomkiss)
.setColor(db.color)
message.channel.send(embed)
   }
}
  
};


module.exports.help = {
    name: "punsh",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };