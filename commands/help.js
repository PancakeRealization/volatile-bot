const Discord = require("discord.js");
const botconfig = require("../botconfig");
let yellow = botconfig.yellow;
let green = botconfig.green;
let red = botconfig.red;
let blue = botconfig.blue;
let purple = botconfig.purple;

module.exports.run = async (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;

    let importantEmbed = new Discord.RichEmbed()
    //11 Lines -- Important Commands
    .setDescription("**Important Commands**")
    .setAuthor("Volatile")
    .setThumbnail(bicon)
    .setColor(yellow)
    .addField("Bug", `!bug <bug> // Reports the bug to the bot owner!`)
    .addField("Suggest", `!suggest <suggestion> // Sends a suggestion!`)
    .addField("Announcements", `!announcements // Shows the latest updates!`)
    .addField("aboutbot", `!aboutbot // Shows the bot info!`)
    .addField("serverinfo", `!serverinfo // Shows the server info!`)
    .addField("about", `!about <user> // Shows info about a user! `)
    .addField("aboutchannel", `!aboutchannel // Shows info about the channel your in!`);

    message.author.send(importantEmbed)

    let normalEmbed = new Discord.RichEmbed()
    // 6 Lines -- Normal Commands
    .setAuthor("Normal Commands")
    .setThumbnail(bicon)
    .setColor(yellow)
    .addField("report", `!report <user> <reason> // Reports the specified user!`)
    .addField("shorten", `!shorten <URL> // Shortens the URL!`);

    message.author.send(normalEmbed)

    let funEmbed = new Discord.RichEmbed()
    // 12 Lines -- Fun Commands
    .setAuthor("Fun Commands")
    .setThumbnail(bicon)
    .setColor(blue)
    .addField("lovemeter", `!lovemeter <user> <user> // Random Percentage!`)
    .addField("lovemeter2", `!lovemeter2 <user> <user> // Always give 100%!`)
    .addField("8ball",  `!8ball <question> // Ask a question to 8ball!`)
    .addField("doggo", `!doggo // Show a random dog picture!`)
    .addField("level", `!level // Shows your level!`)
    .addField("rolldice", `!rolldice // Rolls a dice!`)
    .addField("avatar", `!avatar <user> or !avatar // To show your avatar image!`)
    .addField("randomcolor", `!randomcolor // Chooses a random Color!`)
    .addField("urban", `!urban <word> // Shows the definition from UrbanDictionary!`)
    .addField("lmgtfy", `!lmgtfy <question> // Adds detailed thingy about answering questions!`)

    message.author.send(funEmbed)

    let musicEmbed = new Discord.RichEmbed()
    // 6 Lines -- Music Commands
    .setAuthor("Music Commands")
    .setThumbnail(bicon)
    .setColor(purple)
    .addField("play", `!play <url> // Plays the URL!`)
    .addField("stop", `!stop // Stops the current queue!`)
    .addField("skip", `!skip // Skips the current song!`);
    message.author.send(musicEmbed)

    let economyEmbed = new Discord.RichEmbed()
    // 5 Lines -- Economy Commands
    .setAuthor("Economy Commands")
    .setThumbnail(bicon)
    .setColor(green)
    .addField("balance", `!coins // Shows your amount of coins!`)
    .addField("pay", `!pay <user> <amount> // Pays the user the amount!`);

    message.author.send(economyEmbed)

    let adminEmbed = new Discord.RichEmbed()
    // 11 Lines -- Admin Commands
    .setAuthor("Admin Commands")
    .setThumbnail(bicon)
    .setColor(red)
    .addField("warn",`!warn <user> <reason> // Warns the specified user!`)
    .addField("warnlevel", `!warnlevel <user> // Shows the amount the user has been warned!`)
    .addField("say", `!say <what you want to say> // Says something that you want the bot to say!`)
    .addField("prefix", `!prefix <prefix you want> // Changes the prefix!`)
    .addField("kick", `!kick <user> <reason> // Kicks the specified user!`)
    .addField("ban",  `!ban <user> <reason> // Bans the specified user!`)
    .addField("clear", `!clear <amount> // Clears the amount of messages!`)
    .setFooter("Did you find what you're looking for?", message.author.displayAvatarURL);
  
    message.author.send(adminEmbed)

    message.delete().catch();
    message.channel.send(`A Message has been sent to ${message.author.username}.`);
  
    // .addField("lukawip", `!lukawip // Shows info on Luka!`)

}

module.exports.help = {
    name: "help"
}