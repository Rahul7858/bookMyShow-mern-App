const express = require("express");
const app = express();
const cors = require("cors");

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());
app.use(cors());

//import routes
const routes = require("./routes/bookingRoutes");

//mount the API routes
app.use("/api", routes);

//start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get('/', function (res, res) {
  try {
    //get last booking
    res.send("BookMyShow is live!")
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: " Server Error" });
  }
});

