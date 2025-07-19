import { useState } from "react";

function Input({ onAddNote }) {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    if (note.trim() === "") return;
    onAddNote(note);
    setNote("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Write a note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Input;
