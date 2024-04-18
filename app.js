const express = require('express');

const app = express();

// register view engine
app.set('view engine', 'ejs');
// by default it will look for files in folder named 'views'
//app.set('views', 'folder_name);

app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home Page</p>');
    // without second argument, by default it will look for an absolute path
    // res.sendFile('./views/index.html', {root : __dirname});
    res.render('index', {name: "ucha"});
})

app.get('/about', (req, res) => {
    const blogs = [
        {author: 'oaienf', snippet: "123123123123"},
        {author: 'dqwdqwd', snippet: '123'},
        {author: 'wfewef', snippet: '123'}
    ]
    
    //res.send('<p>About Page</p>');
    res.render('about', {blogs});

})

app.get('/blogs/create', (req, res) => {
    res.render('create');
})

app.get('/about123', (req, res) => {
    res.redirect('/about');
})

// if request can't find match above, it will use this method
app.use((req,res) => {
    res.status(404).render('404');
})