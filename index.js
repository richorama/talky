var flite = require('flite');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var speech;
flite(function(err, s){
  speech = s;
  if(err){
    console.log(err);
    rl.close();
  } else {
    ask();
  }
});

function ask(){
  rl.question("> ", function(text){
    speech.say(text);
    setImmediate(ask);
  });
}
