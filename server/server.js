const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let pages = {
  headerText: 'H1 Heading',
  paragraphs: [' p text 1 ', ' p text 2 '],
};

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
  const book = req.body;

  // Output the book to the console for debugging
  console.log(pages);
  books.push(pages);

  res.send('Book is added to the database');
});

app.get('/', (req, res) => {
  res.json(pages);
});

app.listen(port, () =>
  console.log(`DelOroApp server listening on port ${port}`)
);
