const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let purple = botconfig.purple


module.exports.run = async (bot, message, args) => {

    if (message.author.id !== '411037285526667275')
        return message.channel.send("Nope! Bot Owner Only!").then(msg => {msg.delete(10000)});

    if (message.author.id == '411037285526667275')

        contributersEmbed = new Discord.RichEmbed()
        .setAuthor("Gathering Command. Successful!")
        .setDescription(message.author.username)
        .setColor(purple)
        .addField("Testers", `Luka, Ollie, and Minako.`)
        .addField("Contributers", `DoofusJack, FreakChan, Tetra#0002 (Bot owner of ium)`);

        message.delete().catch(O_o=>{});
        return message.channel.send(contributersEmbed).then(msg => {msg.delete(10000)});

}

module.exports.help = {
    name: "contributers"
}
