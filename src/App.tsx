import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Know from "./components/Know";
import Main from "./components/Main";

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

  const [numSelect, setNumSelect] = useState<string>("10");

  const [pageSelect, setPageSelect] = useState<string>("1");

  const URL = `https://apis.data.go.kr/1250000/othbcact/getOthbcact?serviceKey=${config.apikey}&pageNo=${pageSelect}&numOfRows=${numSelect}&bgng_ymd=${bgngYmd}&end_ymd=${endYmd}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data.items);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [numSelect, pageSelect]);

  const numChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumSelect(e.target.value);
  };

  const pageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSelect(e.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main numChange={numChange} numSelect={numSelect} pageChange={pageChange} pageSelect={pageSelect}/>} />
        <Route path="/know" element={<Know data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
