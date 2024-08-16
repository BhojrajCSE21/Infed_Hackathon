import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Zoom from "./components/Zoom";
import Home from "./components/Home";
import Mentors from "./components/Mentors";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="bg-slate-100 w-full p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="./Logo.png" alt="something" />
          {/* <span className="text-xl font-bold">My App</span> */}
        </div>
        <nav className="font-semibold">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Find Companies
              </Link>
            </li>
            <li>
              <Link to="/mentors" className="text-gray-700 hover:text-gray-900">
                Find Mentors
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />}/> */}
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/zoom" element={<Zoom />} />
      </Routes>
    </Router>
  );
}

export default App;
