const io=require('socket.io')(8000); //socketio package is imported and port 8000 is used for the server to listen
const user={}; //object to store the user id

io.on('connection',socket=>{ //socket connection is made
    
    socket.on('new-user-joined', name =>{ // it listens for the function call 'new-user-joined' emited by the client along with name as parameter for the function  
        console.log("new= ",name)
        user[socket.id]=name; //the name is added to the object.
        socket.broadcast.emit('user-joined',name); // it calls the function 'user-joined' along with name as the parameter for the other clients
    })
    // when a message is sent from the client it recieves the message and sends it to  the other clients
    socket.on('send',message=>{// it listens for the function call 'send' emited by the client along with message as parameter for the function  
        socket.broadcast.emit('recieve',{message:message,name:user[socket.id]}); // it calls the function 'recieved' along with an object consisting of the message and the username  as the parameter for the other clients
    })
// when someone disconnects it tells other users that an user has left
    socket.on('disconnect', name=>{// it listens for the function call 'disconnect' emited by the client along with name as parameter for the function  
        socket.broadcast.emit('user-left',{name:user[socket.id]}); // it calls the function 'user-left' along with name as the parameter for the other clients
        delete user[socket.id]; // it deletes the data of the user who left.
    })
})