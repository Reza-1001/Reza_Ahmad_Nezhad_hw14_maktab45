const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const data = require("../public/data");

router.get("/", (req, res) => {
  let search = req.query.search;
  if (search) {
    var results = [];
    let s;
    for (var i = 0; i < data.length; i++) {
      for (let key in data[i]["discription"]) {
        s+=data[i]["discription"][key];
        }
        if (s.indexOf(search) != -1) {
          results.push(data[i]);
          s="";
      }
    }
    res.render(path.join(__dirname, "../views/pages/home.ejs"), {
      data: results,
    });
  } else {
    res.render(path.join(__dirname, "../views/pages/home.ejs"), {
      data: data,
    });
  }
});


router.get("/contact", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/contact.ejs"), {
    data: data,
  });
});


router.get("/about", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/about.ejs"), { data: data });
});


router.get("/product:id", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/product.ejs"), {
    data: data,
    id: req.params.id,
  });
});




module.exports = router;
