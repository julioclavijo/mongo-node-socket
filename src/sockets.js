import Note from './models/Note';

export default (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');
        // console.log(socket.handshake);

        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('server:loadnotes', notes);
        }
        emitNotes()

        socket.on('client:savenote', async (data) => {
            const newNote = new Note({
                title: data.title,
                description: data.description
            })
            const savedNote = await newNote.save();
            socket.emit('server:newnote', savedNote)
        })
    })
}