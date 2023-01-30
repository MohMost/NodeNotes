//global object

console.log(__dirname)//the path for the directory
console.log(__filename)//the path for the file

//modules

const bros = require('./1-data')
console.log(bros)

// deconstructing
const {arr, ages} = require('./1-data')
console.log(arr, ages)

//os
const os = require('os')
console.log(os.platform(), os.homedir())
