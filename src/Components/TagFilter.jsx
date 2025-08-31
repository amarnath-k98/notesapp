import { useDispatch, useSelector } from "react-redux";
import { setSelectedTags } from "../Store/notesSlice";

const TagFilter = ({ allTag }) => {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state) => state.notes.selectedTags);

  const toggleTag = (tag) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    dispatch(setSelectedTags(updated));
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4 ">
      {allTag.map((tag, idx) => (
        <button
          key={idx}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 shadow-lg shadow-gray-600 rounded text-sm ${
            selectedTags.includes(tag)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
