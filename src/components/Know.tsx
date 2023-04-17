import React from "react";

type arrayTypes = {
  nes_cn: string;
  nes_ymd : string;
};

type KnowProps = {
  data: arrayTypes[];
};

const Know = ({ data }: KnowProps) => {
  return (
    <div>
      {data?.map((item, index) => (
        <div key={index}>
          <h2 className="knowPig" >
            {item.nes_cn}<p>({item.nes_ymd})</p>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Know;
