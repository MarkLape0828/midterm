const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Your Full Name' });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
