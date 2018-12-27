const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const validatePostInput = require("../../validation/post");

// @route GET api/posts
// @desc  Test post route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "this is posts" }));

// @route GET api/posts/:id
// @desc  Route to get sinle post by id
// @access Public

router.get("/:id", (req, res) => {
  console.log(req.params);

  Post.findById(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(404).json({ error: "No post" });
      }
      if (post) {
        res.json(post);
      }
    })
    .catch(err => console.log(err));
});

// @route GET api/posts/all
// @desc  Route to get all posts
// @access Public

router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => {
      res.json(posts);
    });
});

// @route POST api/posts/newpost
// @desc  Route to Create new Post
// @access Private

router.post(
  "/newpost",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //validation first line
    const { errors, isValid } = validatePostInput(req.body);
    console.log(isValid);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    //  create newPost
    const newPost = new Post({
      user: req.user.id,
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar
    });
    newPost.save().then(post => {
      res.json(post);
    });
  }
);

// @route DELETE api/posts/:id
// @desc  Route to Delete Post by Id
// @access Private

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.params.id);

    Post.findOneAndRemove({ _id: req.params.id })
      .then(post => {
        res.json({ success: true });
      })
      .catch(err => res.json(err));
  }
);

module.exports = router;
