//creating a sever
const http = require('http');

//creating a server

const server = http.createServer((req, res)=>{
  console.log('request made')
})

//listening to a request

server.listen(3000, 'localhost', ()=>{
  console.log('listening for request on port 3000')
})
