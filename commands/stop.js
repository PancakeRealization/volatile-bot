const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args) => {

    let server = servers[message.guild.id];

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    message.channel.send("The bot was disconnected.");
    message.delete().catch();

}

module.exports.help = {
    name: "stop"
}