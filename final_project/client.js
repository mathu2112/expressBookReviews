const axios = require('axios');

async function getBookList() {
  try {
    const response = await axios.get('http://localhost:5000/');
    console.log("Books available:", response.data);
  } catch (error) {
    console.error("Error fetching books:", error.message);
  }
}

getBookList();
