const express = require('express');
const app = express();

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({path:"backend/config/config.env" });
}
//using the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//importing the routes
const post = require("./routes/post");
const user = require("./routes/user");

//using the routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports = app;