const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(express.static('public'));

let topMovies = [
  {
    title: 'Divergent',
    director: 'Neil Burger',
    genre: 'Action',
    year: '2014'
  },
  {
    title: 'Divergent: Insurgent',
    director: 'Robert Schwentke',
    genre: 'Action',
    year: '2015'
  },
  {
    title: 'Divergent: Allegiant',
    director: 'Robert Schwentke',
    genre: 'Action',
    year: '2016' 
  },
  {
    title: 'Stripes',
    director: 'Ivan Reitman',
    genre: 'Comedy',
    year: '1981'
  },
  {
    title: 'Revenge of the Nerds',
    director: 'Jeff Kanew',
    genre: 'Comedy',
    year: '1984'
  },
  {
    title: 'Ready Player One',
    director: 'Steven Spielberg',
    genre: 'Sci-Fi',
    year: '2018' 
  },
   {
    title: 'Smokey and the Bandit',
    director: 'Hal Needham',
    genre: 'Action',
    year: '1977' 
  },
  {
    title: 'Avatar',
    director: 'James Cameron',
    genre: 'Fantasy',
    year: '2009' 
  },
  {
    title: 'Tron',
    director: 'Steven Lisberger',
    genre: 'Sci-Fi',
    year: '1982'
  },
  {
    title: 'Tron: Legacy',
    director: 'Joseph Kosinski',
    genre: '',
    year: '2010' 
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movies app!');
});

app.get('/documentation', (req, res) => {                  
  res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
