import React, {useContext} from 'react';
import {CarContext} from "../../Store/CarContext";
import Meal from "../Meal";
import clsx from "clsx";

const CheckOut = ({
    open,
    setOpen
}) => {
    const {carList} = useContext(CarContext)

    return (
        <div className={clsx(
            "top-0 bottom-0 left-0 right-0 bg-gray-100 absolute z-40",
            !open && "hidden"
        )}>
            <div className="mx-auto py-6 px-4 flex flex-col h-2/3">
                <div onClick={() => {setOpen(false)}}>
                    <svg className="w-8 h-8 text-2xl" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="mt-5 p-4 bg-white rounded-2xl overflow-auto">
                    <div className="flex flex-row items-center justify-between px-3">
                        <p className="text-black font-bold text-xl">餐品详情</p>
                    </div>
                    <div className="overflow-auto">
                        {carList.map(item => {
                            return (
                                <div key={item.id} className="w-full h-28 mt-3 flex justify-between">
                                    {carList && carList.length > 0 && (
                                        <Meal
                                            key={item.id}
                                            id={item.id}
                                            image={item.img}
                                            title={item.title}
                                            price={`¥${item.price * item.amount}`}
                                            countCompetent={true}
                                        />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;