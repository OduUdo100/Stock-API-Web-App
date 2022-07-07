const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const postRoutes = require ("./routes/posts");

const app = express();

//mongoose connection to the database of MongoDB Atlas!
mongoose.connect("mongodb+srv://Andi:YbamZpIh6EK7APuQ@cluster0.xyyse.mongodb.net/Posts?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Uses CORS. To allow differet servers to interact with each other
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin",'*');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postRoutes);

module.exports = app;
