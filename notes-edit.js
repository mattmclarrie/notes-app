const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

document.querySelector('#note-title').value = note.title
document.querySelector('note-body').value - note.body
document.querySelector('#remove-note').addEventListener('click', removeNote())