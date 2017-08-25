const mongoose = require('mongoose');

//NOTE: {} is an object and [] is an array

const biblioSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    bookDetails: [{
      bookSeries: { type: String, lowercase: true },
      bookSeriesNum: Number,
    }],
    bookGenre: { type: String, default: 'Unfiled'},
    bookDescription: { type: String, default: 'What is the story about? Need information here.'},
    bookCover: { type: String, default: 'http://tanyasood.com/wp-content/uploads/2016/12/coverplaceholder-267x400.png'},
});

// The variable name and the string are almost always the same.
// The variable name can be whatever you want.
/// The string is the name of the collection these items will be stored in.
const Book = mongoose.model('Book', biblioSchema);

module.exports = Book;
