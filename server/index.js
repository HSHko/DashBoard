const express = require("express"); // import express from 'express';
const app = express();
const cors = require("cors");
const auth = require("./auth");

const PORT = 5000;

// app.use(cors());
app.use(express.json()); // req.body
app.listen(PORT, () => console.log(`APP Listening at PORT: ${PORT}`));

app.get("/todos", async (req, res) => {
  try {
    const trgt = await auth.query("SELECT * FROM todos");
    res.json(trgt.rows);
  } catch (err) {
    console.error(error.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const trgt = await auth.query("SELECT * FROM todos WHERE id = $1", [id]);
    res.json(trgt.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const trgt = await auth.query("INSERT INTO todos (description) VALUES ($1) ", [description]);
    res.json(trgt);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const trgt = await auth.query("UPDATE todos SET description = $1 WHERE id = $2", [
      description,
      id,
    ]);
    res.json(trgt);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const trgt = await auth.query("DELETE FROM todos WHERE id = $1", [id]);
    res.json(trgt);
  } catch (error) {}
});
