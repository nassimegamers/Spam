const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(NTM1NzQ4ODczNjUwNTY5MjE2.DyMqsA.jqrVXgXAJhOvcsolJ91HcOlTYJc);// لا تغير فيها شيء
client2.login(NTM1NzQ4OTA4ODU3NDI1OTIw.DyMrkg.BAyuIBUqOSQvFoGGfcWuRdSZYsY);// لا تغير فيها شيء
client3.login(NTM1NzQ4OTQ3MDMzOTgwOTM4.DyMrwg.ScNp5qiFmVBY__upgirjCIAvRoo);// لا تغير فيها شيء
client4.login(NTM1NzQ4OTc3MjMzMTAwODAx.DyMr_g.cdwOcUweO3I95ZFqDeh6WW14HuU);// لا تغير فيها شيء
client5.login(NTM1NzQ5MDAzMjc1NDAzMjk3.DyMsEg.aC7Oqha0iHA2a0E6g08lOwLve4U);// لا تغير فيها شيء