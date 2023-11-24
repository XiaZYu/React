import List from "./List";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// function getList() {
//     return fetch("http://127.0.0.1:4523/m1/3566996-0-default/api/test").then(res => res.json())
//  }

 // class App extends React.Component {
 //    static state = {
 //        userList: []
 //    }
 //
 //    componentDidUpdate(prevProps, prevState, snapshot) {
 //
 //    }
 //
 //    render() {
 //        return(
 //            <div>
 //                123
 //            </div>
 //        )
 //    }
 // }
//
 const App = () => {
    const [userList, setUserList] = useState([]);
    const [value, setValue] = useState('')
     const obj ={
        name:"zhansga",
        age:12,
        sex:"男"
     }
     const {sex, name, age} = obj;
     console.log(sex, name, age)

     // useEffect(() => {
     //     getList().then(res =>{
     //         setUserList(res.data)
     //     })
     // }, [])
    return (
        <div className="App">
            <List
                items={userList}
                onChange={(index) => {
                const newList = userList.filter((_, i) => i !== index)
                setUserList(newList)
            }}></List>
            <div className="flex gap-2">
                <input value={value} className="border" onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => {
                    if (value) {
                        setUserList([...userList, {
                            name: userList.length,
                            text: value
                        }])
                        setValue("")
                    }
                }}>创建待办事项</button>
            </div>
            <button>
                <Link to="/home">dsd</Link>
                <Link to="/Login">登录界面</Link>
            </button>
        </div>
    );
}

export default App;
