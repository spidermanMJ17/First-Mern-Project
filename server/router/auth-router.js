const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");

/*
router.get("/", (req, res) => {
    res
    .status(200)
    .send("MJ on server with using routers!")
});
*/
//or you can use

/*
router.route("/").get((req, res) => {
    res
    .status(200)
    .send("MJ on server using routers!")
});
*/
router.route("/").get(authcontroller.home);

router.route("/register").get(authcontroller.register);

module.exports = router;