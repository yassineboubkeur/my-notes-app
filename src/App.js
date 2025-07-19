import React from "react";
import Input from "./components/Input";
import NotesList from "./components/NotesList";
import useNotes from "./hooks/useNotes";
import "./App.css";

function App() {
  const { notes, addNote, deleteNote } = useNotes();

  return (
    <div className="app-container">
      <h1>📝 My Notes</h1>
      <Input onAddNote={addNote} />
      <NotesList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
}

export default App;
