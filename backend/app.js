const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
// const commentRoutes = require('./routes/comments'); // Add this line
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", postRoutes);
app.use("/api", commentRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

module.exports = app;
