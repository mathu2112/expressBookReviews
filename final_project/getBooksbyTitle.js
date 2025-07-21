
const axios = require('axios');

const title = 'The Divine Comedy'; // Replace with the title you want to test


function testWithPromises() {
  axios.get(`http://localhost:5000/title/${encodeURIComponent(title)}`)
    .then(response => {
      console.log("Promise-based call:");
      console.log('Books found:', response.data);
    })
    .catch(error => {
      if (error.response) {
        console.error('Error:', error.response.status, error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    });
}

// Using async/await
async function testWithAsyncAwait() {
  try {
    const response = await axios.get(`http://localhost:5000/title/${encodeURIComponent(title)}`);
    console.log("\nAsync/await call:");
    console.log('Books found:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.status, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Run both tests
testWithPromises();
testWithAsyncAwait();
