//this should be a function where

const { cwd } = require('node:process');


module.exports = (done) => {
  done(cwd());
}
