// localStorage.clear();

const optionBtns = document.querySelectorAll('.options');
const saveBtn = document.getElementById('saveBtn');
const Newnote = document.getElementById('note');

// To get current Date and Time
function DateTime() {
    const now = new Date();

    const date = now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const time = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });

    return {
        Nowdate: date,
        Nowtime: time
    };
}
// Function to modify the text as per the command
function modifyText(command, defaultUi, value) {
    document.execCommand(command, defaultUi, value);
}

// on click event of each button the function is called
optionBtns.forEach((button) => {
    button.addEventListener('click', () => {
        modifyText(button.id, false, null);
    })
});

// To save the note in notes.html
saveBtn.addEventListener('click', () => {
    // Access all previous notes as well
    let notes = JSON.parse(localStorage.getItem('AllNotes')) || [];

    // Create a span tag to store date and time
    const DateTimeIndia = DateTime();
    const span = document.createElement('span');
    span.innerHTML = `- ${DateTimeIndia.Nowdate} ${DateTimeIndia.Nowtime}`;
    Newnote.append(span);

    // Append the new Note
    Newnote.contentEditable = false;
    const noteHTML = Newnote.outerHTML;
    notes.push(noteHTML);
    Newnote.contentEditable = true;
    // Store back the notes under same localStorage
    localStorage.setItem('AllNotes', JSON.stringify(notes));
    window.location.href = "notes.html";
});