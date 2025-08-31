import { useSelector } from "react-redux";
import NoteCard from "../Components/NoteCard";

const Pinned = () => {
  const notes = useSelector((state) => state.notes.notes);
  const pinnedNotes = notes.filter((note) => note.status === "pinned");


  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Pinned Notes</h2>
      {pinnedNotes.length === 0 ? (
        <p className="text-black-500">No pinned notes</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {pinnedNotes.map((note) => (
            <NoteCard key={note.id} note={note} onClick={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pinned;
