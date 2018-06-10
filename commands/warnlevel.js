const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const errors = require("../utils/errors.js");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] == "help"){
    message.reply("Usage: !warnlevel <user>");
    return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("I'm sorry but you can't do that.");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Couldn't find the User.");
    message.delete().catch(O_o=>{});
    let warnlevel = warns[wUser.id].warns;


    message.reply(`<@${wUser.id}> has ${warnlevel} warnings.`);

}

module.exports.help = {
    name: "warnlevel"
}