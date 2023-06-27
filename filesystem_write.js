// If write function is used on a existing file then it wipes the old content and replaces it with new one, but if we want to have this we need to go for append

var fs = require('fs')

fs.writeFile('calc_write.js', 'console.log("data")', function(err){
    console.log("Data Saved")

})