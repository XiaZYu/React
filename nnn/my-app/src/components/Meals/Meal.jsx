import React from 'react';
import Counter from "../UI/Counter";
import clsx from "clsx";

const Meal = ({
    data,
    location
}) => {
    return (
        <div className="flex p-2 border-b border-neutral-100 text-align">
            <div className="w-1/3 h-full">
                <img src={data.img} alt={data.title}/>
            </div>
            <div className="w-full h-1/3">
                <h2>{data.title}</h2>
                {location === 1 ? "" : <p className="text-sm mb-4 text-slate-500 pr-2">{data.desc}</p>}
                <div className={clsx(
                    "w-full h-1/3 flex justify-between",
                    location === 1 ? "mt-5 h-2/3 right-5" : ""
                )}>
                    <p className="font-bold text-lg">${data.price}</p>
                    <Counter data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Meal;