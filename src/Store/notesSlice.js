import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  searchQuery: "",
  selectedTags: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({ ...action.payload, status: "active" });
    },

    updateNote: (state, action) => {
      const updatedNote = action.payload;
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);
      if (index !== -1) {
        state.notes[index] = updatedNote;
      }
    },

    deleteNote: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload);
      if (note) note.status = "trashed";
    },

    restoreNote: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload);
      if (note) note.status = "active";
    },

    permanentlyDelete: (state, action) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
    },

    archiveNote: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload);
      if (note) {
        note.status = note.status === "archived" ? "active" : "archived";
      }
    },

    pinNote: (state, action) => {
      const note = state.notes.find((n) => n.id === action.payload);
      if (note) {
        note.status = note.status === "pinned" ? "active" : "pinned";
      }
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload;
    },
  },
});

export const {
  addNote,
  updateNote,
  deleteNote,
  restoreNote,
  permanentlyDelete,
  archiveNote,
  pinNote,
  setSearchQuery,
  setSelectedTags,
} = notesSlice.actions;

export default notesSlice.reducer;
