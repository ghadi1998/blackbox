var express = require("express");
var path = require("path");
const mongoose = require("mongoose")
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const crypto = require('crypto')//to generate file name
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')


var uploadRoutes = require('./routes/uploadRoutes');


var app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.use(cors());


app.use('/', uploadRoutes);


const mongoURI = "mongodb://localhost:27017/code_challenge";
const conn = mongoose.createConnection(mongoURI);


module.exports = app;
