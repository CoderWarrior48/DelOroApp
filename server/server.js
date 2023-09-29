const express = require('express');
const  passport  =  require('passport');
const  LocalStrategy  =  require('passport-local').Strategy;
const app = new express();

app.post('/authenticate', (req, res) => {
    res.status(200).json({"statusCode" : 200 ,"message" : "hello"});
});

app.listen(3000, () => {
    console.log('App running at 3000')
})

const auth = () => {
  return (req, res, next) => {
      next()
  }
}

app.post('/authenticate', auth() , (req, res) => {
  res.status(200).json({"statusCode" : 200 ,"message" : "hello"});
});

passport.use(new LocalStrategy(
  function(username, password, done) {
      if(username === "admin" && password === "admin"){
          return done(null, username);
      } else {
          return done("unauthorized access", false);
      }
  }
));

//https://dev.to/jscrambler/how-to-build-authentication-in-angular-using-node-and-passport-3igg