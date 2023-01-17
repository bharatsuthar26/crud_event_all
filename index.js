const express = require("express");
const app = express();
const env = require("dotenv").config();
const PORT = 5000;
const path = require("path");
const cors=require('cors');
const mongoose = require("mongoose");
app.use("/static", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
mongoose.set("strictQuery", true);
const connectDB = require("./src/utils/db");

connectDB();

const userRoute = require("./src/routes/loginrouter");
app.use("/", userRoute);

const eventRoute=require("./src/routes/eventRouter");
app.use("/event",eventRoute);

app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is run on ${PORT}`);
});
