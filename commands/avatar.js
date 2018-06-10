const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let yellow = botconfig.yellow

module.exports.run = async (bot, message, args) => {
    let aUser = message.mentions.users.first() || message.author;
    if(!aUser) {
        message.channel.send(message.author.avatarURL)
        return;
    }
    if(aUser) {
        message.channel.send(aUser.avatarURL).then(msg => {msg.delete(60000)});
        return;
    }

}

module.exports.help = {
    name: "avatar"
}