const mongoose = require('mongoose');
const express = require('express');
const Models = require('./models.js');
const passport = require('passport');
require('./passport');


const { check, validationResult } = require('express-validator');

const bodyParser = require('body-parser');

morgan = require('morgan');
const app = express();

app.use(bodyParser.json());

mongoose.connect( process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const cors = require('cors');
app.use(cors());

let auth = require('./auth')(app);

const Movies = Models.Movie;
const Users = Models.User;
const Genres = Models.Genre;
const Directors = Models.Director;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use(morgan('common'));
app.use(express.static('public'));


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
 // Return all movies
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.find()
  .then((movies) => {
    res.status(201).json(movies);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

// gets data about a specific movie
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ Title : req.params.Title }).then((movie) => {
    res.status(201).json(movie);
  }).catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err)
  });
});

// Gets the data about a single movie, by Genre
app.get('/movies/genres/:genre', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.genre === req.params.genre }));
});

// return data about genre
app.get('/movies/genres/genre/:Name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Genres.findOne({ 'Genre.Name' : req.params.Name })
  .then((genre) => {
    res.status(201).json(genre.Genre);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

// get all directors
app.get('/movies/directors', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.find({ Name : req.params.Name}).then((director) => {
    res.status(201).json(director.Director);
  }).catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err)
  });
});

// Gets the data about a single movie, by Director
app.get('/movies/directors/:director', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.director === req.params.director }));
});

// get director by name
app.get('/movies/directors/:name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({'Director.Name' : req.params.name})
  .then(director => res.status(201).json(director.Director))
  .catch(err => res.status(500).send('Error: ' + err));
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
// Register a new user
app.post('/users', [
check('Username', 'Check - Username contains non-alphanumeric characters - not allowed.').isAlphanumeric(),
check('Username', 'Username is required').isLength({min: 5}),
check('Password', 'Password is required').not().isEmpty(),
check('Email', 'Email does not appear to be valid').isEmail()
], 
(req, res) => {
  // check validation object for errors
  let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

  let hashedPassword = Users.hashPassword(req.body.Password);
  Users.findOne({ Username: req.body.Username })
  // search to see if user with requested username already exists
  .then((user) => {
    if (user) {
      // if user is found, send a response that it already exists
      return res.status(400).send(req.body.Username + 'already exists');
    } else {
      Users.create({
        Username: req.body.Username,
        Password: hashedPassword,
        Email: req.body.Email,
        Birthday: req.body.Birthday
      })
      .then((user) => { 
        res.status(201).json(user);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
      })
    }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send('Error: ' + error);
  });
});

// get all users
app.get('/users', 
// passport.authenticate('jwt', { session: false }), 
(req, res) => {
  Users.find()
  .then((users) => {
    res.status(201).json(users);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

// Get a user by username
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  // to "read" a user by username, pass an object that contains that criteria ("username")
  Users.findOne({ Username: req.params.Username })
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + err);
  });
});

// update existing user info
// [
// check('Username', 'Username contains non-alphanumeric characters - not allowed.').isAlphanumeric(),
// check('Username', 'Username is required').isLength({min: 5}),
// check('Password', 'Password is required').not().isEmpty(),
// check('Email', 'Email does not appear to be valid').isEmail()],

app.put('/users/:Username', passport.authenticate('jwt', { session: false }),  (req, res) => {
  // check validation object for errors
  let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    };

    // Hash the submitted password
    let hashedPassword = Users.hashPassword(req.body.Password);
    let updateObject = {}
    if (req.body.Username) {
      updateObject.Username = req.body.Username
    }
    if (req.body.Password) {
      updateObject.Password = req.body.Password
    }
    if (req.body.Email) {
      updateObject.Email = req.body.Email
    }
    if (req.body.Birthday) {
      updateObject.Birthday = req.body.Birthday
    }

  Users.findOneAndUpdate({ Username: req.params.Username }, { $set: updateObject },
  { new: true }, // This line makes sure that the updated document is returned
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});


// Add movie to user's favorites list
app.post('/users/:Username/Movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    // adds movie onto end of array of FavoriteMovies
    $push: { FavoriteMovies: req.params.MovieID }
  },
  { new: true },
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
  });
});


// Removes movie from favorites list
app.delete('/users/:Username/Movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $pull: { FavoriteMovies: req.params.MovieID }
  },
  { new: true },
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + err);
    } else {
      res.json(updatedUser);
    }
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
