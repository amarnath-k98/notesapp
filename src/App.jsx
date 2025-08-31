import {
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./Pages/Home";
import Pinned from "./Pages/Pinned";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import "./App.css";
import NoteForm from "./Components/NoteForm";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-r/decreasing from-indigo-500 to-teal-400 text-shadow-md text-shadow-gray-450">
      <nav className="p-4 text-lg flex gap-4 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white  font-bold" : "font-bold text-gray-600"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pinned"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold text-gray-600"
          }
        >
          Pinned
        </NavLink>
        <NavLink
          to="/archived"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold text-gray-600"
          }
        >
          Archived
        </NavLink>
        <NavLink
          to="/trash"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "font-bold text-gray-600"
          }
        >
          Trash
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinned" element={<Pinned />} />
        <Route path="/archived" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/edit/:id" element={<NoteForm mode="edit" />} />
      </Routes>
    </div>
  );
}

export default App;
