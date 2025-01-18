// localStorage.clear();
const noteBox = document.getElementById('noteContainer');

// On load display the created notes to user
document.addEventListener('DOMContentLoaded', () => {
    let notes = JSON.parse(localStorage.getItem('AllNotes')) || [];

    notes.forEach((note) => {
        const div = document.createElement('div');
        div.innerHTML = note;
        // Append the note
        const noteContent = div.firstChild;
        noteBox.append(noteContent);
        // Append the delete button
        const delBtn = document.createElement('button');
        delBtn.innerHTML = "Delete Note";
        delBtn.classList.add('optionBtn');
        noteBox.append(delBtn);
        delBtn.addEventListener('click', () => {
            //New updated noteList after deletion of note
            let newNoteList = notes.filter(Eachnote => Eachnote !== note);
            localStorage.setItem('AllNotes', JSON.stringify(newNoteList));
            noteContent.remove();
            delBtn.remove();
        });
    });
});