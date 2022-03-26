const client = r
require('./connection.js')
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(8080, ()=>{
    console.log("Server is now listening at port 8080");
})

client.connect();


app.get('/soil', (req, res)=>{
    client.query(`Select * from soil`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
//client.connect();

app.get('/soil/:gid', (req, res)=>{
    client.query(`Select * from soil where gid=${req.params.gid}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})