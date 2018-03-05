const Discord = require('discord.js');
const express = require("express");
var app = express();
var AuthDetails = require("./auth.json");
var RedisSessions = require("redis-sessions");
var rs = new RedisSessions();
var Music = require("./Music.js");
var ffmpeg = require("ffmpeg");
var search = require('youtube-search'),
yt = require("./youtube_plugin"),
youtube_plugin = new yt(),
music = new Music();
var prefix = ".";
var moment = require("moment");
var mention = "<@1930903359700619264>";
const opts = {
  maxResults: 3,
  key: AuthDetails.youtube_api_key
};


var bot = new Discord.Client();
var prefix = ('z');

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'BOT ZOLIA | zhelp', type: 0}});
    console.log('Connected succesfull !');
});


bot.login('NDE5OTE2NDMxMzcxNTM0MzU1.DX3Hig.ZLFXcrRxa9T5W9VlNfDXAmvHt4Y');

bot.on('guildMemberAdd', member => {
    var help_embed = new Discord.RichEmbed()
    let role = member.guild.roles.find('name', '» Joueurs(ses)');
    member.guild.channels.find('name', 'arrivants').send(`:hamburger: ${member.user.username} vien de rejoindre notre équipe ! :fries:`)
    member.addRole(role)

})




bot.on('message', message => {

    if (message.content === 'fils de pute'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'connard'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`);
    }

    if (message.content === 'merde'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'pd'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'salope'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'salop'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'bite'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'nike ta mere'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'nike ta mère'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === 'chate'){
        message.reply(`:thunder_cloud_rain: :rage: ton language ! :triumph:`)
    }

    if (message.content === prefix + 'logo'){
        var help_embed = new Discord.RichEmbed()
            .setTitle(`Ton logo ${message.author.username} :stuck_out_tongue_closed_eyes: !`)
            .setColor('#FEFEFE')
            .setImage(message.author.avatarURL);
            
        message.channel.sendEmbed(help_embed);
        console.log('Commande LOGO demandée !')
    
    }

bot.on('message', message => {
    if (message.content == '!clear') {
    if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
    message.channel.sendMessage("Désoler mais vous n' avez pas la permission de faire ceci");
    return;
    } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
    message.channel.sendMessage("Désoler mais vous n' avez pas la permission de faire ceci");
    return;
    }
    if (message.channel.type == 'text') {
        message.channel.fetchMessages()
        .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; 
        })
        .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
            });
        }
    }
});
    





    if (message.content === prefix + 'help'){
        var help_embed = new Discord.RichEmbed()
            .setColor('#FEFEFE')
            .addField('Commandes du bot ! <préfix (z)>', '   - zhelp : Affiche les commandes du bot !')
            .addField('Commande musique !', "   -`zadd`: Ajoute la musique dans la playlist. -`zplay`: Permet de jouer les musique qu'il y a dans la playlist. -`zlink`: Vide la playlist(queue). -`zstop`: Permet de faire quitter le bot du salon vocal.")
            .setFooter('By α†hεƦρ')
        message.channel.sendEmbed(help_embed);    
        //message.channel.send("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log('Commande Help demandée !')
    }
        
        
    if (message.content === prefix + 'zerpod'){
            var help_embed = new Discord.RichEmbed()
                .setColor('#FEFEFE')
                .addField(':100: Chaîne de ZERPOD !', '    ►-http://bit.ly/zerpod')
                .addField(':microphone2: Abonne-toi', "    Si tu n'est pas abonné tu n'est pas un fidèle !") 
                .setFooter('By α†hεƦρ')
            message.channel.sendEmbed(help_embed);
            console.log('Commande Zerpod demandée !')       

    }
});

bot.on("ready", () => {
    var memberCount = bot.users.size;
    var servercount = bot.guilds.size;
        var servers = bot.guilds.array().map(g => g.name).join(',');
    })
    var messages = [];
bot.on('message', message => {
   music.setVoiceChannel(message.member.voiceChannel);
    var array_msg = message.content.split(' ');
            messages.push(message);
            switch (array_msg[0]) {
        case ("zplay") :
            console.log("Play");
            message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            else music.voice();
            }
            break;
            case ("zpause") :
                console.log("Pause");
                message.delete(message.author);
                if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
                if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
                music.pause();
                break;
            case ("zresume") :
                console.log("Resume");
                message.delete(message.author);
                if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
                if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
                music.resume();
                break;
            case ("zstop") :
                console.log("Stop");
                message.delete(message.author);
                if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
                if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
                else music.stop();
                message.reply("La queue à été vidé !");
                break;
            case ("zadd") :
                console.log("Add");
                message.delete(message.author);
                var link = message.content.split(' ');
                link.shift();
                link = link.join(' ');
                search(link, opts, function(err, results) {
                    if(err) return console.log(err);
                    for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                    message.channel.sendMessage(results[y].link);
                    music.setTabEnd(results[y].link);
                message.reply('By LewanIngame')
                });
                break;
            case ("zlink") :
                console.log("Link");
                message.delete(message.author);
                var link = message.content.split(' ');
                link.shift();
                link = link.join(' ');
                console.log(link);
                music.setTabEnd(link);
                break;
            case ("zvolume") :
                console.log("Volume");
                message.delete(message.author);
                var link = message.content.split(' ');
                link.shift();
                link = link.join(' ');
                music.volume(link/100);
                message.reply("le volume et maintenant à :" + link);
                break;
            }
        
        if (message.content === ("zchannel")){
        const data = client.channels.get(message.channel.id);
        moment.locale("fr");
        var temps = moment(data.createdTimestamp).format("LLLL");
        console.log(temps)
        message.reply("\n" + "```javascript"+ "\n" + "Nom du channel: " + data.name + "\n" + "Type de channel: " + data.type + "\n" +
        "Channel id: " + data.id + "\n" + "Topic: " + data.topic + "\n" + "Créer le: " + temps + "```" );
        console.log("\n" + "**" + "Channel id: " + data.id + "**" );
        console.log(data);
        }
    else if (message.content.startsWith('zyoutube')){
    youtube_plugin.respond(message.content, message.channel , client);
    }
    })
    
    app.get('zplaylist', function (req, res) {
        var json = JSON.stringify(music.tab);
        res.send(json);
    });
    
    app.listen(AuthDetails.port);
