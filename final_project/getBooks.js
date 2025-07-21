const axios = require('axios');

// Using async-await
const getBooksAsync = async () => {
  try {
    const response = await axios.get('http://localhost:5000/');
    console.log("Book list using async/await:\n", response.data);
  } catch (error) {
    console.error("Error fetching books (async):", error.message);
  }
};

// Using Promise callbacks
const getBooksWithPromise = () => {
  axios.get('http://localhost:5000/')
    .then(response => {
      console.log("Book list using Promise:\n", response.data);
    })
    .catch(error => {
      console.error("Error fetching books (promise):", error.message);
    });
};

// Call both versions
getBooksAsync();
getBooksWithPromise();
