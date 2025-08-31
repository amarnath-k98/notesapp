import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { updateNote } from '../Store/notesSlice';

const NoteModal = ({ note, onClose }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");
  const [tags, setTags] = useState(note?.tags || []);
  
  const handleSave = () => {
    const updatedNote = {
      ...note,
      title,
      description,
      tags
    };
    dispatch(updateNote(updatedNote));
    onClose();
  }
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!note) return null;

  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={tags.join(", ")}
          onChange={(e) =>
            setTags(e.target.value.split(",").map((tag) => tag.trim()))
          }
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </>
  );
};

export default NoteModal;
