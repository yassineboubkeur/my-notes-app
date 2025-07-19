import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchNotes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addNote = async (note) => {
  await axios.post(API_URL, { note });
};

export const deleteNote = async (index) => {
  await axios.delete(`${API_URL}/${index}`);
};
