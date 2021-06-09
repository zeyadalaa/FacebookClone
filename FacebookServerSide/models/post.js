const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
