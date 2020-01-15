const { io } = require('../server.js');

io.on('connection', (client) => {
    console.log('user connected');

    client.emit('EnviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Welcome to the app'
    })

    client.on('disconnect', () => {
        console.log('Conexión con el cliente perdida');
    })

    client.on('EnviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('EnviarMensaje', data);
        // if (message.usuario) {
        //     callback({
        //         resp: 'Todo Ok'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo Mal'
        //     });
        // }

    })

})