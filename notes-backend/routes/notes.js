const express = require("express");
const router = express.Router();
const { addNote, getNotes, deleteNote } = require("../controllers/notesController");

router.post("/", addNote);
router.get("/", getNotes);
router.delete("/:index", deleteNote);


module.exports = router;
