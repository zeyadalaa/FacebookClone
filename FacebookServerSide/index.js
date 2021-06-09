const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");

const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const connectDB = require("./connection");
const u = mongoose.model("Users");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { uploadFile, getFileStream } = require("./s3");

const app = express();
// let people = [];

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Serve the static files from the React app
app.use(express.static(path.join("../Facebook/build")));

app.use(logger("dev"));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

//Connect to DB
connectDB();

// Decoding incoming requests from post
app.use(express.urlencoded({ extended: true }));

// Handle GET requests to /api route
// app.get("/", (req, res) => {
//   User.find({ email: "zoz" })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/register", (req, res) => {
//   res.render("Register");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.get("/posts", (req, res) => {
//   res.render("posts");
// });

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../facebook-clone/build', 'index.html'));
// });

// Dealing with post requests
app.post("/signUp", (req, res) => {
  console.log(req.body);
  User.find({ email: req.body.email })
    .then((result) => {
      if (result.length) res.send("this email was used before");
      else {
        const user = new User({
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dob: req.body.dob,
        });
        user
          .save()
          .then((results) => {
            //res.render('posts')
            // res.send(results._id);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/login", (req, res) => {
  // res.send("tamam")
  // console.log(req.body.email);
  // console.log(req.body.password);
  User.find({ email: req.body.email })
    .then((result) => {
      if (result.length && result[0]["password"] === req.body.password) {
        let data = { result, success: true };
        res.send(data);
        // console.log("donnnnnnnnnnnne");
      } else res.send("wrong password or email");
    })
    .catch((err) => {
      console.log(err);
    });
});

// images

app.get("/images/:key", (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const readStream = getFileStream(key);
  // console.log(readStream.key);
  readStream.pipe(res);
});

// create middleware function (upload.single)
app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log("in images")
  console.log(file);
  const result = await uploadFile(file);

  await unlinkFile(file.path);
  // console.log(result);
  const description = req.body.description;

  res.send({ imagePath: `/images/${result.Key}` });
//   res.send("test");
// console.log("req.body")
// let data = req.body
// console.log(data)

});

app.post("/posts", async (req, res) => {
    console.log("in post")
    console.log(req.body)
  if (req.body.act === "update") {
    console.log(req.body.act);
    console.log(req.body.post);
    Post.findOneAndUpdate(
      { _id: "60be513e0d938746c49a7bba" },
      { content: req.body.post },
      { new: true },
      (err, data) => {
        if (err) console.log(err);
        else console.log(data);
      }
    );
  } else if (req.body.act === "delete") {
    console.log(req.body.act);
    Post.deleteOne({ _id: "60be88aa82ce2139e05ad236" }, (err) => {
      console.log(err);
    });
  } else if (req.body.act === "post") {
    console.log("in in post ")

    const post = new Post({
      
        content: req.body.content,
        firstName:req.body.firstName,
        lastName: req.body.lastName, 
        img: req.body.img,

    });
    post
      .save()
      .then((results) => {
        res.send(results.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

app.get("/allposts", async (req, res) => {
  console.log("yes");
  Post.find()
    .then((result) => {
      res.send(result);
      User.find()
    })
    .catch((err) => {
      console.log(err);
    });
});

// app.post("/signUp", function (req, res) {
//   console.log(req.body);
//   const newPeople = {
//     firsName: req.body.firsName,
//     lastName: req.body.lastName,
//     DOP: req.body.DOP,
//     email: req.body.email,
//   };

//   people.push(newPeople);
//   console.log(newPeople);
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
