const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes")

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist", {useNewUrlParser: true});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV) {

	console.log("we in production baby");
    app.use(express.static("client/build"));
}

app.use(apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
