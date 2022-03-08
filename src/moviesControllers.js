const {movies} = require('./db');

exports.getMovies = (req, res) => {

  const { id } = req.query;

  if (!id) {
    return res.json(movies);
  }

  const movie = movies.find(movie => movie.id === +id);
  console.log(id)

  res.json(movie)
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