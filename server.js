const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const items = require("./routes/api/items")

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Config
const db = require("./config/keys").mongoURI;

// const client = new MongoClient(db, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("item").collection("items");
//   // perform actions on the collection object
//   client.close();
// });

// Connnect to DB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Router
const router = require("./routes/api/items");
app.use("/api/items", router);

// Get testing
app.get("/", (req, res) => {
    console.log("Success");
    res.send("Hello");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server statrted on port ${port}`)
});