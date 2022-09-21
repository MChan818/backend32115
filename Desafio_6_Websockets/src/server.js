var PORT = 6024;
var MULTICAST_ADDR = '239.255.255.250';
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
let GET_IPADDRESS;


client.on('listening', function () {
    var address = client.address();
    console.log('UDP Client listening on ' + address.address + ":" + address.port);
});

client.on('message', function (message, rinfo) {
    console.log('Message from: ' + rinfo.address + ':' + rinfo.port + ' - ' + message);
    GET_IPADDRESS = rinfo.address;
});

client.bind(PORT, function () {
    client.addMembership(MULTICAST_ADDR);   // Add the HOST_IP_ADDRESS for reliability
});

//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------

// const express = require('express');
// const fs = require('fs')
// const { Server: HttpsServer } = require('https')

// var credentials = {
//     key: fs.readFileSync('src/server.key'),
//     cert: fs.readFileSync('src/server.crt')
// };
// //--------------------------------------------
// const app = express();
// const httpsServer = new HttpsServer(credentials, app)
// const io = require('socket.io')(httpsServer, {
//     cors:{
//         origin: ["https://192.168.0.15:3000","https://localhost:3000","localhost"],
//         methods: ["GET","POST"],
//         credentials: true
//     }
// })
// //--------------------------------------------
// app.use(express.static('public'))
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// //--------------------------------------------
// io.on('connection', async socket =>{
//     if(GET_IPADDRESS === null){
//         return;
//     }
//     socket.emit('ip', GET_IPADDRESS);

// })

// //--------------------------------------------


// const EXPRESSPORT = 8080;
// const server = httpsServer.listen(EXPRESSPORT, () => {
//     console.log(`Servidor https escuchando en el puerto ${server.address().port}`)
// })
// server.on("error", error => console.log(`Error en servidor ${error}`))
