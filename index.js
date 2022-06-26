const Discord = require("discord.js");
const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require('discord.js');

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES

    ]
});

var nbTicket = 00000;

Client.on("ready", async () => {   
 
 
   /*  var row = new Discord.MessageActionRow()
              .setComponents( new Discord.MessageButton()
                .setCustomId("open-ticket")
                .setLabel("CREATE TICKET")
                .setStyle("PRIMARY")
              );
      
      
     const embed1 = new MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Ticket admin')
          .setDescription('ce ticket vous permet de créer un ticket administrateur uniquement');


        Client.channels.cache.get("983477219496190032").send({embeds: [embed1], components: [row]});
        */
  
  
    
      
    
    /*var row = new Discord.MessageActionRow()
    .setComponents( new Discord.MessageButton()
      .setCustomId("open-ticket")
      .setLabel("ouvrir un ticket")
      .setStyle("PRIMARY")
    );


        Client.channels.cache.get("983477219496190032").send({content: "ticket Admin + Helper", components: [row]});
  */





console.log("bot opériationnel");
}); 

Client.on("interactionCreate", interaction => {
      if(interaction.isButton()){
        if(interaction.customId === "open-ticket"){
            nbTicket++;

              interaction.guild.channels.create("ticket-" + nbTicket, {
                  parent: "983498196661719051"
              }).then(channels => {
                  var row = new Discord.MessageActionRow()
                      .addComponents(new Discord.MessageButton()
                          .setCustomId("close-ticket")
                          .setLabel(" Close")
                          .setStyle("PRIMARY")
                        );

                        const embed2 = new MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle('Ticket admin')
                        .setDescription('ce ticket vous permet de créer un ticket administrateur uniquement');
                    
                    
                        channels.send({content: "<@" + interaction.user.id + "> Welcome",components: [row]});
                              
                   
                   
                   
                   
                   
                   
                    interaction.reply({content: "ticket corectement créer", ephemeral:true});
              });
        }
        else if(interaction.customId === "close-ticket"){
            interaction.channel.setParent("987828169136570368");


            var row = new Discord.MessageActionRow()
                    .addComponents(new Discord.MessageButton()
                        .setCustomId("delete-ticket")
                        .setLabel("OUI")
                        .setStyle("PRIMARY")
                      );

                  interaction.message.delete();

                  interaction.channel.send({content: "Staff voulez vous supprimez le ticket ?", components: [row]});

                  interaction.reply({content: "ticket archivé", ephemeral: true});
              }
              else if(interaction.customId === "delete-ticket"){
                interaction.channel.delete();
              }
      }

});














































Client.login(process.env.TOKEN);