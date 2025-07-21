const axios = require('axios');

const authors = ["Chinua Achebe","Hans Christian Andersen","Dante Alighieri", "Jane Austen",  "Honor\u00e9 de Balzac", "Samuel Beckett"];

// Async/Await version
const getBooksByAuthorsAsync = async () => {
  try {
    for (const author of authors) {
      const response = await axios.get(`http://localhost:5000/author/${encodeURIComponent(author)}`);
      console.log(`Books by ${author} (async):`);
      console.log(response.data);
    }
  } catch (err) {
    console.log("Error fetching books by author (async):", err.message);
  }
};
const getBooksByAuthorsPromise = () => {
  authors.forEach(author => {
    axios.get(`http://localhost:5000/author/${encodeURIComponent(author)}`)
      .then(response => {
        console.log(`Books by ${author} (promise):`);
        console.log(response.data);
      })
      .catch(err => {
        console.log(`Error fetching books by author ${author} (promise):`, err.message);
      });
  });
};
getBooksByAuthorsAsync();
getBooksByAuthorsPromise();
