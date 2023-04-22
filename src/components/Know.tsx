import { Link } from "react-router-dom";
import { GiMissileSwarm } from "react-icons/gi";
import { BsArrowUpCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

type arrayTypes = {
  nes_cn: string;
  nes_ymd: string;
  excman: string;
};

type KnowProps = {
  data: arrayTypes[];
};

const Know = ({ data }: KnowProps) => {
  const goToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Link to={`/`} className="goToHome">
        <GiMissileSwarm />
      </Link>
      <p className="goToTop" onClick={goToTop}>
        <BsArrowUpCircle />
      </p>
      <div>
        {data?.map((item, index) => (
          <div key={index} className="pigBox">
            <h2 className="knowPig">
              활동 : {item.nes_cn}
              <p className="excman">관련인물 : {item.excman}</p>
              <p>날짜 : {item.nes_ymd}</p>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Know;
