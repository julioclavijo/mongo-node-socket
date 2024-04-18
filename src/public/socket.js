const socket = io();

export const loadNotes = () => {
    socket.on('loadnotes', (data) => {
        console.log(data);
    })
}