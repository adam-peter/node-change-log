import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    console.log("Hello from the server!");

    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
