const express = require("express");
const DBconnect = require("./config/connectDB");
var cors = require("cors");

const app = express();
app.use(cors());
DBconnect();
//Middlewares
app.use(express.json());
app.use("/api/contact", require("./routes/contacts"));

app.listen(5000, (err) => {
  if (err) console.log(err);
  console.log("the server is listening on port 5000");
});
