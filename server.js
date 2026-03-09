const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});