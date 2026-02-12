//Como é um metodo então tem que ser o nome do metodo que estamos fazendo
//como comprar é um metodo no memu java passamos o nome dele aqui tbm agr se foss eum entidade
//poderiamos passar o nome dela ou outra coisa, segue esse racicionio
import React, { useState } from "react";
import axios from "axios";

import "./ProductForm.css";

function Comprar({ onUpdate }) {
  const [nameProduct, setNameProduct] = useState("");
  const [qtdProductBuyed, setQtdProductBuyed] = useState(1);

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

      onUpdate(response.data); //Atualiza o invoice no front
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
      <form className="col-8 row" onSubmit={handleComprar}>
        <h2>Comprar Product</h2>
        <div class="col-md-4 me-2">
          <label for="inputEmail4" class="form-label">
            Name
          </label>
          <input type="text" placeholder="Product Name" class="form-control" id="inputEmail4" value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} required />
        </div>
        <div class="col-md-2 me-2">
          <label for="inputPassword4" class="form-label">
            Stock
          </label>
          <input type="number" placeholder="1" min="1" class="form-control" id="inputPassword4" value={qtdProductBuyed} onChange={(e) => setQtdProductBuyed(parseInt(e.target.value))} required />
        </div>

        <div class="col-5 d-flex">
          <button type="submit" class="btn btn-primary btn-register me-2">
            Adicionar Item
          </button>
       
           <button type="submit" class="btn btn-primary btn-register ms-2">
            Finalizar compra
          </button>
       
        
        </div>
      </form>
    </div>
  );
}

export default Comprar;
