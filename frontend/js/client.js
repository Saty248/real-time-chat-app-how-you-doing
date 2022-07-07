  const socket = io('http://localhost:8000', { transports: ['websocket', 'polling', 'flashsocket'] }); 
 
const form=document.getElementById('text-container');
const messageInput=document.getElementById('InputText');
const messageContainer=document.getElementById('container');
 var audio =new Audio('bezz.mp3');
// the function append1 appends the message on the screen
const append1=(message,pos)=>{ 
    const msgele=document.createElement('div');
    msgele.innerText=message;
    msgele.classList.add('message');
    msgele.classList.add(pos);
    messageContainer.append(msgele);
    if(pos=='left'){
        audio.play();
    }
}

 const name=prompt("userName"); // asking for the username
  socket.emit('new-user-joined', name);  

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msg=messageInput.value;
    append1(`you : ${msg}`,'right');
    socket.emit('send',msg);
    messageInput.value='';
})

  socket.on('user-joined',name=>{
    
append1(`${name} joined `,'left')
  });

  socket.on('recieve',name=>{
   
append1(`${name.name} : ${name.message}`,'left')
  });

  

 socket.on('user-left',name=>{
    append1(`${name.name} left`,'left')
 }) 