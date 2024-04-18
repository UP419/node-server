const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    // without second argument, by default it will look for an absolute path
    res.sendFile('./views/index.html', {root : __dirname});
})

app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');
    res.sendFile('./views/about.html', {root : __dirname});

})

app.get('/about123', (req, res) => {
    res.redirect('/about');
})

// if request can't find match above, it will use this method
app.use((req,res) => {
    res.status(404).sendFile('./views/404Page.html', {root : __dirname});
})