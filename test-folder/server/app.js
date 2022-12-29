#!/usr/bin/env node
const express = require('express');
const https = require('https');
const path = require('path');
const exec = require('child_process').exec;
const multer = require('multer');
// const cors = require('cors');
// const sys = require('sys');
const fs = require('fs');

// variable and function declarations
const app = express();

// app.use(cors());

var upload = multer({ storage: storage }).single('foo');

const port = 443;

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(express.static("public"));

var ssl_certs = {
	key: fs.readFileSync('keys/key.pem'),
	cert: fs.readFileSync('keys/cert.pem')
};

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname.substring(0,file.originalname.lastIndexOf('.')) + '-' + Date.now() + file.originalname.substring(file.originalname.lastIndexOf('.'),file.originalname.length));
  }
});

// routes
app.get('/api', function(req, res) {
    res.send('Hello World!')
});

app.get('/api/run', function(req, res) {
    exec("ls", function(err, stdout, stderr) {
        if(err) console.error(err);
        else {
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            res.send(`running? \n${stdout}`);
        }
    });
});

app.post('/api/upload', function(req, res) {
    upload(req, res, function(err) {
	    res.redirect('back');
    });
});

// app.listen(port, function() {
    // console.log(`Example app listening on port ${port}`)
// });

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// start express server on port 5000
// app.listen(port, () => {
  // console.log("server started on port " + port);
// });

https.createServer(ssl_certs, app).listen(port);
