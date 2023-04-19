import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Know from "./components/Know";
import { Link } from "react-router-dom";

let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜

const { VITE_API_KEY } = import.meta.env;

const config = {
  apikey: VITE_API_KEY,
};

const URL = `https://apis.data.go.kr/1250000/othbcact/getOthbcact?serviceKey=${
  config.apikey
}&pageNo=1&numOfRows=100&bgng_ymd=20171010&end_ymd=${year + month + date}`;


function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState(Boolean);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data.items);
        setState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="knowPig">김정은 그의 행방을 추적해보자...</h1>
              <Link to="/know" className="letsGo">
                {"<"}알아보기 {"/>"}
              </Link>
            </div>
          }
        />
        <Route path="/know" element={<Know data={data} load={state} />} />
      </Routes>
    </Router>
  );
}

export default App;
