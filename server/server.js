const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Welcome! spiderman-MJ on server side!");
} );

app.get("/register", (req,res) => {
    res.status(200).send("Registration page calling from server side!")
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});