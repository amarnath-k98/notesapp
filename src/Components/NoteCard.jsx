import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  pinNote,
  archiveNote,
  deleteNote as trashNote,
  permanentlyDelete as deleteNotePermanently,
} from "../Store/notesSlice";

const NoteCard = ({ note, onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
    const handlePin = (e) => {
      e.stopPropagation();
      dispatch(pinNote(note.id));
    };

    const handleArchive = (e) => {
      e.stopPropagation();
      dispatch(archiveNote(note.id));
    };

    const handleTrash = (e) => {
      e.stopPropagation();
      dispatch(trashNote(note.id));
    };


  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(note)}
      className="border p-2 border-gray-200 rounded-lg shadow-2xl bg-gray-200  hover:shadow-md transition "
    >
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <p className="text-sm text-gray-700 line-clamp-3">{note.description}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {note.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="border bg-white text-teal-800 p-1.5 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2 text-whit hover:text-teal-200">
        <button onClick={handlePin}>📌</button>
        <button onClick={handleArchive}>📥</button>
        <button onClick={handleTrash}>🗑️</button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/edit/${note.id}`);
          }}
          className="bg-white text-indigo-700 hover:bg-indigo border px-[4px] rounded cursor-pointer"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
