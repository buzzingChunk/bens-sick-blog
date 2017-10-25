const express = require('express');
const bodyParser= require('body-parser');
const app = express();
var PORT = 4000;

var mongoURL = 'mongodb://heroku_m4fcgnqv:heroku_m4fcgnqv@ds231205.mlab.com:31205/heroku_m4fcgnqv';
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect(mongoURL, (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(PORT, () => {
      console.log('listening on '+PORT)
    })
  
})

  app.use(bodyParser.urlencoded({extended: true}))



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
  


 
  
