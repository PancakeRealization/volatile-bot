const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let yellow = botconfig.yellow;

module.exports.run = async (bot, message, args) => {
    let joinedDiscordOn = message.mentions.users.first().createdAt
    let aUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!aUser) return message.channel.send("Please Specify a User.");

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    let userEmbed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(message.author.username)
    .addField("User's ID", `${aUser.id}`)
    .addField("User's Name", `${aUser}`)
    .addField("Joined Discord On", `${joinedDiscordOn}`)
    .addField("User Joined This Server", `${aUser.joinedAt}`)

    message.delete().catch();
    message.channel.send(userEmbed).then(msg => {msg.delete(60000)});

}

module.exports.help = {
    name: "about"
}