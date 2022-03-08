const express = require('express');

exports.addMiddlewares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/movies", (req, res, next) => {
    console.log(`Running middleware`)
    next()
  })
}