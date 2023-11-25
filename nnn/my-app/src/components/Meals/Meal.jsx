import React from 'react';
import Counter from "../UI/Counter";

const Meal = ({
    id,
    image,
    title,
    description,
    price,
}) => {
    return (
        <div className="flex p-2 gap-2">
            <div className="w-1/3 h-full">
                <img src={image} alt={title}/>
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <h2>{title}</h2>
                <p className="text-sm mb-4 text-slate-500 pr-2">{description}</p>
                <div className="flex justify-between">
                    <p className="font-bold text-lg">
                        <span>{price}</span>
                    </p>
                    <Counter id={id}/>
                </div>
            </div>
        </div>
    );
};

export default Meal;