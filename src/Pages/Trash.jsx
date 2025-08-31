import { useSelector, useDispatch } from "react-redux";
import { restoreNote, permanentlyDelete } from "../Store/notesSlice";
import NoteCard from "../Components/NoteCard";

const Trash = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const trashedNotes = notes.filter((note) => note.status === "trashed");

  const handleRestore = (id) => {
    dispatch(restoreNote(id));
  };

  const handleDeleteForever = (id) => {
    dispatch(permanentlyDelete(id));
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Trashed Notes</h2>

      {trashedNotes.length === 0 ? (
        <p className="text-black-500">Trash is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {trashedNotes.map((note) => (
            <div key={note.id} className="relative">
              <NoteCard note={note} onClick={() => {}} />

              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleRestore(note.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  ↩️ Restore
                </button>
                <button
                  onClick={() => handleDeleteForever(note.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  ❌ Delete Forever
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trash;
