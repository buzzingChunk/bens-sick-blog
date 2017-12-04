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

let Schema = mongoose.Schema
let someModelSchema = new Schema({
  name : String,
  text : String,
  imgUrl : String
})

let Todo = mongoose.model('Todo', someModelSchema)

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
    imgUrl : req.body.imgUrl,

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

app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});