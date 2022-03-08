const express = require('express');
const { addMiddlewares } = require('./middlewares');
const moviesRouter = require('./moviesRouter');

const app = express();

// Middlewares
addMiddlewares(app);

app.use("/movies", moviesRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    ok: false
  })
})

app.use((err, req, res, next) => {
  if (res.statusCode === 200) res.status(500);

  res.json({
    ok: false,
    error: err
  })
})


const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(`Server started`)
})

