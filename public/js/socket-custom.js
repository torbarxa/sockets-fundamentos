var socket = io();
socket.on('connect', function() {
    console.log('conectado al server');
})

socket.on('disconnect', function() {
    console.log('perdimos la conexión');
})

socket.emit('EnviarMensaje', {
    usuario: 'Xavi',
    mensaje: 'Hello World'
}, function(respuesta) {
    console.log('Callback disparado:' + respuesta);
    console.log(respuesta);
})

socket.on('EnviarMensaje', function(message) {
    console.log(message);
})