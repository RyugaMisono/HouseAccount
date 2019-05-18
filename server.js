const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Config
const db = require("./config/keys").mongoURI;
// });

// Connnect to DB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Router
const router = require("./routes/api/items");
app.use("/api/items", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server statrted on port ${port}`)
});