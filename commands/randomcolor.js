const Discord = require("discord.js");
const botconfig = require("../botconfig");
let yellow = botconfig.yellow;
let green = botconfig.green;
let red = botconfig.red;
let blue = botconfig.blue;
let purple = botconfig.purple;

module.exports.run = async (bot, message, args) => {

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    

    let colorEmbed = new Discord.RichEmbed()
    .setDescription("Your Colour.")
    .setAuthor(message.author.username)
    .setColor(color)
    .addField("Color Chosen", `${color}`);

    message.delete().catch();
    message.channel.send(colorEmbed).then(msg => {msg.delete(60000)});

}

module.exports.help = {
    name: "randomcolor"
}