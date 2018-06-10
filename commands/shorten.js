const Discord = require("discord.js");
const shorten = require("isgd");

module.exports.run = async (bot, message, args, tools) => {

    message.delete().catch();

if (!args[0]) return message.channel.send("Proper Usage: !shorten <url> [title")

if (!args[1]) {

    shorten.shorten(args[0], function(res) {
        if (res.startsWith(`error`)) message.channel.send("Please enter a valid URL!");

        message.channel.send(`**<${res}>**`);
  })
} else {

    shorten.custom(args[0], args[1], function(res) {

        if (res.startsWith(`Error:`)) message.channel.send(`**${res}**`);

        message.channel.send(`**${res}**`);

        message.channel.send(colorEmbed).then(msg => {msg.delete(60000)});

    })

}

}

module.exports.help = {
    name: "shorten"
}