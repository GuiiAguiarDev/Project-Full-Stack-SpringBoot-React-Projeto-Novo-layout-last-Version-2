import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Register.css";
import "./Home.css"

const Register = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();


  const [products, setProducts] = useState([]);
  //Mostrar o nome do usuario que está logado
  const usuario = localStorage.getItem("auth");



  const loadProducts = () => {
    axios
      .get("http://localhost:8080/products")
      .then((res) => {
        console.log("Produtos carregados:", res.data);
        setProducts(res.data);
      }).catch((err) => {
        console.error("Erro ao carregar os produtos", err);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/products", {
        name,
        estoque: stock,
        price,
      });

      setName("");
      setStock(0);
      setPrice(0);

      //Atualiza a lista de produtos depois que cadastra
      loadProducts();

    } catch (error) {
      console.log(error);
      alert("Error save");
    }
  };

  return (
    <div>
      {/*className="row" pra ficar em linha */}
      <div className="col-12 d-flex  align-items-end  mt-2">
        
      <div className="col-8 col-sm-10 text-center ">
      <h2 className="emphasisTitle text-center ms-5 mt-2  ">Register Product</h2>

      </div>






        <div className="col-4 col-sm-2 text-end mb-3 mb-sm-0   ">
        <p className="emphasisTitle h6 me-2 me-sm-4 ">{usuario}</p>
     
      <button className="btn btn-dark btn-sm me-2 me-sm-4 " onClick={()=>{
  localStorage.removeItem("auth");
  window.location.href = "/";
}}>Logoff</button>

</div>
      
      </div>
      
         




<form className="col-12 col-sm-6 row mt-2 px-4 formRegisterProduct  justify-content-start " onSubmit={handleSubmit}>
        

       
     
        <div className="col-6 col-sm-6 col-md-5 col-lg-4">
          <label htmlFor="inputEmail4" className="form-label generalText fw-bold ">
            Name
          </label>
          <input type="text" placeholder="Name" className="form-control" id="inputEmail4" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>



  


        <div className=" col-5 col-sm-5 col-md-4 col-lg-3 col-xl-3 ">
          <label htmlFor="inputAddress" className="form-label generalText fw-bold">
            Price
          </label>
          <input type="number" className="form-control" id="inputAddress" placeholder="$"  value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        </div>
       
          <div className="col-3 col-sm-3 col-md-3 col-lg-2 mt-1 mt-sm-0">
          <label htmlFor="inputPassword4" className="form-label generalText fw-bold">
            Stock
          </label>
        <input type="number" placeholder="1" className="form-control" id="inputPassword4" step="1" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} required />

          </div>
       

               <div className="col-8 col-sm-4 col-lg-3 d-flex flex-column justify-content-end mt-md-2 ">

            <div className="d-flex justify-content-start">
          <button type="submit" className="btn btn-dark btn-register btn-sm ">
            Register
          </button>
          </div>
        </div>
      </form>













      {/*JEITO UM DE FAZER UM EM BAIXO DO OUTRO NO MOBILE */}
      {/*<form className="col-12 row mt-2 px-4 formRegisterProduct  justify-content-start" onSubmit={handleSubmit}>
        
        <div className=" col-6 col-sm-6 col-md-4  d-flex flex-column flex-sm-row">
       
        <div className="col-12 me-1">
          <label htmlFor="inputEmail4" className="form-label generalText fw-bold ">
            Name
          </label>
          <input type="text" placeholder="Name" className="form-control" id="inputEmail4" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>



  


        <div className="col-12 col-sm-10 col-md-10 col-lg-8 col-xl-8">
          <label htmlFor="inputAddress" className="form-label generalText fw-bold">
            Price
          </label>
          <input type="number" className="form-control" id="inputAddress" placeholder="$"  value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        </div>
          <div className="col-6 col-sm-6 col-md-7 col-lg-5 col-xl-4 me-1">
          <label htmlFor="inputPassword4" className="form-label generalText fw-bold">
            Stock
          </label>
        <input type="number" placeholder="1" className="form-control" id="inputPassword4" step="0.1" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} required />

          </div>
</div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-register mt-2">
            Register
          </button>
        </div>
      </form>*/}

   

<div className="col-12 mt-5 px-4">
<table className="table teste ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {products.map((p) => (
    <tr>
      <th scope="row" key={p.id}>{p.id}</th>
      <td>{p.name}</td>
      <td>{p.price.toLocaleString("en-US",{
    style: "currency",
    currency:"USD",   
        
})}
</td>
      <td>{p.estoque}</td>
    </tr>
       ))}
  </tbody>
</table>
</div>
    </div>
    
  );
};

export default Register;
