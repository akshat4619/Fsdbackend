const http=require('http');
const fs=require('fs/promises');

const server=http.createServer( async(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    const data=await fs.readFile("./data.json");
    const mydata=JSON.parse(data);
    const names=mydata.map((ele)=>{
        return ele.name;
    })
    console.log(JSON.stringify(names));
    res.end(JSON.stringify(names));
    })
    //res.end(data);
    //});

    server.listen(3000,(err)=>{
        if(err)
        
            console.log(err)
        console.log('Server is running on port 3000');

    });