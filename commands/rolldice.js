const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let yellow = botconfig.yellow

module.exports.run = async (bot, message, args) => {

    let replies = ["1", "2", "3", "4", "5", "6"];

    let result = Math.floor((Math.random()* replies.length));

    message.delete().catch();

    return message.channel.send(replies[result]);

}

module.exports.help = {
    name: "rolldice"
}