const express = require('express')

//express app
const app = express()

//register view engine

app.set ('view engine', 'ejs')

//listening for request 
app.listen(3000)

app.get('/', (req, res)=>{
  
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

   res.render('index', {title: 'home', blogs})

})

app.get('/about', (req, res)=>{
  
  res.render('about', {title: 'about'})

})

app.get('/blogs/create', (req, res)=>{
  res.render('create', {title: 'create a blog'})
})

//404 error

app.use((req ,res)=>{

  res.status(404).render('404',{title: '404'})

})