import React, { useState, useEffect } from "react";
import axios from "axios";
import Register from "./components/Register";
import Comprar from "./components/Comprar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login"

function App() {
  const [products, setProducts] = useState([]);
  //Proteção do login
  const isAuth = localStorage.getItem("auth");

  //Carrega produtos quando a pagina abre
  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      {/*comentei abaixo, porque se deixo ele fica liberando o acesso a página
      mesmo estando deslogado */}
      {/*<Route path="/Cadastrar" element={<Register/>}/>*/}
      <Route path="/comprar" element={<Comprar/>}/>
      {/*Login*/}
      {/*Quando logar ir parar a parte de cadastro de produtos do sistema ou seja cadastrar produto
      e ir apenas se tiver logado*/}
      <Route path="/Cadastrar" element={isAuth ?  <Register/> : <Login/>} />
      {/*Login*/}
      {/*Entrar na tela de login o endereço tem que ser apenas / ou seja 
      http://localhost:3000/ no caso nesse exemplo pq cada sistema é um endereço tem que saber
      qual o endereço no caso qual o localhost*/}
      <Route path="/" element={<Login/>}/>

      </Routes>
  );
}

export default App;
