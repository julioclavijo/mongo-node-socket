import { saveNote, deleteNote, getNoteById, updateNote} from './socket.js'

const notesList = document.querySelector('#notes');
const title = document.querySelector('#title');
const description = document.querySelector('#description');

let saveId = '';

// plantilla de nota
const noteUI = note => {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-10">
        <div class="card-header">
            <div class="card-title h5">${note.title}
            <button class="btn btn-primary float-right update ml-10" data-id="${note._id}"><i class="icon icon-edit"></i></button>
            <button class="btn btn-secondary float-right delete ml-10" data-id="${note._id}"><i class="icon icon-delete"></i></button>
            </div>
            <div class="card-body">${note.description}</div>
        </div>
        <div class="card-footer">
        </div>
    </div>
    `
    const btnDelete = div.querySelector('.delete');
    const btnUpdate = div.querySelector('.update');

    btnDelete.addEventListener('click', (e) => deleteNote(btnDelete.dataset.id));
    btnUpdate.addEventListener('click', (e) => getNoteById(btnUpdate.dataset.id));
    

    return div;
}

// recorrido de notas
export const renderNotes = notes => {
    notesList.innerHTML = '';
    notes.forEach(note => notesList.append(noteUI(note)));
}

export const fillForm = note => {
    title.value = note.title;
    description.value = note.description;
    saveId = note._id;
}



export const onHandleSubmit = (e) => {
    e.preventDefault();
    if (saveId) {
    updateNote(saveId, title.value, description.value);
    } else {
    saveNote(title.value, description.value);
    }

    // limpiar los valores
    saveId = "";
    title.value = "";
    description.value = "";

};

export const appendNote = note => {
    notesList.append(noteUI(note));
}