// Deleted a copy of calc.js file 

var fs = require('fs')

fs.unlink('calc_dup.js', function(err){
    console.log('Deleted')
})