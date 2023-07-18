const commands = require("./commands");


process.stdout.write('prompt > ');
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim();
  let arrData = cmd.split(" ");
  cmd = arrData.shift();
  if(Object.keys(commands).includes(cmd)){
    commands[cmd](arrData.join(" "));
  }
  process.stdout.write('\nprompt > ');
});