require("dotenv").config(); // Load .env variables

const express = require("express");
const cors = require("cors");
const notesRoutes = require("./routes/notes");

const app = express();
const port = process.env.PORT || 5000; // fallback to 5000 if not defined

app.use(cors());
app.use(express.json());

app.use("/notes", notesRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
