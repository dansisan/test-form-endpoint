const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Test endpoint to receive form data
app.post('/test-form', (req, res) => {
    console.log('Form data received:', req.body);
    res.json({ message: 'Form submission successful', data: req.body });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

