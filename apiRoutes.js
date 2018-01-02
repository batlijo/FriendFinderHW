var path = require("path");


app.get("/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "../api/friends.js"));
});

// If no matching route is found default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../api/friends.js"));
});
};
