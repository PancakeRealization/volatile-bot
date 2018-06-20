const Disord = require("discord.js");
const YTDL = require("ytdl-core");

module.exports.run = async (bot, message, args) => {

    function play(connection, message) {
        let server = servers[message.guild.id];
    
        server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
        server.queue.shift();
    
        server.dispatcher.on("end", function() {
            if (server.queue[0]) play(connection, message);
            else connection.disconnect();
        });
    };

    if(!args[0]) {
        message.channel.send("Please provide a entry.");
        return;
    }

    if(!message.member.voiceChannel) {
        message.channel.send("You must be in a Voice Channel.");
        return;
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id];
    server.queue.push(args[0]);

    if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
        message.delete().catch();
    });

}

module.exports.help = {
    name: "play"
}