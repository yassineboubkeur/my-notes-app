import { useEffect, useState } from "react";
import { fetchNotes, addNote as addNoteApi, deleteNote as deleteNoteApi } from "../api/notesApi";

export default function useNotes() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const data = await fetchNotes();
    setNotes(data);
  };

  const addNote = async (note) => {
    await addNoteApi(note);
    loadNotes();
  };

  const deleteNote = async (index) => {
    await deleteNoteApi(index);
    loadNotes(); // refresh after deletion
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return { notes, addNote, deleteNote };
}

