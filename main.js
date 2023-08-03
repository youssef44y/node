const http=require('http')
const fs=require('fs')
const { isUtf8 } = require('buffer')
const { error } = require('console')
const { v4 : uuidv4 } = require (uuid);
console.log(uuidv4())

// const data=fs.readFile('welcome.txt','utf-8',(err,data)=>{
// if(err){console.log("err")}
// else console.log(data)}
// )
// console.log(data.toString())



// http.createServer(function(request,respond){
//     respond.write('<h1>Hello Node!!!</h1>')
//     respond.end()
// }).listen(3000)

