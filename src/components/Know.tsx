import React from "react";

type arrayTypes = {
    nes_cn: string
}

type KnowProps = {
  data : arrayTypes[]
};

const Know = ({ data }: KnowProps) => {
  return (
    <div>
      {data?.map((item, index) => (
        <h2 className="knowPig" key={index}>
          {item.nes_cn}
        </h2>
      ))}
    </div>
  );
};

export default Know;
