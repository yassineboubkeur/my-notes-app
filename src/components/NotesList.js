function NotesList({ notes, onDeleteNote }) {
  return (
    <ul className="notes-list">
      {notes.length === 0 ? (
        <li className="empty">No notes available</li>
      ) : (
        notes.map((note, index) => (
          <li key={index} className="note-item">
            <span>{note}</span>
            <button className="delete-btn" onClick={() => onDeleteNote(index)}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default NotesList;
