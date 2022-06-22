const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.ulr === "/about") {
    res.end("Here is our short");
  }
  res.end("404 Sorry");
});

server.listen(5000);
