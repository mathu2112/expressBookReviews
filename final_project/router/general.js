const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  const booksList = JSON.stringify(books, null, 2); // Pretty print JSON
  return res.status(200).send(booksList);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (book) {
    return res.status(200).json(book);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  const matchingBooks = [];

  // Get all ISBN keys
  const bookKeys = Object.keys(books);

  // Iterate and find books with matching author
  for (let key of bookKeys) {
    if (books[key].author === author) {
      matchingBooks.push({ isbn: key, ...books[key] });
    }
  }

  if (matchingBooks.length > 0) {
    return res.status(200).json(matchingBooks);
  } else {
    return res.status(404).json({ message: "Author not found" });
  }
});

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
    try {
      const title = req.params.title;
  
      // Wrap the search in a Promise to simulate async operation
      const matchingBooks = await new Promise((resolve, reject) => {
        const results = [];
        const bookKeys = Object.keys(books);
  
        for (let key of bookKeys) {
          if (books[key].title === title) {
            results.push({ isbn: key, ...books[key] });
          }
        }
  
        resolve(results);
      });
  
      if (matchingBooks.length > 0) {
        return res.status(200).json(matchingBooks);
      } else {
        return res.status(404).json({ message: "Title not found" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  

// Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  const book = books[isbn];

  if (book && book.reviews) {
    return res.status(200).json(book.reviews);
  } else if (book) {
    return res.status(200).json({ message: "No reviews available for this book." });
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = public_users;
