import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./components/ProductForm";
import Comprar from "./components/Comprar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [products, setProducts] = useState([]);

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
      <Route path="/Cadastrar" element={<ProductForm/>}/>
      <Route path="/comprar" element={<Comprar/>}/>

      </Routes>
  );
}

export default App;
