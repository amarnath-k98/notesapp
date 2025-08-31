import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoteCard from "../Components/NoteCard";
import NoteForm from "../Components/NoteForm";
import SearchBar from "../Components/SearchBar";
import TagFilter from "../Components/TagFilter";
import { addNote } from "../Store/notesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { notes, searchQuery, selectedTags } = useSelector(
    (state) => state.notes
  );
  const [selectedNote, setSelectedNote] = useState(null);

  const allTags = Array.from(new Set(notes.flatMap((note) => note.tags || [])));

  const filteredNotes = notes
    .filter((note) => note.status === "active" || note.status === "pinned")
    .filter(
      (note) =>
        note.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((note) =>
      selectedTags.length > 0
        ? selectedTags.every((tag) => note.tags?.includes(tag))
        : true
    )
    .sort(
      (a, b) => Number(b.status === "pinned") - Number(a.status === "pinned")
    );

  return (
    <div className="p-6 space-y-6 shadow-2xl  ">
      <h1 className="text-3xl text-shadow-lg font-bold text-shadow-gray-500">
        Notes
      </h1>
      <SearchBar />
      <TagFilter allTag={allTags} />
      <NoteForm onSubmit={(note) => dispatch(addNote(note))} />

      {filteredNotes.length === 0 ? (
        <p className="text-gray-500">No match found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onEdit={setSelectedNote} />
          ))}
        </div>
      )}

      
    </div>
  );
};

export default Home;
