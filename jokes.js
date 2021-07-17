
let http = require('http');
let url = require('url');
let fs = require('fs');

function get_data(req, res) {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    }
  });
} //get_data()

let server = http.createServer(get_data);
server.listen(8080);

// node jokes.js
//curl -X GET http://localhost:8080/get_data.json