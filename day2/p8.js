const http = require('http');
const server = http.createServer(async(req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const data = await fetch("https://fakestoreapi.com/products");
            const jsonData = await data.json();
            const myhtml = `<html>
    <head>
        <title>Product List</title>
        <style>
        .container{
                border: 1px solid black;
                margin: 10px;
                padding: 10px;
                width: 50%;
                background-color: gray;
                border-radius: 10px;
        
        
        }
                .img{
                    text-align: center;
                    background-color: lightviolet;
                    border-radius: 10px;
                    
                    }
        </style>
    </head>
    <body><h1>Product List</h1>
    ${
        jsonData.map((ele) => {
            return `<div class="container">
            
            <h2>${ele.title}</h2>
            <p>${ele.description}</p>
            
            <h3>${ele.price}</h3>
          <div class="img">  <img  src="${ele.image}" alt="${ele.title}" width="100" height="100"> </div>
            </div>`;
        }).join('')
    }
    </body>
    </html>`;
    res.end(myhtml);
});
server.listen(9009, (err) => {
    if (err)
        throw err;
    console.log(err)
    console.log('Server is running on port 9009');
});