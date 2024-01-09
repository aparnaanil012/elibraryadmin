// routes/books.js

const express = require('express');
const router = express.Router();
const Book = require('../model/book'); // Assuming your model file is named 'book.js'

// Route to handle adding a new book
router.post('/addbook', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;