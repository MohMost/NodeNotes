//global object

console.log(__dirname)
console.log(__filename)

//modules

const bros = require('./1-data')
console.log(bros)

// deconstructing
const {arr, ages} = require('./1-data')
console.log(arr, ages)

//os
const os = require('os')
console.log(os.platform(), os.homedir())