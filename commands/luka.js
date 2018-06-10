const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let lukaEmbed = new Discord.RichEmbed()
    .setDescription("Luka's Information")
    .setColor("#2900f9")
    .addField("Luka's Online Life", `Luka is a well known person on this server with Alex, he is also Admin and a guinea pig for testing commands on. Luka will do anything for testing commands.`)
    .addField("Luka's Admin Life", `Luka is an admin, a good admin at hand. He adds stuff to this server and also deletes stuff, but he has to have permission from a upperclassmen named Alex first. `);

    message.channel.send(disabled);
}
module.exports.help = {
    name: "lukawip"
}