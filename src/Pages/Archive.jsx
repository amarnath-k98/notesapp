import { useSelector } from "react-redux";
import NoteCard from "../Components/NoteCard";

const Archive = () => {
  const notes = useSelector((state) => state.notes.notes);
  const archivedNotes = notes.filter((note) => note.status === "archived");


  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Archived Notes</h2>
      {archivedNotes.length === 0 ? (
        <p className="text-black-500">No archived notes</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {archivedNotes.map((note) => (
            <NoteCard key={note.id} note={note} onClick={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
