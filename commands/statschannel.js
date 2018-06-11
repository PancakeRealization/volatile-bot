const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("Hello.")
    try{
    message.channel.send(`Enabled stats channel.`)
    message.guild.createChannel(`Total Users: ${message.guild.memberCount}`, 'voice')
      }catch(e){
        console.error(e);
        message.channel.send(`We tried to enable the stats channel.`)
    }
}

module.exports.help = {
    name: "statschannel enable"
  }