const express = require("express");
const router = express.Router();
const passport = require("passport");
const Profile = require("../../models/Profile");
const Users = require("../../models/User");
//Load Validation

const validateProfileInput = require("../../validation/profile");

// @route GET api/profile
// @desc  Test profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "this is profile" }));

//passport Config strategy from(config/passport.js)
require("../../config/passport")(passport);

// @route GET api/profile/handle/:handle
// @desc  get profile by handle
// @access Public

router.get("/handle/:handle", (req, res) => {});

// @route GET api/profile/current
// @desc  return credentials from token
// @access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/profile/update
// @desc  Create/Update user profile
// @access Private

router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateProfileInput(req.body);

    // //Check Validation
    if (!isValid) {
      //Return any errors with 400 status
      console.log(isValid);

      return res.status(400).json(errors);
    }
    // // Get fields
    const profileFields = {};
    profileFields.user = req.user.id; //<---logged in user
    if (req.body.handle) profileFields.handle = req.body.handle; //checking if req.body.handle came from form
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.status) profileFields.status = req.body.status;
    //Skills we split into array(cause it came as comma separated value)
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    //Social has its own object
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.instagram) profileFields.instagram = req.body.instagram;
    // //For Update Profile We must check first if profile must be
    // //updated or create new one
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //Update
        Profile.findOneAndUpdate(
          {
            user: req.user.id //find to what user make updates
          },
          { $set: profileFields },
          {
            new: true //true to return modified document
          }
        ).then(profile => {
          res.json(profile);
        }); // its all for update
      } else {
        // Create
        //Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "This handle already exists";
            res.status(400).json(errors);
          }
          //save  profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

module.exports = router;
