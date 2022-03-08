const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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
    "GET,POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  }); //A new resources was created. Passed with a 201.
});

app.get('/api/posts', (req, res, next ) => {
  const posts = [
    {
      id: 'asdasdas23',
      title: 'first server',
      content: "this is the first server"
    },
    {
      id: "1231234sdsdas",
      title: "second server",
      content: "this is the second server"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
