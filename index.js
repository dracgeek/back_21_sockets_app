const express = require('express');
const path = require('path');
const app = express();

app.set('port', 4500);
app.use(express.static(path.join(__dirname,'public')));

const server = app.listen(app.get('port'),()=>{
    console.log('Trabajando en el puerto..',app.get('port'));
});

//Websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket)=>{
    console.log('Se ha conectado alguien', socket.id);

    socket.on('chat:message',(data)=>{
        console.log(data);
        io.sockets.emit('chat:message',data);
    });

})