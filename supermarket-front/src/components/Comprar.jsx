//Como é um metodo então tem que ser o nome do metodo que estamos fazendo
//como comprar é um metodo no memu java passamos o nome dele aqui tbm agr se foss eum entidade
//poderiamos passar o nome dela ou outra coisa, segue esse racicionio
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./ProductForm.css";

function Comprar({ onUpdate }) {
  const [nameProduct, setNameProduct] = useState("");
  const [qtdProductBuyed, setQtdProductBuyed] = useState(1);

  //Para Llstar os Produtos
  const [products, setProducts] = useState([]);
  //Listar Produtos
  const loadProducts =() => {
    axios.get("http://localhost:8080/products").then((res)=>{
      console.log("product ok");
      setProducts(res.data);
    }).catch((err)=>{
      console.error("Error")
    })
  }

  //Carregar automatica a listagem
  useEffect(() =>{
    loadProducts();
  },[]);



  const handleComprar = async (e) => {
    //Não deixa a oagina recarregar
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/invoice/comprar", null, {
        params: {
          nameProduct,
          qtdProductBuyed,
        },
      });

   
      setNameProduct("");
      setQtdProductBuyed(1);
    } catch (err) {
      console.log(err);
  
      alert("Failed buy");
      
    }
  };

  return (
    <div className="boxForm">
    
      {/*className="row" pra ficar em linha */}
      <h2 className="emphasisTitle text-center mt-4">Buy a Product</h2>
      <div className="d-flex flex-column align-items-center align-items-md-start ">
      <form className="col-12 col-sm-10 col-lg-8 row mt-2 px-4 formRegisterProduct" onSubmit={handleComprar}>
        <div class="col-sm-12 col-md-4 me-2 ">
          <label for="inputEmail4" class="form-label generalText fw-bold">
            Name
          </label>
          <input type="text" placeholder="Product Name" class="form-control" id="inputEmail4" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} required />
        </div>
        <div class="col-md-2 me-2">
          <label for="inputPassword4" class="form-label generalText fw-bold">
            Stock
          </label>
          <input type="number" placeholder="1" min="1" class="form-control" id="inputPassword4" value={qtdProductBuyed} onChange={(e) => setQtdProductBuyed(parseInt(e.target.value))} required />
        </div>

        <div class="col-5 d-flex align-items-end  mt-2 mt-sm-2 mt-md-0">
          <button type="submit" class="btn btn-primary btn-register me-2">
            Adicionar
          </button>
       
           <button type="submit" class="btn btn-primary btn-register  ms-2">
             comprar
          </button>
       
        
        </div>
      </form>
       </div>


      {/*Lista de produtos disponiveis para compra*/}
      <div className="col-12 d-flex justify-content-center mt-2">
        <div className="col-10 d-flex justify-content-end">
    <h5 className="mt-3 me-4 fw-bolder text-decoration-underline"><strong>Produtos disponíveis</strong></h5>
        </div>

      </div>

    <div className="d-flex justify-content-center">
<div className="col-10 mt-4 px-4">
<table className="table teste ">
  <thead>
    <tr>
     
      <th scope="col">Produto</th>
    
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {products.map((p) => (
    <tr>
    
      <td>{p.name}</td>
  
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
    </div>

    
  );
}

export default Comprar;
