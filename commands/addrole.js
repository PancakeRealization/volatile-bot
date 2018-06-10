const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Sorry.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    message.delete().catch();
    await rMember.send(`You have been granted the role ${gRole.name}.`)
  }catch(e){
    message.delete().catch();
    message.channel.send(`You have granted <@${rMember.id}>, the role ${gRole.name}. We tried to DM them.`)
  }
}

module.exports.help = {
  name: "addrole"
}

