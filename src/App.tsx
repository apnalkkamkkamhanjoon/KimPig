import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Know from "./components/Know";
import Main from "./components/Main";

function App(props:any) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/know" element={<Know {...props} data={props.location?.state?.data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
