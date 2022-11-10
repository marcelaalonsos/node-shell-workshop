//log content inside individual file
const fs = require('fs');

module.exports = (filename, done) => {
  fs.readFile(filename, 'utf8', (err, data)=> {
    if (err){
      done("Something went wrong!") ;
    } else {
      done(data)
    }

})
}
