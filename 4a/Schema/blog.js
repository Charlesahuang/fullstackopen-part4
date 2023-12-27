const mongoose = require('mongoose');

//4.2 4.1
const blogSchema = new mongoose.Schema({
  title: { type: String, },
  author: { type: String,},
  url: { type: String,},
  likes: { type: String }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
