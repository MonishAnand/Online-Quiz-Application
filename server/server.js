const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
app.use("/api/users", usersRoute);

const examsRoute = require("./routes/examsRoute");
app.use("/api/users", examsRoute);



const port = process.env.PORT || 5000;

const path = require("path");
__dirname = path.resolve();

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});