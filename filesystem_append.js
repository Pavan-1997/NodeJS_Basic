var fs = require('fs')

fs.appendFile('calc.js', 'console.log("data")', function(err){
    console.log("Data Saved")

})