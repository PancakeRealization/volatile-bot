const Discord = require("discord.js");
const ms = require("ms")

module.exports.run = async (bot, message, args) => {

        message.channel.send(bot.ping + " ms");

};

module.exports.help = {
    name: "ping"
}