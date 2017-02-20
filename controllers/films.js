//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = express.Router();

var filmList = films;

filmRouter.get("/", function(req, res){
  res.json(filmList);
});

filmRouter.get("/:id", function(req, res){
  res.json(filmList[req.params.id]);
});

filmRouter.post("/", function(req, res){
  filmList.push(new Film(req.body));
  res.json(filmList);
});

filmRouter.put("/:id", function(req, res){
  var newDetails = req.body;
  var filmToUpdate = filmList[req.params.id]
  for(var detail in newDetails){
    filmToUpdate[detail] = newDetails[detail];
  }
  res.json(filmList);
});

filmRouter.delete("/:id", function(req, res){
  filmList.splice(req.params.id, 1);
  res.json(filmList);
});

filmRouter.post("/:id", function(req, res){
  var reviewedFilm = filmList[req.params.id];
  var review = new Review(req.body);
  reviewedFilm.addReview(review);
  res.json(filmList);
});

module.exports = filmRouter;
