const mongoose = require('mongoose');
const Models = require('./models.js');
const passport = require('passport');
require('./passport');

const { check, validationResult } = require('express-validator');

const Movies = Models.Movie;
const Users = Models.User;
const Genres = Models.Genre;
const Directors = Models.Director;


mongoose.connect( process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const bodyParser = require('body-parser');

const express = require('express'),
  morgan = require('morgan');
const app = express();

app.use(bodyParser.json());

let auth = require('./auth')(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(morgan('common'));
app.use(express.static('public'));


const cors = require('cors');
app.use(cors());

/* rest of code goes here*/

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

// re-insert this code in line 111 after 3.6 app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
 app.get('', { session: false }), (req, res) => {
  Movies.find()
    .then((movies) => {
      res.status(201).json(movies);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    }); 
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

//Add a user
app.post('/users',
  // Validation logic here for request
  //you can either use a chain of methods like .not().isEmpty()
  //which means "opposite of isEmpty" in plain english "is not empty"
  //or use .isLength({min: 5}) which means
  //minimum value of 5 characters are only allowed
  [
    check('Username', 'Username is required').isLength({min: 5}),
    check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid').isEmail()
  ], (req, res) => {

  // check the validation object for errors
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOne({ Username: req.body.Username }) // Search to see if a user with the requested username already exists
      .then((user) => {
        if (user) {
          //If the user is found, send a response that it already exists
          return res.status(400).send(req.body.Username + ' already exists');
        } else {
          Users
            .create({
              Username: req.body.Username,
              Password: hashedPassword,
              Email: req.body.Email,
              Birthday: req.body.Birthday
            })
            .then((user) => { res.status(201).json(user) })
            .catch((error) => {
              console.error(error);
              res.status(500).send('Error: ' + error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
      });
  });

// Add a movie to a user's list of favorites
app.post('/users/:Username/Movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
     $push: { FavoriteMovies: req.params.MovieID }
   },
   { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});

// Delete a user by username
app.delete('/users/:Username', (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// listen for requests
const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0',() => {
 console.log('Listening on Port ' + port);
});
