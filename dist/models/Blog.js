"use strict";

var mongoose = require('mongoose');
var blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('Blog', blogSchema);