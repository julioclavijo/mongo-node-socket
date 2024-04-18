import Note from './models/Note';

export default (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');
        //console.log(socket.handshake);

        const emitNotes =async () => {
            const notes = await Note.find();
            io.emit('loadnotes', notes);
        }
        emitNotes()
    })
}