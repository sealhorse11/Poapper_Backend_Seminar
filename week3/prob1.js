const http = require('http');
const fs = require('fs');
const moment = require('moment');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == '/'){
        res.write('<h1>HOMETOWN</h1>')
        res.end()
    }
    if(req.url == '/timer'){
        const now = moment().format('YYYY-MM-DD HH:MM:SS');
        res.write('<h1>' + now +'</h1>')
        res.end()
    }
}).listen(8080);

server.on('listening', () => {
    console.log('server is running on 8080');
})

server.on('error', (error) => {
    if(error) console.log(error)
})
