var http = require('http');

var messages = ['hey', 'hey2', 'hey3'];

http.createServer(function(req, res) {

    res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });

    if (req.method === 'GET') {
        res.end(JSON.stringify(messages));
    }

    if (req.method === 'POST') {
        var postData = '';
        req.on('data', function(chunk) {
            postData += chunk.toString();
            messages.push(postData);

        });
        req.on('end', function() {
            console.log("Got POST data:");
        });
    }

}).listen(8000);
