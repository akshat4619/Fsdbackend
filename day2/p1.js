const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello World');
    res.end();
}); //create server
 server.listen(9000,()=>{
        console.log('Server is running on port 9000');
 });
