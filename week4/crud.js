const http = require('http');

let database = {};
let idx = 0;

const server = http.createServer((req, res) => {
    const url_parsed = req.url.split('/');
    const method = req.method;

    console.log(method);
    console.log(url_parsed);
    console.log(database);

    if (method == 'POST') {
        database[idx] = url_parsed[2];
        idx++;
    }
    else if (method == 'GET') {
        if (url_parsed.length == 2) {
            res.write(JSON.stringify(database));
        } else {
            try {
                const url_idx = Number(url_parsed[1]);
                res.write(database[url_idx]);
            } catch (error) {
                console.log('READ ERROR');
                console.log(error);
            }
        }
    }
    else if (method == 'PUT') {
        const url_idx = Number(url_parsed[2]);
        const url_data = url_parsed[3];
        database[url_idx] = url_data;
    }
    else if (method == 'DELETE') {
        const url_idx = Number(url_parsed[2]);
        database[url_idx] = undefined;
    }
    res.end();
}).listen(8080);

server.on('listening', () => {
    console.log('server is running on 8080');
})

server.on('error', (error) => {
    if (error)
        console.log(error);
})
