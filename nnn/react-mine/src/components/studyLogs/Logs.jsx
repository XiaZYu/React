import React, {useState} from "react";
import Date from "./Date";
import LogsForm from "./LogsForm";
import LogsFilter from "./LogsFilter";


const Logs = () => {
    const [logs, setLogs] = useState([
        {
            name: "学习React",
            time: "40",
            mouth: "三月",
            date: 23
        },
        {
            name: "学习Vue",
            time: "80",
            mouth: "四月",
            date: 25
        },
        {
            name: "学习Webpack",
            time: "20",
            mouth: "四月",
            date: 24
        },
        {
            name: "学习JavaScript",
            time: "40",
            mouth: "三月",
            date: 20
        },
    ])
    const [year, setYear] = useState("All");

    const setYearHandel = (year) =>{
        setYear(year)
    }

    const setLogsHandel = (log) => {
        setLogs(log)
    }

    return (
        <div className="flex flex-col m-auto w-1/2 mt-5">
            <LogsForm setLogs={(log) => {
                    const newLogs = [...logs, log];
                    setLogsHandel(newLogs);
            }}/>
            <div className="m-4 bg-orange-100  rounded-lg bg-gray-200">
                <LogsFilter
                    year={year}
                    setYear={setYearHandel}
                />
                {logs.length !== 0 ? <Date logs={year !== "All" ?logs.filter((logs)=>(logs.mouth === year)) : logs} setLogs={setLogsHandel}/> : "没有找到日志"}
            </div>
        </div>
    );
}

export default Logs;