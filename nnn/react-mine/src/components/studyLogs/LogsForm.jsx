import React, {useState} from 'react';

const LogsForm = ({
    setLogs
}) => {

    const [today, setToday] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        time: "",
        mouth: "",
        date: 0
    })

    return (
        <div className="flex flex-col m-auto w-1/2 mt-5">
            <form className="m-auto">
                <div className="flex">
                    <label htmlFor="date">日期</label>
                    <input id="date" type="date" value={today} onChange={
                        (e) => {
                            setToday(e.target.value)
                            const date = new Date(e.target.value);
                            const CDate = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
                            setFormData({
                                ...formData,
                                mouth: CDate[date.getMonth()],
                                date: date.getDate()
                            });
                        }
                    }/>
                </div>
                <div className="flex">
                    <label htmlFor="desc">内容</label>
                    <input id="desc" type="text" value={formData.name} onChange={
                        (e) => {
                            setFormData({
                                ...formData,
                                name: e.target.value
                            });
                        }
                    }/>
                </div>
                <div className="flex">
                    <label htmlFor="time">时间</label>
                    <input id="time" type="number" value={formData.time} onChange={
                        (e) => {

                            setFormData({
                                ...formData,
                                time: e.target.value
                            });
                        }
                    }/>
                </div>
                <div className="text-center">
                    <input className="cursor-pointer" type="button" value="submit" onClick={() => {
                        if (formData.name === "" || formData.time === "" || formData.mouth === 0 || formData.data === 0) {
                            window.alert("请输入完整信息");
                        } else {
                            setLogs(formData);
                            setFormData({
                                name: "",
                                time: "",
                                date: 0,
                                mouth: 0
                            });
                            setToday("");
                        }
                    }}/>
                </div>
            </form>
        </div>
    );
};
export default LogsForm;