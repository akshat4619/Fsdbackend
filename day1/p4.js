const fs=require('fs');
const data="I am Aksh!"
fs.writeFile('data.txt',data,(err) =>{
    if(err) console.error("Error writing to file",err);
    else
    console.log('Data written to file');
});
