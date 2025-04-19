import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'form.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Form Data:', data);

    fetch('http://backend:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(response => response.text())
        .then(result => res.send(result))
        .catch(error => res.send(`Error: ${error}`));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Frontend is running on http://localhost:${PORT}`);
});