//NOTE: {} is an object and [] is an array

const BookInfo = require('./models/schema');
const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require ('body-parser');
const app = express();
const mongoose = require('mongoose');
// const schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
// const mongo = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static("views"));

// "SchemaTime" is the name of the database just created in mongoose.connect code that is written below here
// Remember to cap the first letter of the variable to indicate that it is a constructor (i.e. Don't do bookInfo, but do BookInfo)
// mongoose.connect('mongodb://localhost:27017/SchemaTime', function (err, db){
//   const bookcollection = db.collection('books');
//   console.log(bookcollection);
//   console.log(err);
// });

mongoose.connect('mongodb://localhost:27017/SchemaTime');

  app.get('/', function(req, res){
    BookInfo.find()
    .then(function (literature){
      res.render('index.mustache', {
        booklisting: literature,
      });
    });
  });

  app.post('/formAdd', function(req, res){
    let addbookName = req.body.add_bookName;
    let addbookAuthor = req.body.add_bookAuthor;
    let addbookSeries = req.body.add_bookSeries;
    let addbookSeriesNum = req.body.add_bookSeriesNum;
    let addbookGenre = req.body.add_bookGenre;
    let addbookDescription = req.body.add_bookDescription;
    let addbookCover = req.body.add_bookCover;

    BookInfo.create({
      bookName: addbookName,
      bookAuthor: addbookAuthor,
      bookDetails:{
        bookSeries: addbookSeries,
        bookSeriesNum: addbookSeriesNum, },
      bookGenre: addbookGenre,
      bookDescription: addbookDescription,
      bookCover: addbookCover
      })
      .then(function (err, book) {
        console.log(err);
        res.redirect('/');
    });
  });

  app.post('/formUpdate', function(req, res){
    let updatebookName = req.body.update_bookName;
    let updatebookAuthor = req.body.update_bookAuthor;
    let updatebookSeries = req.body.update_bookSeries;
    let updatebookSeriesNum = req.body.update_bookSeriesNum;
    let updatebookGenre = req.body.update_bookGenre;
    let updatebookDescription = req.body.update_bookDescription;
    let updatebookCover = req.body.update_bookCover;

  /////////Screwed up my code...////////////////
  //   BookInfo.updateOne({bookAuthor: updatebookAuthor},
  //     {$push: {
  //     bookName: updatebookName,
  //     bookAuthor: updatebookAuthor,
  //     bookDetails:{
  //       bookSeries: updatebookSeries,
  //       bookSeriesNum: updatebookSeriesNum, },
  //     bookGenre: updatebookGenre,
  //     bookDescription: updatebookDescription,
  //     bookCover: updatebookCover
  //   }})
  //     .then(function (err, book) {
  //       console.log(err);
  //       res.redirect('/');
  //     });
  // });

  /////////This one is out////////////////////
  // BookInfo.update(updatebookAuthor,{
  //   bookName: updatebookName,
  //   bookAuthor: updatebookAuthor,
  //   bookDetails:{
  //     bookSeries: updatebookSeries,
  //     bookSeriesNum: updatebookSeriesNum, },
  //   bookGenre: updatebookGenre,
  //   bookDescription: updatebookDescription,
  //   bookCover: updatebookCover
  // })
  //   .then(function (err, book) {
  //     console.log(err);
  //     res.redirect('/');
  //   });

  /////////This didn't work either...///////////
  // BookInfo.updateOne({bookAuthor: updatebookAuthor},
  //   {$push: {bookName: updatebookName,
  //     bookDetails:{
  //       bookSeries: updatebookSeries,
  //       bookSeriesNum: updatebookSeriesNum, },
  //     bookGenre: updatebookGenre,
  //     bookDescription: updatebookDescription,
  //     bookCover: updatebookCover
  //   }})
  //     .then(function (err, book) {
  //       console.log(err);
  //       res.redirect('/');
  //     });

});

  app.post('/formDelete', function(req, res){
    let deletebookName = req.body.delete_bookName;

    BookInfo.deleteOne({
      bookName: deletebookName,
    })
      .then(function (err, book) {
        console.log(err);
        res.redirect('/');
      });
  });

  app.listen (3000, function(){
    console.log('I am so totally alive!');
  });
