const socket = io.connect();
// console.log('Enviando main');
socket.emit('askData');
const form = document.getElementById('form');
const id = document.getElementById('id');
const titleHeader = document.getElementById('title');
const priceHeader = document.getElementById('price');
const thumnailHeader = document.getElementById('thumnail');
// console.log(form);


form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // console.log('Llegando con un mensaje');
    const mensaje = {
        titleHeader: titleHeader.value,
        priceHeader: priceHeader.value,
        thumnailHeader: thumnailHeader.value,
      };

      titleHeader.value = '';
      priceHeader.value = '';
      thumnailHeader.value = '';
      //Enviando mensaje al servidor
      socket.emit('message', mensaje)

      console.log('MENSAJE DESDE CLIENTE',mensaje);
})

function render(data) {
    console.log('render***********',data);
    let html = data.map(function (elem, index) {
        return `<div>
                   <strong>Socket Id: ${elem.socketId} => </strong>:
                   <em>${elem.message.titleHeader}</em>
                   <em>${elem.message.priceHeader}</em>
                   <em>${elem.message.thumnailHeader}</em>
          </div>`;
      }).join(' ');
    document.getElementById('messages').innerHTML = html;
  }

socket.on('messages', (data) => {
    console.log(data);
    render(data);
})
