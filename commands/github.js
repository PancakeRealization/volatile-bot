const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let githubEmbed = new Discord.RichEmbed()
    .setTitle("Github")
    .setURL(`https://github.com/PancakeRealization/volatile-bot`)
    .setFooter("Github Link")
    .setTimestamp();

    message.delete().catch();
    message.channel.send(githubEmbed);

}

module.exports.help = {
    name: "///github"
}