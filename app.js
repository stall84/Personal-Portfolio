const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 5000;

// EJS Setup

//app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', 'views');

// Static Folder
app.use(express.static(__dirname + '/public'));


// Routes 
app.use(require('./routes/index'));

// Server Startup
app.listen(PORT, () => {
    console.log('Server is up and a runnin on PORT: ' + PORT)
})