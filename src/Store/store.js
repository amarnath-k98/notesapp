import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";

let persistedState = {};
try {
  const raw = localStorage.getItem("notes");
  persistedState = raw
    ? JSON.parse(raw)
    : {
        notes: [],
        searchQuery: "",
        selectedTags: [],
      };
} catch {
  persistedState = {
    notes: [],
    searchQuery: "",
    selectedTags: [],
  };
}

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  preloadedState: {
    notes: persistedState,
  },
});

store.subscribe(() => {
  localStorage.setItem("notes", JSON.stringify(store.getState().notes));
});

export default store;
