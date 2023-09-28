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

accounts = []

data = [
  {
    path: '/',
    type: 'get',
    body: {
      headerText: 'H1 Heading',
      paragraphs: [' p text 1 ', ' p text 2 '],
    },
  },
  {
    path: '/about',
    type: 'get',
    body: {
      headerText: 'About',
      paragraphs: [' This is the about page: ', ' 123823651023 '],
    },
  },
  {
    path: '/resources',
    type: 'get',
    body: {
      headerText: 'Resources',
      cards: [
        {
          header: 'Aeries Parent Portal Online Gradebook',
          body: `The Parent Portal is an online service that will allow students and parents to view grades, assignments, and attendance.  
       Click here to access portal: Aeries Parent Portal.
       
       If you don't have an active portal account, look for an email the beginning of August to get started. 
       
       If you don't receive an email or for assistance in logging in, email or call Torri Baggaley: tbaggaley@puhsd.k12.ca.us at Del Oro (916) 652-7243 ext. 1012 
       
       Check out this video that will show you how to use the Portal to complete the Data Confirmation Process
       
       Subscribe to Weekly Progress Emails that contain up to date student attendance and gradebook fieldrmation. Click here for directions.`,
        },
        {
          header: 'Canvas Parent Observer Account',
          body: `Canvas is an online platform many teachers use to host class materials, activities and grade fieldrmation. If you would like access to your student's Canvas account as a Parent Observer, click here for set-up fieldrmation. 
      
        If you already have a Parent Observer account, you can log in from this link.
        
        If you have questions about how your student's teacher is using Canvas, please email the teacher.`,
        },
      ],
    },
  },
  {
    path: '/create-account',
    type: 'post',
    body: {
      accounts
    },
  },
  {
    path: '/search-accounts',
    type: 'search',
    body: {
      accounts
    },
  },
];

data.map(Request);

function Request(field) {
  switch (field.type) {
    case 'get':
      app.get(field.path, (req, res) => {
        res.json(field.body);
        console.log('GETting data...')
      });
    case 'post':
      app.post(field.path, (req, res) => {
        console.log('POSTing data...');
        console.log('Data: ', req.body);
        field.body.accounts.push(req.body);
        console.log('\nUpdated accounts:\n', field.body.accounts);
        console.log("\nAccounts including 'd':\n",
        field.body.accounts.filter(function(user){ return user.username.includes('d')})
        );
        
        res.json(field.body.accounts);
      });
    case 'search':
      app.get(field.path, (req, res) => {
        console.log('GETting data...')
        console.log('SEARCHing data...')
        isAccount = field.body.accounts.filter(function(user){ return user.username == req.username});

        if (isAccount == true) {
          isPassword = field.body.accounts.filter(function(user){ return user.password == req.password});
          console.log("Account exists:TRUE password:",isPassword)

          if (isPassword == null) {
            console.log("Password incorrect, returning FALSE")
            return false
          }
          else {
            console.log("Password matches, returning TRUE")
            return true
          }
        }
        else {
              
        console.log('No term found, returning FALSE')
        return false
        }      
    });
  }
}

app.listen(port, () =>
  console.log(`DelOroApp server listening on port ${port}`)
);
