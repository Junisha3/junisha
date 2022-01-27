import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TaskService from "../TaskService";

function Login(){
    let navigate = useNavigate();

    const [Name, setName] =useState("");
    const[Password, setPassword] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        TaskService.login(Name,Password).then(Response =>{
            console.log(Response)
            if(Response.data === true){
                alert("Your Login successful");
                navigate('/home')
            }
            else{
                alert("please enter vaild name and password");
                navigate('/login')
            }
        })
    }
    return(
        <div>

        <div className="Login">
        <h2 style={{textAlign:"center"}}>Login</h2>
        <form onSubmit={handleSubmit} style= {{textAlign:"center"}}>
            <fieldset>
                <div>UserName:
                    <input type="text"
                    name = "Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    password:
                    <input type = "password"
                    name ="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </fieldset>
        </form></div>
        </div>
    );
}
export default Login;