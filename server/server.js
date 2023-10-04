const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});