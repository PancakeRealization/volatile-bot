const Discord = require("discord.js");

let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }
    let uCoins = coins[message.author.id].coins;

    let coinEmbed = new Discord.RichEmbed()
    .setColor("#00FF00")
    .addField("Your Balance",uCoins);

    message.delete().catch();

    message.author.send(coinEmbed);
    message.channel.send(`A Message has been sent to ${message.author.username}.`);

}

module.exports.help = {
    name: "balance"
}