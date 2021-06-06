const express = require('express'),
  morgan = require('morgan');
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(morgan('common'));
app.use(express.static('public'));

let movies = [
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
    genre: 'Sci-Fi',
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
  res.json(movies);
});

// Gets the data about a single movie, by title

app.get('/movies/:title', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.title === req.params.title }));
});

// Gets the data about a single movie, by Director

app.get('/movies/directors/:director', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.director === req.params.director }));
});

// Gets the data about a single movie, by Genre

app.get('/movies/genres/:genre', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.genre === req.params.genre }));
});

app.get('/movies/years/:year', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.year === req.params.year }));
});


// Adds data for a new movie to our list of movies.
app.post('/movies', (req, res) => {
  let newMovie = req.body;

  if (!newMovie.title) {
    const message = 'Missing title in request body';
    res.status(400).send(message);
  } else {
    movies.push(newMovie);
    res.status(201).send(newMovie);
  }
});

// Deletes a movie from our list by Title
app.delete('/movies/:title', (req, res) => {
  let movie = movies.find((movie) => { return movie.title === req.params.title });

  if (movie) {
    movies = movies.filter((obj) => { return obj.title !== req.params.title });
    res.status(201).send('movie ' + req.params.title + ' was deleted.');
  }
});

// Update the "genre" of a movie by movie title/director genre
app.put('/movies/:title/:director/:genre', (req, res) => {
  let movie = movies.find((movie) => { return movie.title === req.params.title });

  if (movie) {
    movie.classes[req.params.class] = parseInt(req.params.genre);
    res.status(201).send('movie ' + req.params.title + ' was assigned a genre of ' + req.params.genre + ' in ' + req.params.class);
  } else {
    res.status(404).send('movie with the title ' + req.params.title + ' was not found.');
  }
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
