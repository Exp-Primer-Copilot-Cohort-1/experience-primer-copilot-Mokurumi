// Create web server to handle comments

// Imports
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Set up route for comments
app.get("/comments", (req, res) => {
  // Read comments from file
  fs.readFile("comments.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    } else {
      // Parse comments
      const comments = JSON.parse(data.toString());

      // Return comments
      res.status(200).json(comments);
    }
  });
});

// Set up route for comments
app.post("/comments", (req, res) => {
  // Read comments from file
  fs.readFile("comments.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Something went wrong");
    } else {
      // Parse comments
      const comments = JSON.parse(data.toString());

      // Add new comment
      comments.push(req.body);

      // Write comments to file
      fs.writeFile("comments.json", JSON.stringify(comments), (err) => {
        if (err) {
          console.log(err);
          res.status(500).send("Something went wrong");
        } else {
          // Return comments
          res.status(200).json(comments);
        }
      });
    }
  });
});
