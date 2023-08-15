const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

  require("dotenv").config({ path: "backend/config/config.env" });

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);

app.use(cors({ origin: "*" }));
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/src/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/src/frontend/build/index.html"));
});

module.exports = app;
