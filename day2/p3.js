const http=require('http');
const fs=require('fs/promises');

const server=http.createServer( async(req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/html');
  const data=await fs.readFile("./index.html");
  res.end(data);
}); //create server

server.listen(3000,(err)=>{
console.log('Server is running on port 3000');
}); //listen to port 3000