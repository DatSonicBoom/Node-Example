console.log(1+1);

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ "Author": "Catherine" });
});

app.listen(3000);