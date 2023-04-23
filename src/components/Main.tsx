import React from "react";
import { Link } from "react-router-dom";

type MainProps = {
  numSelect: string;
  pageSelect: string;
  numChange : (e: React.ChangeEvent<HTMLSelectElement>) => void;
  pageChange : (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Main = (props: MainProps) => {

  
  return (
    <div>
      <h1 className="knowPig">김정은 그의 행방을 추적해보자...</h1>
      <div className="selectBox">
        <div className="numSelect">가져올 데이터 수 고르기</div>
        <select
          className="numSelectBar"
          typeof="number"
          value={props.numSelect}
          onChange={props.numChange}
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
          value={props.pageSelect}
          onChange={props.pageChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <Link to="/know" className="letsGo">
        {"<"}알아보기 {"/>"}
      </Link>
    </div>
  );
};

export default Main;
