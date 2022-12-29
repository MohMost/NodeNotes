//global object

console.log(__dirname)
console.log(__filename)

//modules

const bros = require('./data')
console.log(bros)

// deconstructing
const {arr, ages} = require('./data')
console.log(arr, ages)

//os
const os = require('os')
console.log(os.platform(), os.homedir())