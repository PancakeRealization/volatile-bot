const Discord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args) => {

    let server = servers[message.guild.id];

    if(server.dispatcher) server.dispatcher.end(); 
    message.channel.send("The current song was skipped.");
    message.delete().catch();

}

module.exports.help = {
    name: "skip"
}