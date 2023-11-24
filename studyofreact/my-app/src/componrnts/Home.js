import React , {useState} from "react";
function Home(){
    const [counter,setCounter] = useState(0)
    console.log("被点击")
    return (
        <div>
            {counter}
            <button onClick={() =>{
                setTimeout(() => {
                    setCounter((ss) => {
                        return ss + 1;
                    });
                },1000)
            }}>加</button>
        </div>
    )
}
export default Home;