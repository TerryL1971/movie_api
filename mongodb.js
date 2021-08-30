/** 
* This is the intial MongoDB items.
* Other movies can be added later.
*/
let movie1 = {
  Title: "Divergent",
  Description: "In a world divided by factions based on virtues, Tris learns she is Divergent and will not fit in.",
  Genre: {
    Name: "Action",
    Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  Director: {
    Name: "Neil Buger",
    Bio: "Neil Norman Burger is an American film and television director, writer, and producer.",
    Birth: "1963"
  },

  ImagePath: "https://www.imdb.com/title/tt1840309/mediaviewer/rm2855260672/",
  Featured: true
}
db.movies.insertOne(movie1)

let movie2 = {
  Title: "Divergent: Insurgent",
  Description: "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart with the help from others on her side.",
  Genre: {
    Name: "Action",
    "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  Director: {
    Name: "Robert Schwentke",
    Bio: "Robert Schwentke is a German film director and screenwriter.",
    Birth: "1968"
  },

  ImagePath: "https://www.imdb.com/title/tt2908446/mediaviewer/rm3605394176/",
  Featured: true
}
db.movies.insertOne(movie2)

let movie3 = {
  Title: "Divergent: Allegiant",
  Description: "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago, to finally discover the shocking truth of the world around them.",
  Genre: {
    Name: "Action",
    Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  Director: {
    Name: "Robert Schwentke",
    Bio: "Robert Schwentke is a German film director and screenwriter.",
    Birth: "1968"
  },

  ImagePath: "https://www.imdb.com/title/tt3410834/mediaviewer/rm4079491328/",
  Featured: true
}
db.movies.insertOne(movie3)

let movie4 = {
  Title: "Stripes",
  Description: "Two friends who are dissatisfied with their jobs decide to join the army for a bit of fun.",
  Genre: {
    Name: "Comedy",
    Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
  },
  Director: {
    Name: "Ivan Reitman",
    Bio: "Ivan Reitman, OC is a Slovak-Canadian film and television director, producer and screenwriter.",
    Birth: "1946"
  },

  ImagePath: "https://www.imdb.com/title/tt0083131/mediaviewer/rm2065750272/",
  Featured: true
}
db.movies.insertOne(movie4)

let movie5 = {
  Title: "Revenge of the Nerds",
  Description: "At Adams College, a group of bullied outcasts and misfits resolve to fight back for their peace and self-respect.",
  Genre: {
    Name: "Comedy",
    Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
  },
  Director: {
    Name: "Jeff Kanew",
    Bio: "Jeffrey Roger Kanew is an American film director, screenwriter, film producer and film editor.",
    Birth: "1944"
  },

  ImagePath: "https://www.imdb.com/title/tt0088000/mediaviewer/rm878498816/",
  Featured: true
}
db.movies.insertOne(movie5)

let movie6 = {
  Title: "Ready Player One",
  Description: "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
  Genre: {
    Name: "Sci-Fi",
    Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition."
  },
  Director: {
    Name: "Steven Spielberg",
    Bio: "Steven Allan Spielberg is an American film director, producer, and screenwriter.",
    Birth: "1946"
  },

  ImagePath: "https://www.imdb.com/title/tt1677720/mediaviewer/rm4286860032/",
  Featured: true
}
db.movies.insertOne(movie6)

let movie7 = {
  Title: "Smokey and the Bandit",
  Description: "The Bandit is hired on to run a tractor-trailer full of beer over state lines, in hot pursuit by a pesky sheriff.",
  Genre: {
    Name: "Action",
    Description: "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  Director: {
    Name: "Hal Needham",
    Bio: "Hal Brett Needham was an American stuntman, film director, actor and writer.",
    Birth: "1931",
    Death: "2013"
  },

  ImagePath: "https://www.imdb.com/title/tt0076729/mediaviewer/rm534644480/",
  Featured: true
}
db.movies.insertOne(movie7)

let movie8 = {
  Title: "Avatar",
  Description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  Genre: {
    Name: "Fantasy",
    Description: "Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap."
  },
  Director: {
    Name: "James Cameron",
    Bio: "James Francis Cameron CC is a Canadian film director, producer, screenwriter, editor, artist, and environmentalist.",
    Birth: "1954"
  },

  ImagePath: "https://www.imdb.com/title/tt0499549/mediaviewer/rm843615744/",
  Featured: true
}
db.movies.insertOne(movie8)

let movie9 = {
  Title: "Tron",
  Description: "A computer hacker is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program.",
  Genre: {
    Name: "Sci-Fi",
    Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition."
  },
  Director: {
    Name: "Steven Lisberger",
    Bio: "Steven M. Lisberger is an American film director, producer and writer.",
    Birth: "1951"
  },

  ImagePath: "https://www.imdb.com/title/tt0084827/mediaviewer/rm3173463040/",
  Featured: true
}
db.movies.insertOne(movie9)

let movie10 = {
  Title: "Tron: Legacy",
  Description: "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his fathers corrupted creation and a unique ally who was born inside the digital world.",
  Genre: {
    Name: "Sci-Fi",
    Description: "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition."
  },
  Director: {
    Name: "Joseph Kosinksi",
    Bio: "Joseph Kosinski (born May 3, 1974) is an American film director best known for his computer graphics and computer-generated imagery (CGI) work, and for his work in action films.",
    Birth: "1974"
  },

  ImagePath: "https://www.imdb.com/title/tt1104001/mediaviewer/rm3240068608/",
  Featured: true
}
db.movies.insertOne(movie10)



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

let user1 = {
  Username: "Terry Lombardi",
  Password: "123456789",
  Email: "terrell.lombardi@gmail.com",
  Birthday: new Date("1971-07-17"),
  FavoriteMovies: [],
}
db.users.insertOne(user1)

let user2 = {
  Username: "Tammy Lombardi",
  Password: "1023456789",
  Email: "tammy.lombardi@gmail.com",
  Birthday: new Date("1971-12-03"),
  FavoriteMovies: [],
}
db.users.insertOne(user2)

let user3 = {
  Username: "Ricardo Ledinger",
  Password: "9658743201",
  Email: "r.ledinger@yahoo.com",
  Birthday: new Date("1982-09-24"),
  FavoriteMovies: [],
}
db.users.insertOne(user3)

let user4 = {
  Username: "Gunther Lisle",
  Password: "1a2s3d4f",
  Email: "gunther.lisle@gmail.com",
  Birthday: new Date("1962-06-18"),
  FavoriteMovies: [],
}
db.users.insertOne(user4)

let user5 = {
  Username: "Elena Lisle",
  Password: "1y1x2c3v",
  Email: "elena.lisle@gmail.com",
  Birthday: new Date("1979-04-25"),
  FavoriteMovies: [],
}
db.users.insertOne(user5)

let user6 = {
  Username: "Nick Howard",
  Password: "howard123",
  Email: "nick.howard@yahoo.com",
  Birthday: new Date("1951-02-14"),
  FavoriteMovies: [],
}
db.users.insertOne(user6)

let user7 = {
  Username: "Sunsan Howard",
  Password: "howard987",
  Email: "susan.howard@yahoo.com",
  Birthday: new Date("1951-08-06"),
  FavoriteMovies: [],
}
db.users.insertOne(user7)



FavoriteMovies: {
  FavoriteMovieID: movie1 = {
  "Title":"Divergent",
  "Description": "In a world divided by factions based on virtues, Tris learns she is Divergent and will not fit in.",
  "Genre": {
    "Name": "Action",
    "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  "Director": {
    "Name": "Neil Buger",
    "Bio": "Neil Norman Burger is an American film and television director, writer, and producer.",
    "Birth": "1963"
  },

  "ImagePath": "https://www.imdb.com/title/tt1840309/mediaviewer/rm2855260672/",



  FavoriteMovieID: movie2 = {
  "Title":"Divergent: Insurgent",
  "Description": "Beatrice Prior must confront her inner demons and continue her fight against a powerful alliance which threatens to tear her society apart with the help from others on her side.",
  "Genre": {
    "Name": "Action",
    "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  "Director": {
    "Name": "Robert Schwentke",
    "Bio": "Robert Schwentke is a German film director and screenwriter.",
    "Birth": "1968"
  },

  "ImagePath": "https://www.imdb.com/title/tt2908446/mediaviewer/rm3605394176/",



  FavoriteMovieID: movie3 = {
  "Title":"Divergent: Allegiant",
  "Description": "After the earth-shattering revelations of Insurgent, Tris must escape with Four beyond the wall that encircles Chicago, to finally discover the shocking truth of the world around them.",
  "Genre": {
    "Name": "Action",
    "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  "Director": {
    "Name": "Robert Schwentke",
    "Bio": "Robert Schwentke is a German film director and screenwriter.",
    "Birth": "1968"
  },

  "ImagePath": "https://www.imdb.com/title/tt3410834/mediaviewer/rm4079491328/",



  FavoriteMovieID: movie4 = {
  "Title":"Stripes",
  "Description": "Two friends who are dissatisfied with their jobs decide to join the army for a bit of fun.",
  "Genre": {
    "Name": "Comdey",
    "Description": "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
  },
  "Director": {
    "Name": "Ivan Reitman",
    "Bio": "Ivan Reitman, OC is a Slovak-Canadian film and television director, producer and screenwriter.",
    "Birth": "1946"
  },

  "ImagePath": "https://www.imdb.com/title/tt0083131/mediaviewer/rm2065750272/",



  FavoriteMovieID: movie5 = {
  "Title":"Revenge of the Nerds",
  "Description": "At Adams College, a group of bullied outcasts and misfits resolve to fight back for their peace and self-respect.",
  "Genre": {
    "Name": "Comdey",
    "Description": "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
  },
  "Director": {
    "Name": "Jeff Kanew",
    "Bio": "Jeffrey Roger Kanew is an American film director, screenwriter, film producer and film editor.",
    "Birth": "1944"
  },

  "ImagePath": "https://www.imdb.com/title/tt0088000/mediaviewer/rm878498816/",



  FavoriteMovieID: movie6 = {
  "Title":"Ready Player One",
  "Description": "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
  "Genre": {
    "Name": "Sci-Fi",
    "Description": "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition."
  },
  "Director": {
    "Name": "Steven Spielberg",
    "Bio": "Steven Allan Spielberg is an American film director, producer, and screenwriter.",
    "Birth": "1946"
  },

  "ImagePath": "https://www.imdb.com/title/tt1677720/mediaviewer/rm4286860032/",



  FavoriteMovieID: movie7 = {
  "Title":"Smokey and the Bandit",
  "Description": "The Bandit is hired on to run a tractor-trailer full of beer over state lines, in hot pursuit by a pesky sheriff.",
  "Genre": {
    "Name": "Action",
    "Description": "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases."
  },
  "Director": {
    "Name": "Hal Needham",
    "Bio": "Hal Brett Needham was an American stuntman, film director, actor and writer.",
    "Birth": "1931",
    "Death": "2013"
  },

  "ImagePath": "https://www.imdb.com/title/tt0076729/mediaviewer/rm534644480/",



  FavoriteMovieID: movie8 = {
  "Title":"Avatar",
  "Description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
  "Genre": {
    "Name": "Fantasy",
    "Description": "Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap."
  },
  "Director": {
    "Name": "James Cameron",
    "Bio": "James Francis Cameron CC is a Canadian film director, producer, screenwriter, editor, artist, and environmentalist.",
    "Birth": "1954"
  },

  "ImagePath": "https://www.imdb.com/title/tt0499549/mediaviewer/rm843615744/",



  FavoriteMovieID: movie9 = {
  "Title":"Tron",
  "Description": "A computer hacker is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program.",
  "Genre": {
    "Name": "Sci-Fi",
    "Description": "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition."
  },
  "Director": {
    "Name": "Steven Lisberger",
    "Bio": "Steven M. Lisberger is an American film director, producer and writer.",
    "Birth": "1951"
  },

  "ImagePath": "https://www.imdb.com/title/tt0084827/mediaviewer/rm3173463040/",



  FavoriteMovieID: movie10 = {
  "Title":"Tron: Legacy",
  "Description": "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his fathers corrupted creation and a unique ally who was born inside the digital world.",
  "Genre": {
    "Name": "Sci-Fi",
    "Description": "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition."
  },
  "Director": {
    "Name": "Joseph Kosinksi",
    "Bio": "Joseph Kosinski (born May 3, 1974) is an American film director best known for his computer graphics and computer-generated imagery (CGI) work, and for his work in action films.",
    "Birth": "1974"
  },

  "ImagePath": "https://www.imdb.com/title/tt1104001/mediaviewer/rm3240068608/",
}