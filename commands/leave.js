const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kUser = message.author

    message.delete().catch(O_o=>{});
    message.guild.member(kUser).kick


}

module.exports.help = {
    name: "leave"
}