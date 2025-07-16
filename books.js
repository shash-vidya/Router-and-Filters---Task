const express = require('express');
const router = express.Router();

// Middleware to parse JSON body
router.use(express.json());

// GET /books
router.get('/', (req, res) => {
    console.log("GET request received for /books");
    res.send("Here is the list of books!");
});

// POST /books
router.post('/', (req, res) => {
    console.log("POST request received with data:", req.body);
    res.send("Book has been added!");
});

module.exports = router;
