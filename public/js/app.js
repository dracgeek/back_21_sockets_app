const socket = io();

let message = document.getElementById('message');
let username = document.getElementById('username');
let output = document.getElementById('output');
let actions = document.getElementById('actions');
let btn = document.getElementById('send');

btn.addEventListener('click', function(){
   socket.emit('chat:message',{
       username:username.value,
       message:message.value
   });
});

socket.on('chat:message',function(data){
    actions.innerHTML = '';
    output.innerHTML += `
      <p>
       <strong>${data.username}</strong>: ${data.message}
      </p>`;
});