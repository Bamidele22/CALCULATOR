const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post("/",  (req, res) => {
    var bmi_h = parseFloat(req.body.in_weight);
    var bmi_w = parseFloat(req.body.in_height);

    var bmi_Solution = bmi_w / (bmi_h * bmi_h);

    res.send("Your BMI is " + bmi_Solution);
});

app.get("/normalCalculator", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/normalCalculator", (req, res) =>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var answer = num1 + num2;
    res.send("The result is: " + answer);
    // res.send(alert("The result is " + answer));
});

app.get("/contact", (req, res)=> {
    res.send(__dirname + "/contact.html");   
});


app.listen(port, ()=>{
   console.log(`Calculator listening on port ${port}.`);
});


