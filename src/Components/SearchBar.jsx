import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../Store/notesSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.notes.searchQuery);

  return (
    <input
      type="text"
      placeholder="Search notes"
      value={searchQuery}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      className="w-full p-2 bg-gray-300 border rounded shadow-lg shadow-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;
