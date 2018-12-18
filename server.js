const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport"); //authantication strategy

//routes imports
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

//Bring in body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB Cofig
const db = require("./config/keys").mongodb;
// Conect to mongoDB

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

//routes
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/profile", profile);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
