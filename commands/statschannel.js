const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try{
        message.channel.send(`Enabled stats channel.`)
        message.guild.createChannel(`Total Users: ${message.guild.memberCount}`, 'voice')
          }catch(e){
            console.log(err);
            message.channel.send(`We tried to enable the stats channel.`)

          }

}

module.exports.help = {
    name: "statschannel enable"
};