//this should be a function where

const { cwd } = require('node:process');


module.exports = () => {
  process.stdout.write(cwd());
  process.stdout.write('\nprompt > ');
}
