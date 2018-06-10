const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bugReport = args.join(" ").slice(0);
    let creator = bot.users.get(`411037285526667275`) 
    
    message.delete().catch(O_o=>{});
    message.channel.send("The Bug has been reported.");
    creator.send(`**${message.author.username}** has reported a bug. Here is the bug: __${bugReport}__.`);

}

module.exports.help = {
    name: "bug"
}