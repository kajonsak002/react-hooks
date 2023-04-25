import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Component
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseRef from "./pages/UseRef";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">UseState</Link>
          </li>
          <li>
            <Link to="/effect">UseEffect</Link>
          </li>
          <li>
            <Link to="/memo">UseMemo</Link>
          </li>
          <li>
            <Link to="/callback">UseCallback</Link>
          </li>
          <li>
            <Link to="/ref">UseRef</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<UseState />} />
        <Route path="/effect" element={<UseEffect />} />
        <Route path="/memo" element={<UseMemo />} />
        <Route path="/callback" element={<UseCallback />} />
        <Route path="/ref" element={<UseRef />} />
      </Routes>
    </>
  );
}

export default App;
