import React from 'react';

type KnowProps = {
    data : any[]
}

const Know = ({data}:KnowProps) => {
    return (
        <div>
            {data?.map((item, index)=><div key={index}>{item.nes_cn}</div>)}
        </div>
    );
};

export default Know;