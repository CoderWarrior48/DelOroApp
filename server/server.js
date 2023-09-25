const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let accounts = [
  {
    user:"diego"
  },
  {
    user:"dawson"
  },
  {
    user: "DH"
  }
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
  const book = req.body;

  // Output the book to the console for debugging
  console.log(accounts);
  books.push(accounts);

  res.send('Book is added to the database');
});

app.get('/', (req, res) => {
  res.json(accounts);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));