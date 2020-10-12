// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
const { title } = require("process");
const db = require("../models");
var router = express.Router();
const Post = require("../models/post")
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  //images route
  app.use(express.static('images'));
  
  // index route loads login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

  // blog route loads blog.html
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // route to home page
  app.get("/home", function(req, res) {
    db.Post.findAll({
    }).then(function(index) {

      //create a new array from the array that is returned from the database
      let newArray = index.map(item => {
        return {
          title: item.title,
          body: item.body,
          image: item.image
        }
      })
   
//create an object and put the array inside of the object
      let testmenu= {
        items: newArray
      };

      //pass object to the specified handle bars files
      res.render("home", testmenu);
    });

  });

  // menu handlebars route.
  app.get("/menu", function(req, res) {
    db.Post.findAll({
    }).then(function(menu) {

      //create a new array from the array that is returned from the database
      let newArray = menu.map(item => {
        return {
          title: item.title,
          body: item.body,
          image: item.image
        }
      })
   
//create an object and put the array inside of the object
      let testmenu= {
        items: newArray
      };

      //pass object to the specified handle bars files
      res.render("dish", testmenu)
    });

  })

  app.get("/orders", function(req, res) {
    db.orders.findAll({
    }).then(function(orders) {

      //create a new array from the array that is returned from the database
      let newArray = orders.map(item => {
        return {
          customerName: item.customerName,
          order: item.order
        }
      })

//create an object and put the array inside of the object
      let testOrder= {
        items: newArray
      };

      //pass object to the specified handle bars files
      res.render("orders", testOrder)
      //res.json(testmenu)
    });

  })

};
