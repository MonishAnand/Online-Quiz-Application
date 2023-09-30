const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const dbConfig = require('./config/dbConfig')
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);

});