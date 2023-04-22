import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Know from "./components/Know";
import Main from "./components/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
