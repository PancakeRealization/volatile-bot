const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (message.author.id !== '411037285526667275')
return message.channel.send("Nope! Bot Owner Only!").then(msg => {msg.delete(10000)});

if (message.author.id == '411037285526667275')
var botmessage = args.join(" ");
message.delete().catch(O_o=>{});
message.channel.send(botmessage);

}

module.exports.help = {
    name: "broadcast"
}
