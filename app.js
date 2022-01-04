const express = require('express');
const { append } = require('express/lib/response');
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const app = express();
const mainRoutes = require('./routes/main');
const methodOverride = require('method-override');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.get('/', (req, res) => {
    res.send('Hello!!')
})

app.get('/fat_loss', (req, res) => {
    res.send('Hello!!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')    
})
