const router = require('express').Router()

const { getMovies, postMovie, putMovieById } = require('./moviesControllers');

router.get("/", getMovies)

router.post('/', postMovie)

router.put('/:id', putMovieById)

module.exports = router;