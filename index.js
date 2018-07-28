const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const YTDL = require("ytdl-core");
const bot = new Discord.Client({disableEveryone: false});

// const Cleverbot = require("cleverbot-node");
// const clbot = new Cleverbot;
// clbot.configure({botapi: "IAMKEY"});

bot.commands = new Discord.Collection();
let purple = botconfig.purple;
let green = botconfig.green;
let cooldown = new Set();
let cdseconds = 3;

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile= files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    };

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});

function play(connection, message) {
    let server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();

    server.dispatcher.on("end", function() {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
};

let servers = {};

bot.on("ready", async () => {
    setInterval(function() {
        bot.user.setActivity(`!aboutbot to get info!`);
        setTimeout(function() {
        bot.user.setActivity(`${bot.guilds.size} servers, ${bot.users.size} people!`, {type: "WATCHING"});
        }, 5000)
      }, 10000)
});


// bot.on("ready", async () => {
//   console.log(`${bot.user.username} is online on ${bot.guilds.size} servers! Serving ${bot.users.size} users.`);
//   bot.user.setActivity("Code...", {type: "LISTENING"});
// });


bot.on("guildMemberAdd", (member, message) => {
    console.log(`${member.id} joined the server! :D`);

    // let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    // let welcomechannel = member.guild.channels.find(`name`, "members-joined");
    // // welcomechannel.send(`We have a new member! ${member} has joined the guild! :D`);
    // let welcomeEmbed = new Discord.RichEmbed()
    // .setAuthor(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL)
    // .setColor(color)
    // .setFooter(`User Joined`)
    // .setTimestamp();
    
    // welcomechannel.send(welcomeEmbed);

    let usersbefore = member.guild.memberCount - 1;
    let statschannel = member.guild.channels.find(`name`, `Total Users: ${usersbefore}`);
    member.guild.channels.find(`name`, `Total Users: ${usersbefore}`).setName(`Total Users: ${member.guild.memberCount}`);
});

bot.on("guildMemberRemove", (member, message) => {
    console.log(`${member.id} left the server! ;-;`);
    // let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    // let usersbefore = member.guild.memberCount + 1;
    // let statschannel = member.guild.channels.find(`name`, `Total Users: ${usersbefore}`);
    // let welcomechannel = member.guild.channels.find(`name`, `members-joined`);

    // let welcomeEmbed = new Discord.RichEmbed()
    // .setAuthor(`${member.user.tag} (${member.user.id})`, member.user.displayAvatarURL)
    // .setColor(color)
    // .setFooter(`User Left`)
    // .setTimestamp();

    // welcomechannel.send(welcomeEmbed)

    member.guild.channels.find(`name`, `Total Users: ${usersbefore}`).setName(`Total Users: ${member.guild.memberCount}`);
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

// //Cleverbot 
// bot.on("message", message => {
//     if (message.channel.type === "dm") {
//       clbot.write(message.content, (response) => {
//         message.channel.startTyping();
//         setTimeout(() => {
//           message.channel.send(response.output).catch(console.error);
//           message.channel.stopTyping();
//         }, Math.random() * (1 - 3) + 1 * 1000);
//       });
//     }

    
    let prefix = prefixes[message.guild.id].prefixes;

    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply("You have to wait 3 seconds between commands.")
    }
    // if(!message.member.hasPermission("MANAGE_GUILD")){
        cooldown.add(message.author.id);
   //  }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    setTimeout(() => {
        cooldown.delete(message.author.id)
    }, cdseconds * 1000)

});

bot.login(tokenfile.token);
