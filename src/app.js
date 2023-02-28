const express = require('express');
const methodOverride = require('method-override')

// Env
require('dotenv').config();

// DB
require('./config/db.config');

const app = express();

// Set up method override
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Seperate Route
const main_route = require('./routes/main.route');
app.use('/', main_route);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Jalan di http://localhost:${PORT}`)
})