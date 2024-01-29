const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "text/html"})
    res.end("<h1>Welcome from the Server Side</h2>");
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("The server is running at port Number 8000")
});