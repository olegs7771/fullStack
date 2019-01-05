const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
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

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          //Check for post owner

          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }
          post
            .remove()
            .then(() => res.json({ success: true }))
            .catch(err => res.status(404).json({ msg: "Post not found" }));
        });
      })
      .catch(err => console.log(err));
  }
);

// @route POST api/posts/dislike/:id
// @desc  Remove like
// @access Private

router.post(
  "/dislike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          //we gonna check if user already liked this post
          //we gonna use filter method
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "You have not liked this post" });
          }

          //Get remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);
          post.likes.splice(removeIndex, 1);
          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.json({ msg: "Profile not found" }));
  }
);

// @route POST api/posts/like/:id
// @desc  Route to Add Like to post (id is of the post)
// @access Private

router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })

      .then(profile => {
        Post.findById(req.params.id).then(post => {
          //we gonna check if user already liked this post
          //we gonna use filter method
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User Already Liked this post" });
          }

          //Add user id to likes array
          post.likes.unshift({ user: req.user.id, name: req.user.name });
          //Save it to db
          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.json({ msg: "Profile not found" }));
  }
);
// @route POST api/posts/comment/:id   (this is post id)
// @desc  Route to Add comment to post
// @access Private

router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id).then(post => {
      const newComment = {
        text: req.body.text,
        name: req.user.id,
        avatar: req.user.avatar
      };
      console.log(newComment.text);

      if (post) {
        post.comments.unshift(newComment);
        post.save().then(comment => {
          res.json(comment);
        });
      }
    });
  }
);
// @route POST api/posts/uncomment/:id   (this is post id)
// @desc  Route removes comment form post
// @access Private

router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id).then(post => {
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res.status(401).json({ nocomment: "Comment does not exists" });
        }

        //Get removeIndex
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);
        //Splice comment out from array

        post.comments.splice(removeIndex, 1);
        post.save().then(post => res.json(post));

        const commentCount = post.comments.length;
        console.log("there are :" + commentCount);
      });
    });
  }
);

module.exports = router;
