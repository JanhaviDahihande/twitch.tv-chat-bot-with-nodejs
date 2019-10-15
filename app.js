var config = require('./config');
var tmi = require('tmi.js');

var username = "mostnerdybot";

var options = {
    options: {
        debug: true
    },
    connectiom: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: username,
        password: config.MY_KEY
    },
    channels: ["mostnerdybot"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
    if(message === "twitter"){
        client.action("mostnerdybot", "https://twitter.com/i_janhavi");
    }
    else if(message.includes("Hi")){
        client.action("mostnerdybot", "Hello to you too " + user['display-name']);
    }
});

client.on('connected', function(address, port){
    client.action("mostnerdybot", "Hello!");
});