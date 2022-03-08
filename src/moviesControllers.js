const {movies} = require('./db');

exports.getMovies = (req, res) => {
  res.json(movies)
}

exports.postMovie = (req, res) => {
  try {
    const { title, popularity } = req.body;
    
    movies.pus({
      id: movies.length + 1,
      title,
      popularity
    })
    
    res.status(201).json(movies)
  } catch (err) {
    next(err);
  }
}

exports.putMovieById = (req, res) => {
  const { title, popularity } = req.body;
  const { id } = req.params;

  console.log(id)
  
  const newMovies = [...movies];

  for (let movie of newMovies) {
    if (movie.id === +id) {
      movie.title = title
      movie.popularity = popularity
    }
  }
  
  res.json(newMovies)
}