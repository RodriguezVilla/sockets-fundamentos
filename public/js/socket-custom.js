var socket = io();

// Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdiomos conexión con el servidor');
});

// Eviar información
socket.emit('enviarMensaje', {
    usuario: 'Rubén',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);


});