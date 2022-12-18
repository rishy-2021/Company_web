const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();
const routes = require("./router/index");
const bodyParser = require("body-parser");

const PORT = 3001;

const dbConnect = require("./dbConnect");
dbConnect.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/cmp", routes);

app.listen(PORT, () => {
  console.log(`Company running on PORT No- ${PORT}`);
});
