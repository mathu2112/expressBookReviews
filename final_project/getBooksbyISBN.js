const axios = require('axios');
const ISBN = ["1","2","3","4","5","6","7","8","9","10"];

// Async/Await version
const getBooksAsync = async () => {
  try {
    for (const isbn of ISBN) {
      const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
      console.log(`Book details for ISBN ${isbn} (async):`);
      console.log(response.data);
    }
  } catch (err) {
    console.log("Error (async):", err.message);
  }
};

// Promise version
const getBooksPromise = () => {
  ISBN.forEach(isbn => {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
      .then(response => {
        console.log(`Book details for ISBN ${isbn} (promise):`);
        console.log(response.data);
      })
      .catch(err => {
        console.log(`Error (promise) for ISBN ${isbn}:`, err.message);
      });
  });
};

getBooksAsync();
getBooksPromise();
