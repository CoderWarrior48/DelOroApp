const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/book', (req, res) => {
//   const book = req.body;

//   // Output the book to the console for debugging
//   console.log(pages);
//   books.push(pages);

//   res.send('Book is added to the database');
// });

data = [
  {
   path: '/',
   content: {
    headerText: 'H1 Heading',
    paragraphs: [' p text 1 ', ' p text 2 '],
  }
  },
  {
    path: '/about',
    content: {
     headerText: 'About',
     paragraphs: [' This is the about page: ', ' 123823651023 '],
   }
   },
   {
    path: '/resources',
    content: {
     headerText: 'Resources',
     cards: [
       {
       header: 'Aeries Parent Portal Online Gradebook', 
       content: `The Parent Portal is an online service that will allow students and parents to view grades, assignments, and attendance.  
       Click here to access portal: Aeries Parent Portal.
       
       If you don't have an active portal account, look for an email the beginning of August to get started. 
       
       If you don't receive an email or for assistance in logging in, email or call Torri Baggaley: tbaggaley@puhsd.k12.ca.us at Del Oro (916) 652-7243 ext. 1012 
       
       Check out this video that will show you how to use the Portal to complete the Data Confirmation Process
       
       Subscribe to Weekly Progress Emails that contain up to date student attendance and gradebook information. Click here for directions.`
      },
      ]
   }
   },
]

data.map(getRequest)

function getRequest(info) {
  app.get(info.path, (req, res) => {
    res.json(info.content);
  });
}


app.listen(port, () =>
  console.log(`DelOroApp server listening on port ${port}`)
);
