const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#ff0800")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created By", `PancakeRealization#9394, and Cliffrising_inputs#7468.`)
        .addField("Created On", bot.user.createdAt)
        .addField("Servers I am in", `${bot.guilds.size}`)
        .addField("Bot Commands", `Do !help`)
        .addField("Info", `Make a "members-joined", "reports", "incidents".`)
        .addField("More Info", `Use !statschannel-enable`);

        message.delete().catch();
        return message.channel.send(botembed);
    

}

module.exports.help = {
    name: "aboutbot"
}
