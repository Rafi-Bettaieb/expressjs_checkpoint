const express = require('express');
const app = express();
const port = 3000;


const work = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hour = date.getHours();
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 17) {
    next(); 
  } else {
    res.render('outOfWork');
  }
};


app.use(work);

app.use(express.static('css'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/expressjs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/appetizers', (req, res) => {
  res.render('appetizers');
});

app.get('/maincourse', (req, res) => {
  res.render('maincourse');
});

app.get('/desert', (req, res) => {
  res.render('desert');
});

app.get('/reservation', (req, res) => {
  res.render('reservation');
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/contact', (req, res) => {
  res.render('contact');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
