```client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('ايدي السيرفر').roles.find("Rainbow", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});