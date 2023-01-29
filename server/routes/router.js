const express = require("express");
const router = express.Router();
const User = require("../model/users");

router.get("/", (req, res) => {
  User.find().exec((err, users) => {
    res.render("index", {
      title: "Home Page",
      users: users,
    });
  });
});

router.get("/add-user", (req, res) => {
  res.render("add_user", { title: "Add User Page" });
});

router.post("/add-user", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  user.save((err) => {
    res.redirect("/");
  });
});

//Update an user route
router.get("/update-user/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) {
      res.redirect("/");
    } else if (user == null) {
      res.redirect("/");
    } else {
      res.render("update_user", {
        title: "Edit User",
        user: user,
      });
    }
  });
});

//Update user route
router.post("/update-user/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    },
    (err, result) => {
      res.redirect("/");
    }
  );
});

//Delete an User
router.get("/delete-user/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, result) => {
    res.redirect("/");
  });
});

module.exports = router;
