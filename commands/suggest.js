const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let suggestReport = args.join(" ").slice(0);
    let creator = bot.users.get(`411037285526667275`) 
    
    message.delete().catch(O_o=>{});
    message.channel.send("The Suggestion has been sent.");
    let suggestEmbed = new Discord.RichEmbed()
    .setTitle("Suggestion")
    .addField("User", `${message.author.id}`,)
    .addField("Suggestion", `suggestReport`)
    .setTimestamp();
    return creator.send.suggestEmbed;
    // creator.send(`**${message.author.username}** has suggested something. Here is the suggestion: __${bugReport}__.`);

}

module.exports.help = {
    name: "suggest"
}