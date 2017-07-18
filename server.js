const express = require('express');
const server = express();
const ip = require('ip')


const myIp = ip.address()

var port = process.env.PORT || 3000

server.use('/', express.static('./'))

server.listen(3000, function(){
  console.log('Server listening port 3000');
  console.log('#####################################');
  console.log('Visite Local: http://localhost:3000');
  if (myIp.substring(0,9) == '192.168.1') {
    console.log('#####################################');
    console.log(`Visite External: ${myIp}:3000`);
  }
})
