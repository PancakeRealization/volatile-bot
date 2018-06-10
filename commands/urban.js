const urban = require("relevant-urban");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, tools) => {

    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    if(!args[0]) return message.channel.send("Please specify something.");

    let res = await urban(args.join(" ")).catch(e => {
        return message.channel.send("Sorry, that word wasn't found!").then(msg => {msg.delete(60000)});

        message.delete().catch();
    });

    const embed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setDescription(`**Definition:**\n*${res.definition}*\n\n**Example:**\n${res.example}`)
    .addField("Author", res.author, true)
    .addField("Rating", `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`);

    if (res.tags.length > 0 && res.tags.join(" ").length < 1024) {
        embed.addField("Tags", res.tags.join(", "), true)

    }
  
    message.delete().catch();
    message.channel.send(embed).then(msg => {msg.delete(60000)});
}

module.exports.help = {
    name: "urban"
}