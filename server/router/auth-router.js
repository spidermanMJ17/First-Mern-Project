const express = require("express");
const router = express.Router();
/*
router.get("/", (req, res) => {
    res
    .status(200)
    .send("MJ on server with using routers!")
});
*/
//or you can use

router.route("/").get((req, res) => {
    res
    .status(200)
    .send("MJ on server using routers!")
});

router.route("/register").get((req, res) => {
    res
    .status(200)
    .send("MJ on server with registration using routers!")
});

module.exports = router;