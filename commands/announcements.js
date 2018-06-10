const Discord = require("discord.js");
const botconfig = require("../botconfig");
let yellow = botconfig.yellow;

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let announcementEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("**Announcements**")
    .setThumbnail(bicon)
    .setAuthor("Volatile")
    .setColor(yellow)
    .addField("Updates", `Update 03: Added a bot owner only command.`);

    message.delete().catch(O_o=>{});
    message.channel.send(announcementEmbed).then(msg => {msg.delete(60000)});

}

module.exports.help = {
    name: "announcements"
}