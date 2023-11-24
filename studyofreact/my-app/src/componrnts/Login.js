import React, {useState} from "react";
import {clsx} from "clsx";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        type:0,
        message:""
    });
    return (
        <div className="flex flex-col w-36 text-center mt-2 m-auto border border-black">
            <form>
                <input
                    className={clsx(
                        "border-2 border-cyan-400 w-32 m-2 p-0.5 outline-none hover:border-blue-400 focus:border-blue-800",
                        error.type === 1 && "border-red-400"
                    )}
                    type="text" name="username" placeholder="username" value={username}
                    onChange={(e) => setUsername(e.target.value)}></input>
                <input
                    className={clsx(
                        "border-2 border-cyan-400 w-32 m-2 p-0.5 outline-none hover:border-blue-400 focus:border-blue-800",
                        error.type === 2 && "border-red-400"
                    )}
                    type="password" name="password" placeholder="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                {error.message && <p className="text-red-500">{error.message}</p>}
            </form>
            {/*async 异步 await 同步*/}
            <input type="submit" value="登录" onClick={async () => {
                const res = await judge(username, password);
                setError({type: res.type, message: res.message})

                // judge(username,password).then(res =>{
                //     setError({type: res.type, message: res.message})
                // })
            }
            }></input>
        </div>
    )
}

function getUser() {
    return fetch("http://127.0.0.1:4523/m1/3566996-0-default/api/user").then(res => res.json())
}

async function judge(username, password) {
// function judge(username, password) {
    const result = {};
    const userList = {};
    // return  getUser().then(res =>{
    //     userList.username = res.data.username;
    //     userList.password = res.data.password;
    //     if (username === '') {
    //         result.type=1
    //         result.message="用户名不能为空"
    //         return result;
    //     } else if (password === '') {
    //         result.type=2
    //         result.message="密码不能为空"
    //         return result;
    //     } else if (username !== userList.username) {
    //         result.type=1
    //         result.message="用户名错误"
    //         return result;
    //     } else if (password !== userList.password) {
    //         result.type=2
    //         result.message="密码错误"
    //         return result
    //     }
    //     if (username === userList.username && password === userList.password) {
    //         result.type=0
    //         result.message="登陆成功"
    //         return result
    //     }
    // })

    const res = await getUser();
    userList.username = res.data.username;
    userList.password = res.data.password;
    if (username === '') {
        result.type = 1
        result.message = "用户名不能为空"
        return result;
    } else if (password === '') {
        result.type = 2
        result.message = "密码不能为空"
        return result;
    } else if (username !== userList.username) {
        result.type = 1
        result.message = "用户名错误"
        return result;
    } else if (password !== userList.password) {
        result.type = 2
        result.message = "密码错误"
        return result
    }
    if (username === userList.username && password === userList.password) {
        result.type = 0
        result.message = "登陆成功"
        return result
    }
}

export default Login