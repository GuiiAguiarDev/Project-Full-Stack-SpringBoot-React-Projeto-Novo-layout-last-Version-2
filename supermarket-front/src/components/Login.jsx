import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [login,setLogin] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) =>{
        e.preventDefault();

        //Acessando o endPoint do login que está no backend
        try{
            const response =await axios.post("http://localhost:8080/login",{
                login,
                password
            });

            localStorage.setItem("auth", response.data);

            window.location.href ="/Cadastrar";
        }catch(err){
            alert("Login invalid");
        }
    };

    return(
        /*eu qeuria setar tamanho da caixa para aumentar a altura e ter espaço para eu centralizar o login
        porem so com h nao estava indo, então coloquei com view port que é vh */
        <div className="container d-flex flex-column align-items-center vh-100 justify-content-center">
            <h2 className="emphasisTitle text-center">Welcome - Log in To Continue</h2>

            <form onSubmit={handleLogin} className="col-12 col-sm-7 d-flex flex-column align-items-center mt-5 shadow p-3 mb-5 bg-orange rounded border-dark border-bottom border-5 ">
            <div className="col-6 col-sm-4">
            <input type="text" placeholder='Login' className='form-control mb-3' value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
    <div className="col-6 col-sm-4 ">
            <input type="password" placeholder="Password" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
           </div>
           <button className="btn btn-dark mt-4 mb-4">
            Login
           </button>

           
            </form>
           </div>
      
    );
}

export default Login;