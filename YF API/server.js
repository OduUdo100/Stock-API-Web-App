const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const filename = '.' + req.url;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }

    let contentType = 'text/html';
    
    if(filename.endsWith('.css')){
        contentType = 'text/css'; 
    } else if (filename.endsWith('.js')) {
       contentType = 'application/javascript'; 
    }
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    res.write(data);
    return res.end();
  });
}).listen(5500);
