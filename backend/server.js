const express = require("express");
const app = express();
const notes = require("./data/notes");

app.get("/", (req, res) => {
  res.send("Api is running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

app.listen(5000, console.log("Server started on port 5000"));
