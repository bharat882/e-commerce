const mongoose = require("mongoose");
const User = require("./models/userModel");

var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
var bodyParser = require("body-parser");
var multer = require("multer");
var login = multer();
app.use(login.array());
app.use(bodyParser.json());
const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.post("/signup", function (req, res) {
  console.log("Signup called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  var username = req.body.username;
  var passwordHash = req.body.password;
  var email = req.body.email;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phone = req.body.phone;

  const createUser = async () => {
    try {
      const newUser = new User({
        username: username,
        email: email,
        passwordHash: passwordHash,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      });

      await newUser.save();
      console.log("User created successfully");
    } catch (err) {
      console.error("Error creating user: ", err);
    }
  };
  createUser();
});

app.post("/login", function (req, res) {
  console.log("Login called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  var username = req.body.username;
  var passwordHash = req.body.password;
  var email = req.body.email;
});

app.listen(port, () => {
  console.log("Server is running");
});
