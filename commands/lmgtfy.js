const Discord = require("discord.js");
const encode = require("strict-uri-encode");


module.exports.run = async (bot, message, args, tools) => {

let question = encode (args.join(" "));

let link = `http://lmgtfy.com/?q=${question}`;

message.channel.send(`**<${link}>**`).then(msg => {msg.delete(60000)});;

message.delete().catch();

}

module.exports.help = {
    name: "lmgtfy"
}