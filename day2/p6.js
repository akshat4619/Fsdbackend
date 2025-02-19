const http=require('http');

const server=http.createServer( async(req,res)=>{
    const data=await fetch("https://dummyjson.com/products");
    const jsondata=await data.json();
    const products=jsondata.products;
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const title=products.map((ele)=>{
        return ele.title;
    })
    //console.log(JSON.stringify(title));
    res.end(JSON.stringify(title));
    //res.setHeader('Content-Type','text/plain');
    //res.end('Hello World');
})

server.listen(9000,(err)=>{
    if(err)
        console.log(err)
    console.log('Server is running on port 9000');

});