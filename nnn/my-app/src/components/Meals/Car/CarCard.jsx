import React, {useContext, useState} from 'react';
import {CarContext} from "../../Store/CarContext";
import clsx from "clsx";
import CarDetails from "./CarDetails";
import CheckOut from "./CheckOut";

const CarCard = () => {

    const {carList, totalPrice, totalAmount} = useContext(CarContext);
    const [display, setDisplay] = useState(false);
    const [open, setOpen] =useState(false);

    return (
        <>
            <div style={{width: 360}}
                 className="bg-neutral-900 absolute bottom-10 h-14 ml-3 rounded-br-full rounded-tr-full z-30">
                <div className="flex h-full">
                    <div className="w-1/5 h-full flex">
                        <img src="/img/bag.png" alt="gwc" className="relative w-44 -top-2 h-20" onClick={() => {
                            setDisplay(d => !d)
                        }}/>
                        <div
                            className={clsx(totalAmount === 0 ? "" : "rounded-full bg-red-500 w-5 h-5 text-center absolute left-10 -top-2",)}>
                            {totalAmount === 0 ? "" : <p className="text-white">{totalAmount}</p>}
                        </div>
                    </div>
                    <div className="flex w-3/5  h-full">
                        <div className="flex relative top-1/4">
                            {
                                carList.length === 0 ? <p className="ml-2 text-gray-400">未选购商品</p> :
                                    <p className="ml-2 text-lg text-white">￥{totalPrice}</p>
                            }
                        </div>
                    </div>
                    <div
                        className={clsx("flex  ml-2 w-1/2 rounded-full", carList.length === 0 ? "bg-neutral-700" : "bg-amber-400")}>
                        <span className={clsx("top-0 bottom-0 m-auto", carList.length === 0 ? "text-gray-400" : "text-black")} onClick={() => {
                            carList.length !== 0 && setOpen(e => !e);
                        }}>去结算</span>
                    </div>
                </div>
            </div>
            <CheckOut open={open} setOpen={setOpen}/>
            <CarDetails open={display} setOpen={setDisplay}/>
        </>

    );
};

export default CarCard;