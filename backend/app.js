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

// encrypting the password using bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

app.post("/signup", async function (req, res) {
  console.log("Signup called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phone = req.body.phone;

  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);

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
    res.status(200).send("User created successfully");
  } catch (err) {
    res.status(400).send("Failed to create user");
    console.error("Error creating user: ", err);
  }
});

app.post("/login", async function (req, res) {
  console.log("Login called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  const { username, password } = req.body;

  console.log("Validating user");
  try {
    const user = await User.findOne({
      username: username,
    });

    if (!user) {
      return res.status(400).send("User not found");
    } else {
      console.log(user);

      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

      if (isPasswordValid) {
        res.status(200).send("Login successful");
        console.log("User authenticated successfully");
      } else {
        console.error("Invalid password");
        res.status(400).send("Invalid password");
      }
    }
  } catch (err) {
    console.error("Error during login: ", err);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
