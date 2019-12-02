const discord = require ('discord.js');
require('dotenv').config()

 var client = new discord.Client();

 const token = process.env.CLIENT_TOKEN

 const cooldowns = new Set();

 const coolguy = new Set();


    client.on('ready', () => {
        console.log ("I'm Online, Thank You Aquizzity Or Steven For Hosting Me.");
        console.log(`Logged in as ${client.user.tag}!`);
        console.log("Made by StevenMðds#7621");

     client.user.setActivity ("HELPING AUTSTIC KIDS");
     
     

     answered = true;
     cAnswer = "";
     userAnswer = "";
     });

 const fs = require("fs");
 client.msgs = require ("./msgs.json");

 client.on ("guildMemberAdd", member => {

    var role = member.guild.roles.find ("name", "Members");
    member.addRole (role);

 })

 const prefix = "!";
 client.on ("message", (message) => {

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    let mention = message.mentions.users.first() || message.author


    let nordvpn = ['alexanderabaya@gmail.com:chief123', //fgen
    'victorhugo1015@gmail.com:Vivi1212',
    'antdel19@gmail.com:Modem12',
    'triplep77@yahoo.com:Miller30',
    'Anja.Jordan78@yahoo.de:Paddy111',
    'konstantin-toenjes@onlinehome.de:Fishbone7',
    'maka-dok@i.ua:maks1997',
    'mickyomg228@gmail.com:n13110123',
    'jwel336@aol.com:qupdnt336',
    'lila@freemail.gr:papakos123',
    'smelchionna1@aol.com:humphrey123',
    'will.lewis@live.com.au:Dragon66',
    'nik@jbkbbk.de:Niketv12',
    'shelbym0815@gmail.com:Tuxbaby1',
    'bloodcreed21@gmail.com:Minecraft12',
    'uscg8389@me.com:1Danielle',
    'Klaudiusgajdica@gmail.com:quaresma77',
    'lsnowdenmvv@gmail.com:Turbo730',
    'jcamm6@gmail.com:Polarbear6',
    'ruiz.katie21@gmail.com:wilson21',
    'abguba2001@mail.ru:SipK7KTtbpae',
    'lucas.silva321@gmail.com:Marilda123',
    'itayisamunyai3@hotmail.com:Cliffton123!',
    'bilekfam@gmail.com:hannah96',
    'www.passi95@gmx.de:Legende12',
    'loimado15@gmail.com:lovacska12',
    'ALUKINU@YANDEX.RU:irbis12061977',
    'ondercetn1903@gmail.com:Lifelive1',
    'ms.woermlitz@web.de:Tannwalder1',
    'binayagurung195@yahoo.co.uk:vardaan123',
    'sabaroussama5@gmail.com:sabar0000',
    'marcomorgado@hotmail.de:marcao12',
    'clarissamay_@hotmail.com:Nipples8',
    'phxdindin@icloud.com:cccc0531',
    'bk200@web.de:5thelement',
    'msboogra@gmail.com:Sharpie7',
    'jmcgwilliams@gmail.com:db362435',
    'etiennescottfortin463@outlook.com:empire123',
    '1christo2joubert@gmail.com:1elvira3',
    'fake1523123@gmail.com:basketball022',
    'rubenlai@gmail.com:Qwerasdf1',
    'gcventer9@gmail.com:Lucandre1',
    'tsmithtravis555@gmail.com:William555',
    'fridolinpanzerkorps@gmail.com:04091407509shef',
    ]

let premiumgen = [
'jrskfiazqnvcmgyolewpdbhxut',
'dnpyuicqxeklwjzagvostbfhmr',
'qudvbrohxtpscnkelwmgyjzaif',
,]

let hulu = ['marcos_rota2000@live.com:Marquino559',
'gnoble85@gmail.com:GetaKit85!',
'pdblinkinsop@gmail.com:Hellfire1!',
'tholson90@gmail.com:asdf1122',
'joeymercadante@gmail.com:pats1283',
'munson_heather@yahoo.com:jaden1084',
'nieto_abraham@hotmail.com:hydrogen16',
'bander.ruwaii@gmail.com:abcd1234',
'sean.burke1221@gmail.com:jetsrock1221',
'kylegierke@yahoo.com:cookie3254',
'ian.hardee@wayland.wbu.edu:tantallon1',
'brendenmessenger@hotmail.com:Brenden22',
'freyr123@gmail.com:321654as',
'bppayne418@gmail.com:hockey418',
'starkjason1988@gmail.com:chango88',
'Duvallblake@ymail.com:Brokencyde1',
'polarisnsv@sbcglobal.net:Polaris1',
'tlwebb900@gmail.com:mxzn8882',
'acaccarter7@gmail.com:carte224',
'quancyxiong@yahoo.com:August13!',
'bmacgyver83@yahoo.com:Rbubba22!',
'caboose9131@gmail.com:starship1',
'kartier2010@gmail.com:Stevesr8288',
'dc_1990@live.com:Dc18902835t.',
'brentc200@live.com:coolman86',
'michaelchang120@yahoo.com:bubber120',
'mustangroush1@gmail.com:hjarmy2004',
'Smithal.1189@gmail.com:catman123',
'emileecomeau@gmail.com:Sept4545',
'chanelc158@gmail.com:jevon900',
'jackberger021@gmail.com:mustang08',
'kevinhc8@gmail.com:cerrato2',
'fut_kershaw15@mail.com:kershaw15',
'nikepro10@gmail.com:tevez32',
'wrew222@g.uky.edu:Bevo1268',
'nmarshl2004@gmail.com:Nathan42',
'valiseth2@gmail.com:Settrix04',
'edwin.alvarez.lbd.94@gmail.com:Mercado1',
'johnsquid999@gmail.com:Johnsquid12',
'ahoce@msn.com:Rockstar8',
'michaeljbraden@gmail.com:gingy718',
'timmakarius@gmail.com:Master321',
'asuicidalbullet@hotmail.com:dbzclam24',
'tylerhartman6@gmail.com:Police503',
'spankydb@gmail.com:Baseball25!',
'brennanbrown23@gmail.com:Brownie23',
'skyquach12@gmail.com:Quach123',
'dwhidby@yahoo.com:glass2012',
'cjknighton13@gmail.com:october1999',
'stardawn137041@yahoo.com:jayron1370',
'corasheldon@yahoo.com:morgan01',
'irishkween68@gmail.com:Mommy1968',
'christina_lewis95@yahoo.com:squishy7',
'phillipbrinegar@gmail.com:dupont24',
'kkeynes@its.jnj.com:Threecats3',
'shellic@me.com:rizzo123',
'cwhiting2000@gmail.com:cwhiting00',
'hilgefordm@gmail.com:maui3476',
'jml0327@gmail.com:alktrio3',
'alisawright2733@yahoo.com:bree007',
'michaelharris1@hotmail.com:Inferno1',
'dolphinlover121701@yahoo.com:chunky18',
'jlivadaros@aol.com:luna1976',
'mljones49.2016@gmail.com:lisa1984',
'fkbufano@gmail.com:texas123',
'lizhendley09@gmail.com:kathleen09',
'roycejb@hotmail.com:pepsicola1',
'ddince@mac.com:Aruba1234',
'gt1202@flhsemail.org:granty10',
'lumbertonpirate11@gmail.com:baseball11',
'skylerallen17@gmail.com:swa031794',
'mikejones1889@gmail.com:Gators07',
'stephanieewing71@gmail.com:buckeye71',
'hawaiianhippie@gmail.com:Gateway1',
'esosa2@stx.rr.com:lizandjack24',
'enixryan15@gmail.com:brokeleg',
]

    let freeandclassic = ['alexanderabaya@gmail.com:chief123', //fgen
    'victorhugo1015@gmail.com:Vivi1212',
    'antdel19@gmail.com:Modem12',
    'triplep77@yahoo.com:Miller30',
    'Anja.Jordan78@yahoo.de:Paddy111',
    'konstantin-toenjes@onlinehome.de:Fishbone7',
    'maka-dok@i.ua:maks1997',
    'mickyomg228@gmail.com:n13110123',
    'jwel336@aol.com:qupdnt336',
    'lila@freemail.gr:papakos123',
    'smelchionna1@aol.com:humphrey123',
    'will.lewis@live.com.au:Dragon66',
    'nik@jbkbbk.de:Niketv12',
    'shelbym0815@gmail.com:Tuxbaby1',
    'bloodcreed21@gmail.com:Minecraft12',
    'uscg8389@me.com:1Danielle',
    'Klaudiusgajdica@gmail.com:quaresma77',
    'lsnowdenmvv@gmail.com:Turbo730',
    'jcamm6@gmail.com:Polarbear6',
    'ruiz.katie21@gmail.com:wilson21',
    'abguba2001@mail.ru:SipK7KTtbpae',
    'lucas.silva321@gmail.com:Marilda123',
    'itayisamunyai3@hotmail.com:Cliffton123!',
    'bilekfam@gmail.com:hannah96',
    'www.passi95@gmx.de:Legende12',
    'loimado15@gmail.com:lovacska12',
    'ALUKINU@YANDEX.RU:irbis12061977',
    'ondercetn1903@gmail.com:Lifelive1',
    'ms.woermlitz@web.de:Tannwalder1',
    'binayagurung195@yahoo.co.uk:vardaan123',
    'sabaroussama5@gmail.com:sabar0000',
    'marcomorgado@hotmail.de:marcao12',
    'clarissamay_@hotmail.com:Nipples8',
    'phxdindin@icloud.com:cccc0531',
    'bk200@web.de:5thelement',
    'msboogra@gmail.com:Sharpie7',
    'jmcgwilliams@gmail.com:db362435',
    'etiennescottfortin463@outlook.com:empire123',
    '1christo2joubert@gmail.com:1elvira3',
    'fake1523123@gmail.com:basketball022',
    'rubenlai@gmail.com:Qwerasdf1',
    'gcventer9@gmail.com:Lucandre1',
    'tsmithtravis555@gmail.com:William555',
    'fridolinpanzerkorps@gmail.com:04091407509shef',
    ]
    
    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (mentionMessage);
        message.channel.send ("Message has been sent!");
    }

    if (msg.startsWith(prefix + "owner")) {
        message.channel.send ("StevenMods is the owner!", {files: [""]});}
    

    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply ("got it right! :smile:");
        }
        else {
            message.reply ("got it wrong :middle_finger: :middle_finger: :middle_finger: YOUR GAY AS FUCK ");
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }

    if (msg.startsWith(prefix + "quiz")) {
        number = 4;
        var random4 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random4) {
         case 1: message.channel.send ("How amazing is Ian: \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "d"; break;
         case 2: message.channel.send ("How amazing is Jeremy: \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "a"; break;
         case 3: message.channel.send ("How amazing is Richond: \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "d"; break;
         case 4: message.channel.send ("How amazing is Mohammad(SHES A GAMER GIRL) ): \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "a"; break;
        }
        answered = false;
    }
    function cooldown(user, time) {
        cooldowns.add(user);
        setTimeout(() => cooldowns.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       message.channel.send (embed);
      }      

      function skanherooo(user, time) {
        coolguy.add(user);
        setTimeout(() => coolguy.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`You have to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       message.channel.send (embed);
      }      
    
    
    if (msg.startsWith (prefix + "invitereward")) {
        embed = new discord.RichEmbed ()
            .setAuthor ("?? INVITE REWARDS ??")
            .setDescription ("These are the invite rewards ! \n 15 Invites: Classic Generator, 40 Invites: Premium Generator")
            .setFooter ("This invite rewards was created by StevenMods")
            .setThumbnail ("https://cdn.discordapp.com/attachments/534993437313859615/581994919783170049/50a19770036af78e91928b860d5f087d.png")
            .setColor ("00ff00")

        message.channel.send (embed);    
    }
    if (msg.startsWith("!help")) {
        embed = new discord.RichEmbed ()
        .setAuthor("Cosmic Gen Commands")
        .setDescription("**Help** !help \n **Free Gen: !fgen \n **Free Hulu !fhulu \n **Free Nord VPN Account !fnord \n **Classic Gen !gen \n **Premium Gen !pgen \n **--------Cosmic Mod Commands-------- \n **Ban ?ban \n **Kick ?kick \n **Ping ?ping ")
        .setFooter("We will be updating the bot everyday!")
        .setColor("#FF00FF")
        message.channel.send(embed);
    }

    if (msg.startsWith (prefix + "creator")) {
        embed = new discord.RichEmbed ()
        .setAuthor ("Creator of CosmicGen") 
        .setDescription ("Credits to StevenMods for  \n coding and creating me !")
        .setFooter ("Thank StevenMods for creating me!")
        .setThumbnail ("https://cdn.discordapp.com/avatars/477616319844581407/0460c1e830717184012a561365be93d0.png?size=128&quot")
        .setColor ("00ff00")
        message.channel.send (embed);
    }
        if (msg.startsWith (prefix + "kick")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("KICK_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been kicked for" + reason);
        mention.send ("You have been kicked because: \n" + reason).then (d_msg => {
            message.guild.member(mention).kick(reason);
        })
            
    }
    if (msg.startsWith (prefix + "ban")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("BAN_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been banned for " + reason);
        mention.send ("You have been banned because: \n" + reason).then (d_msg => {
            message.guild.member(mention).ban(reason);
        })
        message.guild.members("Sorry you were banned you were to much of a asshole!")
        
    }

    if (msg.startsWith (prefix + "crole") && message.member.hasPermission ("MANAGE_ROLES")) {
        messageSplit = message.content.split (" ", 3);
        roleName = messageSplit[1];
        roleColor = messageSplit[2].toUpperCase();
        addRolePerson = message.member;
        if (mention != null) { addRolePerson = message.guild.member(mention);}
        message.guild.createRole ( { 
            name: roleName,
            color: roleColor,
            mentionable: true,
         }).then (role => addRolePerson.addRole(role));
         message.channel.send ("**The Role** " + roleName + " **has been added.**").then (d_msg => d_msg.delete(3000));
         message.delete(3000);
    }

    if(message.content.startsWith(`${prefix}createchannel`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const args = message.content.slice(15);
        message.guild.createChannel(`${args}`).then(channel => {
            channel.setTopic(`This is  channel!`)
        })
    }
    if (msg.startsWith ("!owner")) {
        message.channel.send ("StevenMods is the owner!", {files: [""]});
    }
            if (message.content.startsWith ("!gen") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
            if (message.channel.id !== '619973521480876043') return
            if (message.author.bot || coolguy.has(message.author)) return
            mention.send('**Fortnite Account: **' + freeandclassic[Math.floor(Math.random() * 10)])
            embed = new discord.RichEmbed ()
            .setDescription ("I Have Successfully Sent You The Fortnite Account ! Please Check Your DMs:thumbup:")
            .setColor ("#")
            .setThumbnail ("https://cdn.discordapp.com/avatars/580501722732953611/50a19770036af78e91928b860d5f087d.webp?size=128&quot")
            message.channel.send(embed);
          skanherooo(message.author, 40);
            }

            if (message.content.startsWith ("!pgen") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                if (message.channel.id !== '650891820892553226') return
                if (message.author.bot || coolguy.has(message.author)) return
                mention.send('__**Access Code: **__' + premiumgen[Math.floor(Math.random() * 10)])
                embed = new discord.RichEmbed ()
                .setDescription ("I Have Successfully Sent Your Access Code! Please Check Your DMs:thumbup:")
                .setColor ("#")
                .setThumbnail ("https://cdn.discordapp.com/avatars/650888988571467796/e94968ec37277d1eaa1aaf54874f58ab.png?size=128")
                message.channel.send(embed);
              skanherooo(message.author, 160);
                }
                if (message.content.startsWith ("!fhulu") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                    if (message.channel.id !== '619973499410448386') return
                    if (message.author.bot || coolguy.has(message.author)) return
                    mention.send('Hulu Account:' + hulu[Math.floor(Math.random() * 10)])
                    embed = new discord.RichEmbed ()
                    .setDescription ("I Have Successfully Sent You The Hulu Account ! Please Check Your DMs:thumbup:")
                    .setColor ("#")
                    .setThumbnail ("https://cdn.discordapp.com/avatars/580501722732953611/50a19770036af78e91928b860d5f087d.webp?size=128&quot")
                    message.channel.send(embed);
                  skanherooo(message.author, 40);
                    }

                if (message.content.startsWith ("!fnord") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                    if (message.channel.id !== '619973499410448386') return
                    if (message.author.bot || coolguy.has(message.author)) return
                    mention.send('Nord VPN Account: ' + nordvpn[Math.floor(Math.random() * 10)])
                    embed = new discord.RichEmbed ()
                    .setDescription ("I Have Successfully Sent You The Nord VPN Account ! Please Check Your DMs:thumbsup:")
                    .setThumbnail ("https://cdn.discordapp.com/attachments/534993437313859615/581994919783170049/50a19770036af78e91928b860d5f087d.png")
                    .setColor ("#")
                    message.channel.send(embed);
                  skanherooo(message.author, 60);
                    }
                    
                    if (message.content.startsWith ("!fgen") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                        if (message.channel.id !== '619973499410448386') return
                        if (message.author.bot || coolguy.has(message.author)) return
                        mention.send('Fortnite Account: ' + freeandclassic[Math.floor(Math.random() * 10)])
                        embed = new discord.RichEmbed ()
                        .setDescription ("I Have Successfully Sent You The Fortnite Account ! Please Check Your DMs:thumbsup:")
                        .setThumbnail ("https://cdn.discordapp.com/attachments/534993437313859615/581994919783170049/50a19770036af78e91928b860d5f087d.png")
                        .setColor ("#")
                        message.channel.send(embed);
                      skanherooo(message.author, 40);
                        }

                        if (msg.startsWith("!cmds")) {
                            embed = new discord.RichEmbed ()
                            .setAuthor("Commands")
                            .setDescription("Free Gen: !fgen \n Classic Gen: !gen \n Premium Gen: !pgen")
                            .setFooter("Tell us if you dont like these commands!")
                            .setColor("#FF00FF")
                            message.channel.send(embed);
                        }
                                              
    if (msg.startsWith ("!write")) {
        editedmessage = message.content.slice (6);

        client.msgs [message.author.username] = {
            message: editedmessage
        }
fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("Message written!");
        });

    }
    if (msg.startsWith("!stock")) {
        embed = new discord.RichEmbed ()
        .setAuthor("STOCK")
        .setDescription("There Is Currectly 299 Classic Fortnite Accounts In Stock \n There Is Currently 67 Premuim Fortnite Account In Stock \n There Is Currectly 10000 Free Fortnite Accounts In Stock \n There Is Currectly 560 Supreme Fortnite Accounts In Stock \n There is currently 300 Hulu Accounts \n There is currently 678 Nord VPN Accounts")
        .setFooter("We will be restocking everyday! Not rlly everyday cuz servers ded")
        .setColor("#FF00FF")
        message.channel.send(embed);
    }

    
    if (msg.startsWith ("!get")) {
        let _message = client.msgs[message.author.username].message;
        message.channel.send ("" + _message);
    }

    

    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "nice")) {
              if (!message.member.hasPermission("ADMINISTRATOR"))  return;

              if (!args[1]) {

                     let embed3 = new discord.RichEmbed()
                         .setDescription(":white_check_mark: | Nice")
                           .setColor("#FF00FF")
                              message.channel.send (embed3);
                              message.delete();

                            } else {
                               let embed4 = new discord.RichEmbed()
                                                .setDescription(':white_check_mark: | Hello..')
                                                    .setColor("#99999")

                                                    message.channel.send (embed4);
                                          message.delete();
                }
              }
              
              
});



client.on('message', message => {
    if (message.content.split(' ')[0] == '!dm')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
           member.send(message.content.substr(3));
                                                      message.delete();

                                                    });

                                                  });



client.login(token);
{
    
{
    
}}
