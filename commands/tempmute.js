const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] == "help"){
    message.reply("Usage: !tempmute <user> <time>");
    return;
    }

    let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find User.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#ff0800",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false

                });
            
                
            });
        }catch(e){
            console.log(e.stack);
        }
    }
//end of create role

let mutetime = args[1];
if(!mutetime) return message.reply("You didn't specify a time!");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)} millseconds!`);

setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
}, ms(mutetime));
}

module.exports.help = {
    name: "tempmute"
}