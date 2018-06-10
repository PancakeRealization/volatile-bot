const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // message.delete().catch(O_o=>{}); 
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof.")
    if(!args[0]) return message.channel.send("oof.")
    message.channel.bulkDelete(args[0]).then(() => {
        message.delete().catch();
        message.channel.send(`Cleared the messages! ${args[0]} messages.`).then(msg => msg.delete(5000));    
    });

}

module.exports.help = {
    name: "clear"
}