const fs = require('fs');

const http = require('http');
const _ = require('lodash');//after requiring lodash modules we can use any mthodes from the file (node_modules)


const server = http.createServer((req, res)=>{
  console.log(req.url, req.method)

  res.setHeader('Content-Type', 'text/html')
  /*res.write('<h1>im a title</h1>')
  res.write('<p>im a paragraph</p>')*/
  let path = './pages/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode=200
      break
    case '/about':
      path += 'about.html'
      res.statusCode=200
      break
    case '/about-me':
      res.statusCode=301
      res.setHeader('Location', '/about')
      res.end()
      break
    default:
      path += '404.html'
      res.statusCode=404
      break
    }
  fs.readFile(path, (err, data)=>{
    if(err){
      console.log(err)
      res.end()
    }else {
      res.write(data)
      res.end()
    }
  })
})


server.listen(3000, 'localhost', ()=>{
  console.log('listening for request on port 3000')
})