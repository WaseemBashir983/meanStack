const express = require('express')
const mongoose = require('mongoose')
const db = require('./src/config/database')
const hbs = require('hbs')
const path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
const router = new express.Router()
const publicPath = path.join(__dirname, '/client/dist/client');
//const partialsPath = path.join(__dirname, '/views/partials');
const UserRoutes = require('./src/routes/users')(router)
const BlogRoutes = require('./src/routes/blog')(router)
const app = express()
const port = process.env.PORT || 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.set('view engine', 'hbs');


//hbs.registerPartials(partialsPath);
app.use(express.static(publicPath));
app.use('/api', UserRoutes);
app.use('/api', BlogRoutes);
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})