import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

let today = new Date();
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let week = new Array("일", "월", "화", "수", "목", "금", "토");
let day = today.getDay(); // 요일
let dayName = week[today.getDay()];

const APIKEY =
  "SmhbNZHl1Nogk0i9B2hiUjvqkJxPKYbROW789SRPplSUfeNFWQUyJ0IUplBaZXtKgO3Gt37CrKnUEcVmc2aVUg%3D%3D";
const URL = `https://apis.data.go.kr/1250000/othbcact/getOthbcact?serviceKey=${APIKEY}&pageNo=1&numOfRows=100&bgng_ymd=20171010&end_ymd=${year+month+date}`;
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.items);
    });
  }, []);

  console.log(data);

  return <div></div>;
}

export default App;
