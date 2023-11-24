import React from 'react';
import Meal from "./Meal";
//食物列表组件
const Meals = ({
    data
}) => {
    return (
        <div className="absolute top-8 bottom-0 overflow-auto">
            {
                data.map((item) => {
                    return <Meal key={item.id} data={item}/>
                })
            }
        </div>
    );
};

export default Meals;