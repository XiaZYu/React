import React from 'react';
import Delete from "../button/Delete";

const Date = ({
    logs,
    setLogs
}) => {
    return (
        <div>
            <ul>
                {logs.map((item, index) => (
                    <li key={index} className="flex bg-orange-200 m-4">
                        <div className="w-32 m-2 rounded-lg overflow-hidden">
                            <div className="text-center h-full">
                                <div className="h-1/3 w-full bg-red-500 ">
                                    {item.mouth}
                                </div>
                                <div className="h-2/3 bg-white">
                                    {item.date}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col text-center w-full mt-4 gap-y-3">
                            <p className="font-bold">{item.name}</p>
                            <p className="text-red-500">{item.time}分钟</p>
                        </div>
                        <div className="mr-5">
                            <Delete
                                List={logs}
                                index={index}
                                onChange={(log) => {
                                    setLogs(log);
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Date;