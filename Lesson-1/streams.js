
const fs = require('fs');
const readStream = fs.createReadStream('./blog3.txt')
const writeStream = fs.createWriteStream('./blog4.txt')
const writeStream2 = fs.createWriteStream('./blog5.txt')

readStream.on('data', (chunk) => {
  console.log("--------* NEW CHUNK *--------")
  console.log(chunk)
  writeStream.write("\nNEW CHUNK\n")
  writeStream.write(chunk)
})
//piping
readStream.pipe(writeStream2)