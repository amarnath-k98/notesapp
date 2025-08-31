import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router";
import { addNote, updateNote } from '../Store/notesSlice';

const NoteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const existingNote = useSelector((state) =>
    state.notes.notes.find((note) => note.id === id)
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (isEditMode && existingNote) {
      setTitle(existingNote.title);
      setDescription(existingNote.description);
      setTags(existingNote.tags.join(", "));
    }
  }, [isEditMode, existingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const noteData = {
      id: isEditMode ? existingNote.id : crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      tags: Array.from(
        new Set(
          tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        )
      ),
      status: "active",
      isPinned: existingNote?.isPinned ?? false,
      isArchived: existingNote?.isArchived ?? false,
      isTrashed: existingNote?.isTrashed ?? false,
      createdAt: existingNote?.createdAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    if (isEditMode) {
      dispatch(updateNote(noteData));
    } else {
      dispatch(addNote(noteData));
    }
    navigate("/");
    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-300 p-6 rounded shadow-gray-600 shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4">
        {isEditMode ? "Edit Note" : "Create Note"}
      </h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 rounded"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        className="w-full border p-2 rounded"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button
        type="submit"
        className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isEditMode ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
