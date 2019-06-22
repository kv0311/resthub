// FileName: index.js
// Import express
let express = require('express')
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
app.post('/a',function(req,res){
     Post.create(req.body)
})
app.use('/api', apiRoutes)

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: true
  }));
  app.use(bodyParser.json());
  // Connect to Mongoose and set connection variable
  mongoose.connect('mongodb://localhost/resthub');
  var db = mongoose.connection;