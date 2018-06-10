const Discord = require("discord.js");
const botconfig = require("../botconfig.json")
let yellow = botconfig.yellow

module.exports.run = async (bot, message, args) => {

    let aUser = message.channel;
    if(!aUser) return message.channel.send("Please Specify a Channel.");

    let userEmbed = new Discord.RichEmbed()
    .setColor(yellow)
    .addField("Channel's ID", `${aUser.id}`)
    .addField("Channel's Name", `${aUser.name}`)
    .addField("Created At", message.channel.createdAt)

    message.delete().catch();
    message.channel.send(userEmbed).then(msg => {msg.delete(60000)});

}

module.exports.help = {
    name: "aboutchannel"
}