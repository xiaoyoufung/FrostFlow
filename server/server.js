const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:5173'],
}
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const port = process.env.PORT;

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({"fruits": ["apple", "banana", "orange"]});
});

app.listen(port, () => {
    console.log('Server running on port 8080');
});