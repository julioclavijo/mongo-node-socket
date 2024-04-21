import Note from './models/Note';

export default (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');
        // console.log(socket.handshake);

        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('server:loadnotes', notes);
        }
        emitNotes();

        socket.on('client:savenote', async (data) => {
            const newNote = new Note({
                title: data.title,
                description: data.description
            })
            const savedNote = await newNote.save();
            io.emit('server:newnote', savedNote)
        });

        socket.on('client:deletenote', async (id) => {
            await Note.findByIdAndDelete(id);
            emitNotes();
        });
        socket.on('client:getnote', async (id) => {
            const note = await Note.findById(id);
            io.emit('server:selectednote', note)
            //socket.emit('server:selectednote', note)
        });
        socket.on('client:updatenote', async (updatedNote) => {
            await Note.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description
            })
            emitNotes();
        });
    })
}