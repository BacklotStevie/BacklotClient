import axios from 'axios';
import { useState, useContext } from "react";
import { userContext } from "../../context/UserCtx";
import { useHistory } from 'react-router-dom'


const Login = () => {

    const { setUser } = useContext(userContext);
    const history = useHistory()
    const [username, setUsername] = useState({
        email: "",
        password: ""
    });


    function handleUserChange(event) {
        setUsername({
            ...username,
            [event.target.name]: event.target.value
        })
    }

    function loginUserHandler(event) {
        debugger

        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, username)
            .then((res) => {
                console.log(res)
                setUser(res.data.user);
                localStorage.setItem("token", res.data.token);
                history.push("/home");
            })
            .catch((error) => {
                console.log(error)
            })
    }





    return (
        <div className="container">
            <div className="row">
                <form onSubmit={loginUserHandler}>
                    <input className="col-12" type="text" name="email" value={username.email} placeholder="Email" onChange={handleUserChange}></input>
                    <input className="col-12" type="text" name="password" value={username.password} placeholder="Username" onChange={handleUserChange}></input>


                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;