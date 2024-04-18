export default (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');
        console.log(socket.handshake);
    })
}