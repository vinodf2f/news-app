const http = require('http');
const express = require('express');
const path = require('path')

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
// app.get('/',(req, res) => {
//     res.sendFile(` /..public/index.html`)
// })
console.log(path.join(__dirname, 'public'));

app.listen(3000);
