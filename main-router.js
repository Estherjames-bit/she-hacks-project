const express = require ("express"); 
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("Hello World!");
// });
// router.get("/colors", (req, res) => {
//     res.send(["red", "blue", "yellow", "pink"]);
// });
// router.get("/fruits", (req, res) => {
//     res.send(["banana", "orange", "pawpaw", "mango"]);
// });

// router.get("/details", (req, res) => {
//     console.log(req.query);
//     res.send(
//         `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submitted`
//     );
// });

//a route for login
router.get("/login", (req, res) => {
    console.log(req.query);
    res.send(`username is ${req.query.Username} and password is ${req.query.password}`);
});

