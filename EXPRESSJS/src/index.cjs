// const express = require("express");
// const path = require('path')
// const app = express();
// const hbs = require("hbs")

// const staticPath = path.join(__dirname, "../public")
// const templatePath = path.join(__dirname, "../templates/views")
// const partialPath = path.join(__dirname, "../templates/partials")
// // app.use(express.static(staticPath))

// //to set the view engine
// app.set("view engine", "hbs")
// app.set("views", templatePath)
// hbs.registerPartials(partialPath)

// //template engine route
// app.get("/", (req, res) => {
//   res.render("index", {
//    me:" saurabh"
//   })
// })
// app.get("/about", (req, res) => {
//   res.render("about")
// })

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// // app.get("/about", (req, res) => {
// //   res.send("About Page");
// // });

// // app.get("/temp", (req, res) => {
// //   res.send([
// //     {
// //       id: 1,
// //       name: "saurabh",
// //     },
// //     {
// //       id: 1,
// //       name: "saurabh ambesange",
// //     },
// //   ]);
// // });

// app.listen(8000, () => {
//   console.log("connected to port 8000");
// });

//-------------------------------------------------------PRACTICE-------------------------------------------------------------//

const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  res.render("index", {me: "saurabh",});
});

app.get("/about", (req, res) => {
  res.render("about");
}); 

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about/*", (req, res) => {
  res.render("error", {
    ERROR: " about page not found"
  });
});

app.get("*", (req, res) => {
  res.render("error", {
    ERROR: "page not found"
  });
});


app.get("/", (req, res) => {
  res.send("trying again");
});

app.listen(8000, () => {
  console.log("connected to port 8000");
});
