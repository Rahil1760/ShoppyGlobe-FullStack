import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const navigator = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const setLogger = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };
    function show(e) {
        const responce = fetch("/api/loginUser", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({user: login.email, password: login.password}),
        });
        responce
        .then((data) => data.json())
        .then((data) => {
            localStorage.setItem("accessToken", data.token);
        });
        e.preventDefault();
        console.log(login);
        navigator("/ProductList");
    }
    return (
        <div>
            <form onSubmit={(e) => show(e)}>
                <div className="bg-slate-800 p-20 md:w-1/2 m-auto mt-5 rounded-xl md:h-72 w-11/12 h-[500px]">
                    <div className="flex flex-col space-y-5">
                        <h1 className="bg-white w-12 p-1 rounded-md cursor-pointer">Login</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            className="outline-none"
                            onChange={(e) => setLogger(e)}
                            name="email"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="outline-none"
                            onChange={(e) => setLogger(e)}
                            name="password"
                            required
                        />
                        <div className="m-auto">
                            <button className=" border-2 border-white px-4 bg-white rounded-sm" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Login;
