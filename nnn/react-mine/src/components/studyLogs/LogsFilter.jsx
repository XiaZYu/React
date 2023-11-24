import React from 'react';

const LogsFilter = ({
    year,
    setYear
}) => {
    const CDate = ["All","一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    return (

        <div>
            月份:<select value={year} onChange={(e) => {
            setYear(e.target.value)
        }}>
            {CDate.map(item => <option key={item} value={item}>{item}</option>)}
        </select>
        </div>
    );
};

export default LogsFilter;