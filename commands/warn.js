const Discord = require("discord.js")
const fs = require("fs");
const ms = require("ms");
const errors = require("../utils/errors.js");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] == "help"){
    message.reply("Usage: !warn <user> <reason>");
    return;
    }


    //!warn @mention <reason>
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do Pal!");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Couldn't find the User.");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They are above your payrate.");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#ff0800")
    .addField("Warned User", wUser.id)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`, "incidents");
    if(!warnchannel) return message.reply("Couldn't find channel.");

    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 2){
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole) return message.reply("You should create a mute role.");

        let mutetime = "3m";
        await(wUser.addRole(muterole.id));
        message.channel.send(`${wUser.id} has been muted!`);

        setTimeout(function(){
            wUser.removeRole(muterole.id)
            message.channel.reply(`${wUser.id} has been unmuted.`);
        }, ms(mutetime))
    }

    if(warns[wUser.id].warns == 5){
        message.guild.member(wUser).kick(reason);
        message.reply(`${wUser.id} has been kicked`)
    }

}

module.exports.help = {
    name: "warn"
};