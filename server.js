const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser= require('body-parser')

let PORT = process.env.PORT || 4000

mongoose.connect('mongodb://app-user:app-user@ds231205.mlab.com:31205/heroku_m4fcgnqv', {
  useMongoClient:true
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.listen(PORT)
console.log('Listening on ' + PORT)

let Todo = mongoose.model('Todo',{
  name : String,
  text : String
})

app.get ('/api/todos', (req, res) =>{
  Todo.find((err, todos) =>{
    if (err)
      res.send(err)

    res.json(todos);      
  })
})

// create todo and send back all todos after creation
app.post('/api/todos', (req, res) =>{

  // create a todo
  Todo.create({
    name: req.body.name,
    text : req.body.text,
    done : false
  }, (err, todo) =>{
    if (err)
      res.send(err);

    //get and return all todos after creation
    Todo.find((err, todos) =>{
      if (err)
        res.send(err)
      res.json(todos);
    })
  })
})

app.get('*', (req, res) =>{
  res.sendfile('./public/index.html')
})

/*
var mongoURL = 'mongodb://app-user:app-user@ds231205.mlab.com:31205/heroku_m4fcgnqv';
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect(mongoURL, (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(PORT, () => {
      console.log('listening on '+ PORT)
    })
  
}) 



  app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
  })


  app.set('view engine', 'ejs')

  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.log(err)
      // renders index.ejs
      res.render('index.ejs', {quotes: result})
    })
  })

  app.get('/about', (req, res) =>{
    res.render('about.ejs')
  })
  */