//home
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("MJ on server side with using controller!");
    } catch (error) {
        console.log(error);
    }
}

//registration
const register = async (req, res) => {
    try {
        res.status(200).send("MJ with registration using controller!");
    } catch (error) {
        res.satus(400).send({msg: "Page not found!"});
    }
}

module.exports = {home, register};