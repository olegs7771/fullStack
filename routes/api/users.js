const express = require("express");
const router = express.Router();

const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //creates token
const passport = require("passport"); //verifys token

//Load Validation with Validator
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Bring in model User
const User = require("../../models/User");
//Bring in secretKey
const secretKey = require("../../config/keys");

// @route GET api/users
// @desc  Test users route
// @access Public
router.get("/", passport.authenticate("jwt", { session: false }), (req, res) =>
  res.json(req.user)
);

// @route POST api/users/register
// @desc  Registaer newUser
// @access Public

router.post("/register", (req, res) => {
  //validation with validateRegisterInput (first line of validation)
  const { errors } = validateRegisterInput(req.body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  //Checks for existence of  email
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Such Email Already Exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password1,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => res.json(err));
        });
      });
    }
  });
});

//passport Config strategy from(config/passport.js)
require("../../config/passport")(passport);

// @route POST api/users/login
// @desc  Login newUser / return JWT Token
// @access Public

router.post("/login", (req, res) => {
  // // //validation with validateRegisterInput (first line of validation)
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }

  //receive body from user request
  const email = req.body.email;
  const password = req.body.password;
  //find email in db
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ email: "No Such User" });

    //compare password (password vs user.password)
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //creating of the jwt token: 1.data,2.sicret,3.expiration time
        //create data payload for jwt
        const data = {
          id: user.id,
          name: user.name,
          avatar: user.avatar
        };

        //create jwt token
        jwt.sign(
          data,
          secretKey.secretOrkey,
          { expiresIn: "12h" },
          (err, token) => {
            res.json({
              success: true,
              token: "bearer " + token
            });
          }
        );
      } else {
        res.json({ msg: "Password Incorrect" });
      }
    });
  });
});

// @route GET api/users/current
// @desc  Sending Token / return passport.authenticate()return Credentials
// @access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar
    });
  }
);

module.exports = router;
