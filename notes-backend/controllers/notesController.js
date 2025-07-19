const client = require("../redis/client");

const addNote = async (req, res) => {
  const note = req.body.note;
  if (!note) return res.status(400).json({ error: "Note is required" });

  await client.rPush("notes", note);
  res.json({ message: "Note added" });
};

const getNotes = async (req, res) => {
  const notes = await client.lRange("notes", 0, -1);
  res.json(notes);
};

const deleteNote = async (req, res) => {
  const index = parseInt(req.params.index);
  const notes = await client.lRange("notes", 0, -1);

  if (index < 0 || index >= notes.length) {
    return res.status(400).json({ error: "Invalid index" });
  }

  // Redis doesn't allow direct delete by index, so:
  await client.lSet("notes", index, "__deleted__");
  await client.lRem("notes", 1, "__deleted__");

  res.json({ message: "Note deleted" });
};

module.exports = { addNote, getNotes, deleteNote };
