const noteInput = document.getElementById("noteInput");
const saveNoteButton = document.getElementById("saveNote");
const notesContainer = document.getElementById("notesContainer");

// Load notes when the page loads
document.addEventListener("DOMContentLoaded", displayNotes);

// Save note when button is clicked
saveNoteButton.addEventListener("click", function () {
  let noteText = noteInput.value.trim();

  if (!noteText) return; // Do nothing if input is empty

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = ""; // Clear input
  displayNotes(); // Refresh displayed notes
});

// Function to display notes
function displayNotes() {
  notesContainer.innerHTML = ""; // Clear existing notes

  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note, index) => {
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    noteDiv.innerHTML = `
      <p>${note}</p>
      <button class="deleteBtn" onclick="deleteNote(${index})">Delete</button>
    `;

    notesContainer.appendChild(noteDiv);
  });
}

// Function to delete a note by index
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));

  displayNotes(); // Refresh displayed notes
}
