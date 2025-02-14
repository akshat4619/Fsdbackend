const http=require('http');
const users=[
    {id:1,name:'John',age:25},
    {id:2,name:'Jane',age:22},
    {id:3,name:'Doe',age:30},
];
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const names=users.map((user)=>{
        return user.name});
    res.end(JSON.stringify(users));
});

server.listen(7000,(err)=>{
    if(err)
        console.log(err);
    console.log('Server is running on port 7000');
}); //listen to port 7000
