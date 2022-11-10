//Output a prompt
process.stdout.write('prompt > ');

// const { fs } = require('node:fs');
// const { cwd } = require('node:process');

const pwd = require("./pwd.js");
const fs = require("./ls.js");
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
    pwd();
  } else if (cmd === 'ls') {
    fs();
  } else {

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
  }
});


// const { cwd } = require('node:process');
// console.log(`Current directory: ${cwd()}`);
