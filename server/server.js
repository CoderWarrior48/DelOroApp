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
    type: 'get',
    content: {
      headerText: 'H1 Heading',
      paragraphs: [' p text 1 ', ' p text 2 '],
    },
  },
  {
    path: '/about',
    type: 'get',
    content: {
      headerText: 'About',
      paragraphs: [' This is the about page: ', ' 123823651023 '],
    },
  },
  {
    path: '/resources',
    type: 'get',
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
       
       Subscribe to Weekly Progress Emails that contain up to date student attendance and gradebook information. Click here for directions.`,
        },
        {
          header: 'Canvas Parent Observer Account',
          content: `Canvas is an online platform many teachers use to host class materials, activities and grade information. If you would like access to your student's Canvas account as a Parent Observer, click here for set-up information. 
      
        If you already have a Parent Observer account, you can log in from this link.
        
        If you have questions about how your student's teacher is using Canvas, please email the teacher.`
        },
      ],
    },
  },
  {
    path: '/accounts',
    type: 'post',
    content: {
      accounts: [
      {user: 'diego', password: '1234'},
      {user: 'dh', password: '6789'}
      ]
    }
  }
];

data.map(Request);

function Request(info) {
  switch(info.type) {

    case 'get':
      app.get(info.path, (req, res) => {
        res.json(info.content);
      });
    case 'post':
      app.post(info.path, (req, res) => {
        console.log('receiving data ...');
        console.log('body is ',req.body);
        console.log(info.content)
        info.content.accounts.push(req.body)
        console.log('Updated accounts:', info.content.accounts);
        res.json(info.content.accounts);
      });

  }
}

  


app.listen(port, () =>
  console.log(`DelOroApp server listening on port ${port}`)
);
