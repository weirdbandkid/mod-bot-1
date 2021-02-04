module.exports = {
    name: 'ping',
    discription: "this is a ping command",
    timeout: 10000,
    execute(message,args){

        const Discord = require('discord.js');

        const client =new Discord.Client();


        message.channel.send('Pinging the server. Please wait...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            resultMessage.edit(`My ping is: \`${ping} ms\``)
        })



        }
}