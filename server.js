const express = require ("express"); 
const app = express ();

const bodyParser = require("body-parser");
app.use (bodyParser.json() )
app.use (bodyParser.urlencoded({extended: true}))

// //create a default route(404)(7)
// app.use("*", (req, res) => {
//     res.status(404).send("<h1>404, page not found</h1>");
// })//

app.post("/login", (req, res) => {
    console.log(req.body);
    res.send(`username is ${req.body.username} and password is ${req.body.password}`);

    if(req.body.username === "Esther" && req.body.password === "xty"){
        res.send("login successful")
    }else{
        res.send("password or username incorrect")
    }
    console.log(req.body)
    
});






app.listen (3000, () => console.log("server running at port 3000"));

