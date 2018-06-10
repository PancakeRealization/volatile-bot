const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let yellow = botconfig.yellow;

module.exports.run = async (bot, message, args) => {
    let joinedDiscordOn = message.author.createdAt
    let aUser = message.author
    let joinedServerOn = message.member.joinedAt

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    let userEmbed = new Discord.RichEmbed()
    .setColor(color)
    .setAuthor(message.author.username)
    .addField("User's ID", `${aUser.id}`)
    .addField("User's Name", `${aUser}`)
    .addField("Joined Discord On", `${joinedDiscordOn}`)
    .addField("User Joined This Server", `${joinedServerOn}`)

    message.delete().catch();
    message.channel.send(userEmbed).then(msg => {msg.delete(60000)});

}

module.exports.help = {
    name: "aboutme"
}