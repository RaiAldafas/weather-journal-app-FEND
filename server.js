// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express')
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 4000;

const server = app.listen(port, listening)

function listening() {
    console.log('it is running');
    console.log(`port is: ${port}`);
}
// Setup Server

app.get('/getData', function (req, res) {
    res.send(projectData)
})


app.post('/addData', addData)

function addData(req, res) {
    projectData["temp"] = req.body.temp;
    projectData["content"] = req.body.content;
    projectData["date"] = req.body.date;

    console.log(projectData);
    res.send(projectData);
}