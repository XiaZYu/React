import React, {useMemo, useState} from "react";

export const CarContext = React.createContext({
    carList:[],
    totalAmount:0,
    totalPrice:0,
    addItem: null,
    removeItem: null,
    removerAll: null
});
export const CarProvider = ({children}) => {

    const [carList, setCarList] = useState([])

    const totalPrice = useMemo(() => {
        // 根据 购物车列表计算当前所有商品的价格
        return carList.map(item => item.price * item.amount).reduce((a, b) => a + b, 0) ?? 0
        // 监听了carList
    }, [carList])

    const totalAmount = useMemo(() => {
        // 根据 购物车列表计算当前商品总数
        return carList.map(item => item.amount).reduce((a, b) => a + b, 0) ?? 0
    }, [carList])

    const addItem = (item) => {
        const findProduct = carList.find(product => product.id === item.id)
        // 如果存在同样的商品，就只增加数量
        if (!findProduct) {
            setCarList(list => [
                ...list,
                {
                    ...item,
                    amount: 1
                }
            ])
        } else {
            setCarList(list => [
                ...list.filter(product => product.id !== item.id),
                {
                    ...findProduct,
                    amount: findProduct.amount + 1
                }
            ])
        }
    }

    const removeItem = (item) =>{
        const findProduct = carList.find(product => product.id === item.id)
        if(findProduct) {
            // 如果现存商品数量为 1，直接删掉
            if (findProduct.amount === 1) {
                setCarList(list => list.filter(product => product.id !== item.id))
            } else {
                // 否则减去数量 1
                setCarList(list => [
                    ...list.filter(product => product.id !== item.id),
                    {
                        ...findProduct,
                        amount: findProduct.amount - 1
                    }
                ])
            }
        }
    }

    const removeAll = () => {
        setCarList([])
    }

    return (
        <CarContext.Provider value={{
            totalAmount,
            totalPrice,
            carList,
            addItem,
            removeItem,
            removeAll
        }}>
            {children}
        </CarContext.Provider>
    )
}