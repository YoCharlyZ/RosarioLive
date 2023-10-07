const fs = require ("fs");
const ftp = require ("ftp");
const http = require ("http");
const https = require ("https");
const path = require ("path");
const express = require ("express");
const AudioMotionAnalyzer = ("audiomotion-analyzer");

const app = express();
const portFTP = ("8021");
const portHTTP = ("8080");
const portHTTPS = ("8443");
const indexWEB = path.join(__dirname + "/root/private/html/index.html");
const privateCERT = path.join(__dirname + "/root/private/certs/cert.crt");
const privateKEY = path.join(__dirname + "/root/private/certs/cert.key");
const privateCA = path.join(__dirname + "/root/private/certs/cert.ca");
const privatePASS = ("password1234");
const privateCREDENTIALS = {
  key: privateKEY,
  cert: privateCERT,
  ca: privateCA,
  passphrase: privatePASS
};
app.use(express.static(__dirname + "/root"));
app.use(express.static(__dirname + "/root/public"));
app.use(express.static(__dirname + "/root/private"));

app.listen(portFTP, () => {
  console.log("Server ftp running on port:", portFTP)
});
app.listen(portHTTP, () => {
  console.log("Server http running on port:", portHTTP)
});
app.listen(portHTTPS, () => {
  console.log("Server https running on port:", portHTTPS)
});

app.get('/', (req, res) => {
  res.sendFile(indexWEB)
});

