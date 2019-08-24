const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./passport");
const session = require("express-session");
const http = require("http").createServer(3005);
const io = require("socket.io")(http);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV) {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    var directory;
    if (process.env.NODE_ENV) {
        directory = "build";
    } else {
        directory = "public";
    }

    res.sendFile(path.join(__dirname, `./client/${directory}/index.html`));

});
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userlist");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//socket.io code

io.on("connection", function (socket) {
    console.log("connected to socket io");
});
