const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('533590488062885888').roles.find("Rainbow","Owner").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});
client.login(process.env.BOT_TOKEN);
