const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')// important for all APIs! removes the, 'blocked by CORS policy' 
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const adminRoutes = require('./routes/admin')


const { application } = require("express");


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Cors
app.use(cors());
//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);


//Use flash messages for errors, info, ect...
app.use(flash());


//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use('/admin', adminRoutes)

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Squishmallow api online!");
});