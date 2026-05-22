import React, { useState, useEffect } from "react";
import axios from "axios";

import "./ProductForm.css";
import "./Home.css"

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();

  const [products, setProducts] = useState([]);

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
    <div className="">
      {/*className="row" pra ficar em linha */}
         <h2 className="emphasisTitle text-center mt-4">Register Product</h2>
  
      <form className="col-12 row mt-2 px-4 formRegisterProduct" onSubmit={handleSubmit}>
        <div className="col-sm-3 col-md-2 me-2 ">
          <label htmlFor="inputEmail4" className="form-label generalText fw-bold ">
            Name
          </label>
          <input type="text" placeholder="Name" className="form-control" id="inputEmail4" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="col-sm-3 col-md-2  me-2 ">
          <label htmlFor="inputPassword4" className="form-label generalText fw-bold">
            Stock
          </label>
          <input type="number" placeholder="1" className="form-control" id="inputPassword4" step="0.1" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} required />
        </div>
        <div className="col-sm-3 col-md-2  me-2">
          <label htmlFor="inputAddress" className="form-label generalText fw-bold">
            Price
          </label>
          <input type="number" className="form-control" id="inputAddress" placeholder="$"  value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary btn-register">
            Register
          </button>
        </div>
      </form>

   

<div className="col-12 mt-5 px-4">
<table className="table teste ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Produto</th>
      <th scope="col">Estoque</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {products.map((p) => (
    <tr>
      <th scope="row" key={p.id}>{p.id}</th>
      <td>{p.name}</td>
      <td>{p.estoque}</td>
      <td>{p.price.toLocaleString("en-US",{
    style: "currency",
    currency:"USD",   
        
})}
</td>
    </tr>
       ))}
  </tbody>
</table>
</div>
    </div>
    
  );
};

export default ProductForm;
