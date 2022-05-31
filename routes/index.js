const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const commentRouter = require("./Comment");

router.post("/", (req, res, next) => {
  res.send();
});

router.get("/", (req, res, next) => {
  res.send("Welcome to the Stack Overflow");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use("/comment", commentRouter);

module.exports = router;
