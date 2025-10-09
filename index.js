// Mypage web app

var http = require("http");

const port = 8000;

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, I'm Brandon Vu, a student at Goldsmiths University.</h1>
    <h2>Dynamic Web Applications</h2>
    <p>I enjoy playing video games, listening to music, and exercising.</p>
  </body>
</html>`);
}).listen(port, function() {
  console.log(`Node server is running on port ${port}...`);
});