const express = require("express");
const router = express.Router();

// @route GET api/posts
// @desc  Test post route
// @access Public

router.get("/", (req, res) => res.json({ msg: "this is posts" }));

module.exports = router;
