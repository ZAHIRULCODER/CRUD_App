const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");

//app object is used to configure the Express application, define routes, and handle requests and responses
const app = express();

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

//mongoDB connection
connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// set view engine (This allows the app to render dynamic HTML pages based on data from the server)
app.set("view engine", "ejs");

//load routers
app.use("/", require("./server/routes/router"));
app.use("/add-user", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


