const express = require('express')

//express app
const app = express()

//listening for request 
app.listen(3000)

app.get('/', (req, res)=>{
  
   //res.send('<p>yo BABY!!!</p>')

   res.sendFile('./pages/index.html', { root : __dirname})

})

app.get('/about', (req, res)=>{
  
  res.sendFile('./pages/about.html', { root : __dirname})

})

//redirecting

app.get('/about-us', (req, res)=>{
  res.redirect('/about')
})

//404 error

app.use((req ,res)=>{

  res.status(404).sendFile('./pages/404.html', { root : __dirname})

})