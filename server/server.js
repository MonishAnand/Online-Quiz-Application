const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
app.use(express.json())
const dbConfig = require('./config/dbConfig')

const userRoute = require("./routes/userRoute");

app.use("/api/users",userRoute)
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);

});