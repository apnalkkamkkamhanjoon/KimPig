import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Know from "./components/Know";
import { Link } from "react-router-dom";

let today = new Date();
let nowYear = today.getFullYear(); // 년도
let nowMonth = today.getMonth() + 1; // 월
let nowDate = today.getDate(); // 날짜

let endYmd = nowYear + nowMonth + nowDate;
let bgngYmd = "20170101";

const { VITE_API_KEY } = import.meta.env;

const config = {
  apikey: VITE_API_KEY,
};

function App() {
  const [data, setData] = useState([]);

  const [select, setSelect] = useState<string>("10");

  const URL = `https://apis.data.go.kr/1250000/othbcact/getOthbcact?serviceKey=${config.apikey}&pageNo=1&numOfRows=${select}&bgng_ymd=${bgngYmd}&end_ymd=${endYmd}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [select]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1 className="knowPig">김정은 그의 행방을 추적해보자...</h1>
              <div className="select">가져올 데이터 수 고르기</div>
              <select
                className="selectBar"
                typeof="number"
                value={select}
                onChange={handleChange}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
              </select>
              <Link to="/know" className="letsGo">
                {"<"}알아보기 {"/>"}
              </Link>
            </div>
          }
        />
        <Route path="/know" element={<Know data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
