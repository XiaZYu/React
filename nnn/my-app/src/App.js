import React, {useEffect, useMemo, useState} from 'react';
import Meals from "./components/Meals/Meals";
import {CarProvider} from "./components/Store/CarContext";
import SearchInput from "./components/UI/SearchInput";
import CarCard from "./components/Meals/Car/CarCard";
import defaultMeals from "./configs/meals";

const App = () => {
    const [mealsList, setMealsList] = useState([]);

    const [searchValue, setSearchValue] = useState("")

    const filterList = useMemo(() => {
        return mealsList.filter(item =>
            item.title.includes(searchValue)
        )

    }, [mealsList, searchValue])

    useEffect(() => {
        // 从接口获取商品列表
        setMealsList(defaultMeals)
    }, [])


    return (
        <CarProvider allMeals={mealsList}>
            <div style={{width:390,height:744}} className="left-0 right-0 m-auto border-black border relative top-2">
                <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Meals list={filterList} />
                <CarCard/>
            </div>
        </CarProvider>
    );
};

export default App;