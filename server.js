const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    
    let path = "./views/";

    switch(req.url){
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += "404Page.html";
            res.statusCode = 404;
            break;
    }
    
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(res);
            res.end();
        }
       //  res.write(data);
        res.end(data);
    })
});


// localhost is default value
// callback function fires when we start listening
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});