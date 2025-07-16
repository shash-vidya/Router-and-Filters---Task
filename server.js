const express = require('express');
const app = express();
const PORT = 4000;

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Logging middleware (optional for tracking)
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// ✅ Import and use the books router
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Library System server running on port ${PORT}`);
});
