const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#ff0800")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created By", `PancakeRealization#9394`)
        .addField("Created On", bot.user.createdAt)
        .addField("Servers I am in", `${bot.guilds.size}`)
        .addField("Want help?", `https://discord.gg/Tr65AJb`)
        .addField("Bot Commands", `Do !help`)
        .addField("Info", `make a "members-joined", "reports", "incidents", and a random voice channel.`);

        message.delete().catch();
        return message.channel.send(botembed);
    

}

module.exports.help = {
    name: "aboutbot"
}
