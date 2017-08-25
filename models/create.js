const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Create an instance of your model using the schema that you created from biblio.js
// let book = new BookInfo({
//   bookName: 'Crown of Midnight',
//   bookAuthor: 'Sarah J. Maas',
//   bookDetails: {
//     bookPages: 418,
//     bookLanguage: 'English',
//     bookISBN: 11619630621,
//     bookPublishedDate: 'August 27, 2013',
//     bookPublisher: 'Bloomsbury USA Childrens'},
//   bookSeries: 'Throne of Glass Series',
//   bookSeriesNum: 2,
//   bookGenre: 'Young Adult',
//   bookDescription: 'From the throne of glass rules a king with a fist of iron and a soul as black as pitch. Assassin Celaena Sardothien won a brutal contest to become his Champion. Yet Celaena is far from loyal to the crown. She hides her secret vigilantly; she knows that the man she serves is bent on evil.'});
  // book.save()
  //   .then(function() {})
  //   .catch (function (err){
  //     console.log(err);
  //   })

  //this console.log will show in the terminal of what the schema you created looks like.
  // console.log(book.toObject());

// This is another way to create AND save the book information into the database called //SchemaTime.
function handleSuccess(){
  console.log("It works like a charm!");
}

function handleError (err){
  console.log(err);
}

  BookInfo.create({
    bookName: 'Qualify',
    bookAuthor: 'Vera Nazarian',
    bookDetails: {
      bookPages: 600,
      bookLanguage: 'English',
      bookISBN: 1607621339,
      bookPublishedDate: 'December 20, 2014',
      bookPublisher: 'Norilana Books'},
    bookSeries: 'The Atlantis Grail',
    bookSeriesNum: 1,
    bookGenre: 'Science Fiction',
    bookDescription: 'Surprise. You Qualify or you Die.',
    bookCover: 'https://images.gr-assets.com/books/1399528788l/21845122.jpg'})
      .then (handleSuccess)
      .catch (handleError);
