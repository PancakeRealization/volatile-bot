const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes.", "No.", "Maybe.", "I don't know.", "Try again later.", "Without a doubt."];

    let result = Math.floor((Math.random()* replies.length));
    let question = args.slice(0).join (" ");

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(color)
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballEmbed);

}

module.exports.help = {
    name: "8ball"
}