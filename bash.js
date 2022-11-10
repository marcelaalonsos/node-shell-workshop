//Output a prompt
process.stdout.write('prompt > ');

// const { fs } = require('node:fs');
// const { cwd } = require('node:process');

const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js")
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if(cmd === 'pwd'){
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd.slice(0,4) === 'cat ') {
    cat(cmd.slice(4), done)
  }


  else {

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};


// const { cwd } = require('node:process');
// console.log(`Current directory: ${cwd()}`);
