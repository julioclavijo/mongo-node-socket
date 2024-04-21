import { saveNote, deleteNote} from './socket.js'

const notesList = document.querySelector('#notes')

// plantilla de nota
const noteUI = note => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-10">
        <div class="card-header">
            <div class="card-title h5">${note.title}
            <button class="btn btn-primary float-right"><i class="icon icon-edit"></i></button>
            <button class="btn btn-secondary float-right delete" data-id="${note._id}"><i class="icon icon-delete"></i></button>
            </div>
            <div class="card-body">${note.description}</div>
        </div>
        <div class="card-footer">
        </div>
    </div>
    `
    const btnDelete = div.querySelector('.delete');
    btnDelete.addEventListener('click', (e) => {
        deleteNote(btnDelete.dataset.id);
    })
    return div
}

// recorrido de notas
export const renderNotes = notes => {
    notesList.innerHTML = '';
    notes.forEach(note => notesList.append(noteUI(note)));
}

export const onHandleSubmit = (e) => {
    e.preventDefault();
    saveNote(noteForm['title'].value, noteForm['description'].value);
};

export const appendNote = note => {
    notesList.append(noteUI(note));
}