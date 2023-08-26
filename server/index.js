const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const findOrCreate = require("mongoose-find-or-create");

app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

UserSchema.plugin(findOrCreate);
const User = new mongoose.model("user", UserSchema);

app.get("/test", (req, res) => {
  res.json("working");
});

//Login User
app.post("/login", async (req, res) => {
  const { name, email } = req.body;
  try {
    User.findOrCreate({ name, email }, (err, result) => {
      if (err) throw err;
      if (!!result) {
        jwt.sign(
          { name: result.name, email: result.email, id: result._id },
          process.env.JWTSECKEY,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json(result);
          }
        );
      }
    });
  } catch (err) {
    res.json(err);
  }
});

//Get profile details
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWTSECKEY, {}, async (err, userData) => {
      if (err) throw err;
      const userDoc = await User.findById(userData.id);
      res.json(userDoc);
    });
  } else {
    res.json(null);
  }
});

//Logout
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.listen(4000, () => {
  console.log("Server has started on port 4000");
});
