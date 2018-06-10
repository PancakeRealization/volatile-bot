const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    if(!args[1]) return message.reply("Please ask a full interest!");

    let result = Math.floor(Math.random() * 100);  
    let loveinterest = args.slice(0).join (" ");

    let loveEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#1dff00")
    .addField("Interests", loveinterest)
    .addField("Answer", result);

    message.channel.send(loveEmbed);

}

module.exports.help = {
    name: "lovemeter"
}