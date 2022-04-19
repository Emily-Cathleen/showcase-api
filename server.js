const express = require('express');
const monthlyData = require('./data.js');
const app = express();
const cors = require('cors');

app.use(cors({
  allowedOrigins: ['localhost:3000']
}));

app.set('port', process.env.PORT || 3001);
//app.set sets the app to run on a specific port.
//process.env.PORT is setting it to run on a specific external environment, AKA: Heroku/Surge

app.locals.bob = 'Mycology Horoscope';
//app.locals is vasically an object wrapper provided by Express. But it will always come out as an object.
//if I want to store anything, if I wrap it
app.get('/', (request, response) => {
  response.send('Welcome to mycology horoscope');
});
// 7-9 is the handler. Handling the end points and viewing the API in Heroku.
// You are writing what you want the end points on your API to be.
// when i have a get request - the first arg '/' is the URL I want it to be. for instance "/home"
// second arg is callback function that takes a request and response -  this is how I will write each one.
// inside curlys: is response.send once there is a get requwst to the app for this URL, send back this response -  in this case its a random string.


app.locals.horoscopes = monthlyData;

app.get('/v1/monthlyData', (request, response) => {
  const horoscopes = app.locals.bob
  response.json({horoscopes})
  // response.send(app.locals.bob)
});


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
//standard anytime setting up a server I need this.
//gives you a notification of what port your server is running on
