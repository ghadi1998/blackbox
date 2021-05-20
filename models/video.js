const mongoose = require("mongoose");

const Video = mongoose.model(
  "Video",
  new mongoose.Schema({
    mimetype: String,
    filename: String,
    chunkSize: String,
    md5: String,
    uploadDate: Date,
    contentType: String,
  })
);

module.exports = Video;
