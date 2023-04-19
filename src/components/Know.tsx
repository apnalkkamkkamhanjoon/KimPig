import React from "react";
import { Link } from "react-router-dom";

type arrayTypes = {
  nes_cn: string;
  nes_ymd: string;
  excman: string;
};

type KnowProps = {
  data: arrayTypes[];
  load: boolean;
};

const Know = ({ data }: KnowProps, { load }: KnowProps) => {
  return (
    <>
      <Link to={`/`}>홈</Link>
      {load ? (
        <div>김정은 추적 중...</div>
      ) : (
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
      )}
    </>
  );
};

export default Know;
