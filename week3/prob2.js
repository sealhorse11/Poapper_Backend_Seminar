const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url);
    const urlInfo = req.url.split('/');
    let result = 0;
    
    if (req.url == '/') {
        res.write('<h1>' + urlInfo + '</h1>');
        console.log(req.url);
        console.log(urlInfo);
        res.end()
    }
    else {
        switch (urlInfo[1]) {
            case 'add':
                result = urlInfo[2] * 1 + urlInfo[3] * 1;
                break;
            case 'sub':
                result = urlInfo[2] * 1 - urlInfo[3] * 1;
                break;
            case 'mul':
                result = (urlInfo[2] * 1) * urlInfo[3] * 1;
                break;
            case 'div':
                result = (urlInfo[2] * 1) / urlInfo[3] * 1;
                break;
        }
        res.write('<h1>result of your calculation is ' + result + '</h1>');
        res.write('<p>' + urlInfo[2] + ' ' + urlInfo[1] + ' ' + urlInfo[3] + '</p>')
        res.end()
    }
}).listen(8080);

server.on('listening', () => {
    console.log('this server is running on 8080');
})

server.on('error', (error) => {
    if (error) console.log(error);
})
