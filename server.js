var express = require('express'); //now we have access to the entire express api

// Create our app
var app = express();

//if i try to update this port's value later, it will fail
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

app.use(express.static('public')); //which folder you wanna use!!!!!

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
