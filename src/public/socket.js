const socket = io();

export const loadNotes = (callback) => {
    socket.on('server:loadnotes', callback);
}

export const saveNote = (title, description) => {
    socket.emit('client:savenote', {
        title,
        description
    })  
}

export const newNote = (callback) => {
    socket.on('server:newnote', callback);
}