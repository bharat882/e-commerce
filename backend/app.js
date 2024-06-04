const mongoose = require("mongoose");
const User = require("./models/userModel");
const UserCredentials = require("./models/userCredentialsModel");
const Product = require("./models/productModel");
const Category = require("./models/categoryModel");
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
  var imageUrl = req.body.imageUrl;

  try {
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      username: username,
      email: email,
      passwordHash: passwordHash,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      imageUrl: imageUrl,
    });

    const newUserCredentials = new UserCredentials({
      username: username,
      passwordHash: passwordHash,
    });

    await newUser.save();
    await newUserCredentials.save();
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
    const userCredetials = await UserCredentials.findOne({
      username: username,
    });

    if (!UserCredentials) {
      return res.status(400).send("Invalid Login Credentials!");
    } else {
      const isPasswordValid = await bcrypt.compare(
        password,
        userCredetials.passwordHash
      );

      if (isPasswordValid) {
        const user = await User.findOne({
          username: username,
        });
        res.status(200).send(user);
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

app.post("/product", async function (req, res) {
  console.log("Post Product called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  const {
    sku,
    name,
    description,
    unitPrice,
    imageUrl,
    active,
    unitsInStock,
    categoryId,
    productId,
    featured,
  } = req.body;

  try {
    const newProduct = new Product({
      productId: productId,
      sku: sku,
      name: name,
      description: description,
      unitPrice: unitPrice,
      imageUrl: imageUrl,
      active: active,
      unitsInStock: unitsInStock,
      categoryId: categoryId,
      featured: featured,
    });
    await newProduct.save();
    console.log("New product created successfully");
    res.status(200).send("New product created successfully");
  } catch (err) {
    console.log("Error creating new product: " + err);
    res.status(400).send("Failed to create product");
  }
});

app.post("/category", async function (req, res) {
  console.log("Post Category called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  const { categoryId, name, description } = req.body;

  try {
    const newCategory = new Category({
      categoryId: categoryId,
      name: name,
      description: description,
    });

    await newCategory.save();
    console.log("New category created successfully");
    res.status(200).send("Category created successfully");
  } catch (err) {
    console.log("Error creating category: " + err);
    res.status(400).send("Failed to create category");
  }
});
// FETCH CATEGORIES
app.get("/category", async function (req, res) {
  console.log("Get All-Category called");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);

  try {
    var categories = new Array();

    categories = await Category.find();
    console.log("Categories fetched successfully");
    res.status(200).send(categories);
  } catch (err) {
    console.log("Error fetching categories: " + err);
    res.status(400).send("Failed to fetch categories");
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
