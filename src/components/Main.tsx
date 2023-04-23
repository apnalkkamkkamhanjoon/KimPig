import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Know from "./Know";

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

const Main = () => {
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
    <div>
      <h1 className="knowPig">김정은 그의 행방을 추적해보자...</h1>
      <div className="selectBox">
        <div className="numSelect">가져올 데이터 수 고르기</div>
        <select
          className="numSelectBar"
          typeof="number"
          value={numSelect}
          onChange={numChange}
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
        <div className="pageSelect">페이지 고르기</div>
        <select
          className="pageSelectBar"
          typeof="number"
          value={pageSelect}
          onChange={pageChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <Link to='/know' state={data} className="letsGo">
        {"<"}알아보기 {"/>"}
      </Link>
    </div>
  );
};

export default Main;
