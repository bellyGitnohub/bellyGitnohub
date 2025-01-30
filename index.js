const { AoiClient } = require("aoi.js");


const client = new AoiClient({
  token: "MTMyMzA2OTcxMjU2MDY4NTIwNg.GNTX4C.VWKTmBIITjGpv0ojqnPVzs0IjpNgoM2sCgg-yg",
  prefix: [ "N?","$getGuildVar[prefix]"],
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});
client.command({
    name: "<@$clientID>",
    aliases: ["<@!$clientID>"],
    nonPrefixed: true,
    code: `
    $reply 👋 olá! $username[$clientID] Tudo bom com você?, sou um bot de rpg geral chamado **Econômica Local** hehehehehehehe! meu prefixo atual nesse servidor é: $getGuildVar[prefix] então use \`\`$getGuildVar[prefix]ajuda\`\` para ver meus comandos!**. 
`});


client.variables({
   prefix: "N?",

})

client.status({
name: "Neon Em desenvolvimento",
type: "Custom",
time: 12,
});

client.loadCommands("./comandos/", true)   
