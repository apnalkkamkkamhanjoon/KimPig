import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Know from "./components/Know";
import Main from "./components/Main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/know" element={<Know />} />
      </Routes>
    </Router>
  );
}

export default App;
