const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) =>{
        if(!message.member.hasPermission("MANAGE_GUILD")) return errors.noPerms(message, "MANAGE_GUILD");
        if(args[0] == "help"){
            message.reply("Usage: !ban <user> <reason>");
        return;
        }
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find User!");
        let bReason = args.join(" ").slice(22);
        if(bUser.hasPermission("MANAGE_GUILD")) return message.channel.send("That person can't be banned!");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#ff0800")
        .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find(`name`, "incidents")
        if(!banChannel) return message.channel.send("Can't find incidents channel.");

        message.delete().catch(O_o=>{});
        message.guild.member(bUser).ban(bReason)
        banChannel.send(banEmbed);

}

module.exports.help = {
    name: "ban"
}