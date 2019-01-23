const express = require("express");
const router = express.Router();
const passport = require("passport");
const Profile = require("../../models/Profile");
const Users = require("../../models/User");
//Load Validation

const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");
const validateEducationInput = require("../../validation/education");

// @route GET api/profile
// @desc  Test profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "this is profile" }));

//passport Config strategy from(config/passport.js)
require("../../config/passport")(passport);

// @route GET api/profile/all
// @desc  get all profiles
// @access Public

router.get("/all", (req, res) => {
  Profile.find()
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (profile) {
        res.json(profile);
      } else {
        res.json({ msg: "No profile" });
      }
    })
    .catch(err => res.json(err));
});

// @route GET api/profile/handle/:handle
// @desc  get profile by handle
// @access Public

router.get("/handle/:handle", (req, res) => {
  const errors = {};
  Profile.findOne({ handle: req.params.handle }) //we grab the handle with
    //req.params.handle and try to find it in db
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(404).json({ error: "No profile for this handle" });
      }
    })
    .catch(err => res.status(400).json(err));
});
// @route GET api/profile/user/:user_id
// @desc  get profile by ID
// @access Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id }) //we grab the handle with
    //req.params.handle and try to find it in db
    .populate("user", ["name", "avatar"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "No profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.json(err));
});

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

      return res.status(400).json(errors);
    }
    // // Get fields
    const profileFields = {};
    profileFields.user = req.user.id; //<---logged in user
    if (req.body.handle) profileFields.handle = req.body.handle; //checking if req.body.handle came from form
    if (req.body.handle) profileFields.handle = req.body.handle;

    ///company
    if (req.body.company.length == 0) {
      profileFields.company = "";
    } else {
      profileFields.company = req.body.company;
    }
    //website
    if (req.body.website.length == 0) {
      profileFields.website = "";
    } else {
      profileFields.website = req.body.website;
    }

    ///location
    if (req.body.location.length == 0) {
      profileFields.location = "";
    } else {
      profileFields.location = req.body.location;
    }

    if (req.body.status) profileFields.status = req.body.status;
    //Skills we split into array(cause it came as comma separated value)
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }

    ///bio
    if (req.body.bio.length == 0) {
      profileFields.bio = "";
    } else {
      profileFields.bio = req.body.bio;
    }
    ///GitHub username
    if (req.body.githubusername.length == 0) {
      profileFields.githubusername = "";
    } else {
      profileFields.githubusername = req.body.githubusername;
    }

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

// @route POST api/profile/experience
// @desc  Create/Update user profile with Experience
// @access Private

router.post(
  "/exp",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateExperienceInput(req.body);
    if (!isValid) {
      res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
      .populate("user", ["avatar", "name"])
      .then(profile => {
        //Create Experience Fields
        const newExp = {};
        newExp.title = req.body.title;
        newExp.company = req.body.company;
        newExp.location = req.body.location;
        newExp.from = req.body.from;
        newExp.to = req.body.to;
        newExp.current = req.body.current;
        newExp.description = req.body.description;

        //Add experience to array.We are using unshift() to put in the biggining of array.

        profile.experience.unshift(newExp);
        profile
          .save()
          .then(profile => {
            res.json(profile);
          })
          .catch(err => res.status(400).json(err));
      });
  }
);
// @route POST api/profile/education
// @desc  Create/Update user profile with Education
// @access Private

router.post(
  "/edu",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { isValid, errors } = validateEducationInput(req.body);
    if (!isValid) {
      res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
      .populate("user", ["avatar", "name"])
      .then(profile => {
        //Create Education Fields
        const newEdu = {};
        newEdu.school = req.body.school;
        newEdu.degree = req.body.degree;
        newEdu.fieldofstudy = req.body.fieldofstudy;
        newEdu.from = req.body.from;
        newEdu.to = req.body.to;
        newEdu.current = req.body.current;
        newEdu.description = req.body.description;

        //Add education to array.We are using unshift() to put in the biggining of array.

        profile.education.unshift(newEdu);
        profile
          .save()
          .then(profile => {
            res.json(profile);
          })
          .catch(err => res.status(400).json(err));
      });
  }
);

// @ Route DELETE   api/profile/exp/:exp_id
// @ Desc deletes from profile experience
// @ Access Private

router.delete(
  "/exp/:exp",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("deleting...");

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        //Get remove index
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);
        //Splice out item

        profile.experience.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.json(err));
  }
);
// @ Route DELETE   api/profile/edu/:exp_id
// @ Desc deletes from profile education
// @ Access Private

router.delete(
  "/edu/:edu_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("deleting...");

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        //Get remove index
        const removeIndex = profile.education
          .map(item => item.id)
          .indexOf(req.params.exp_id);
        //Splice out item

        profile.education.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.json(err));
  }
);
// @ Route DELETE   api/profile/delete/:delete_id
// @ Desc deletes Profile and User
// @ Access Private

router.delete(
  "/delete/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      Users.findOneAndRemove({ _id: req.user.id }).then(user => {
        res.json({ success: true });
      });
    });
  }
);
// @ Route DELETE   api/profile/delete/:delete_id
// @ Desc deletes Profile by id
// @ Access Private

router.delete(
  "/delete_profile/:_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id })
      .then(() => {
        res.json({ msg: "Your Profile was successfully deleted." });
      })
      .catch(err => res.status(400).json(err));
  }
);

module.exports = router;
