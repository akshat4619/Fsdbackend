const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/plain'});
    if(req.url=='/home'){
        res.end('Welcome to HomePage');
    }
    else if(req.url=='/about'){
        res.end("This is about page");
    }
    else if(req.url=='/contact'){
        res.end("Contact Us Page");
    }
    else{
        res.statusCode(404);
        res.end("Page not Found");
    }
})
server.listen(9010,(err)=>{
    if(err)
        console.log(err)
    console.log('Server is running on port 9010');
});
