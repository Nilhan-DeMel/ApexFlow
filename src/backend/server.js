/**
 * @Meta
 * @Intent Main Express Application Entry Point
 * @Inputs process.env.PORT
 * @Outputs Running HTTP Server
 * @Dependencies express, helmet, cors, dotenv
 */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { helloWorld } = require('./hello');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware Configuration
app.use(helmet());
app.use(cors());

// Health Check Route
app.get('/', (req, res) => {
    res.json({ status: "Active", system: "ApexFlow" });
});

app.get('/api/hello', (req, res) => res.json(helloWorld()));

// Start Server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`ApexFlow Engine running on port ${PORT}`);
    });
}

module.exports = app;
