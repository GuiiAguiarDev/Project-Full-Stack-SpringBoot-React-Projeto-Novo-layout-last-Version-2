import React, { useEffect } from "react";
import "./Home.css";
//Importei o comando abaixo para gente utilizar e conseguir navegar entre as paginas
//pois nao utilizamos "a href com react", lembrando que tem que está configurado em App.jsx tbm
import { Link } from "react-router-dom";
import { useState } from "react";

import tv from "./img/tv.jpg";
import videoGame from "./img/videoGame.jpg";
import notebook from "./img/pc.jpg";
import phone from "./img/phone.jpg";
import iconeSaibaMais from "./img/iconeSaibaMais.png";
import tablet from "./img/tablet.jpg";
import relogio from "./img/relogio.jpg";
import iconeFooter from "./img/iconeFooter.png";
const Home = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /*Formatar data para mostrar o que eu quero, no caso dia da semana e data, se eu nao quiser formatar
    basta apagar o codigo abaixo e deixar so o de cima e colocar lá no html o codigo abaixo
     <strong>{dateTime.toLocaleDateString("pt-BR")}</strong> */

  const formatDate = (date) => {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long", //Dia semana
      day: "2-digit", //Dia
      month: "2-digit", //mes
      year: "numeric", // ano
    });
  };

  return (
    <div>
      <div className="col-12 text-center">
        <p className="emphasisTitle text-uppercase">
          Duct<span className="text-black we fs-3">&</span>Product
        </p>
      </div>

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#fd">
            Home
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/comprar">
            Comprar
          </Link>
        </li>
        
      </ul>

      <div className="col-12">
        <p className="emphasisTitle text-center mt-5">Tudo o que você precisa, em um só lugar</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-8 boxGeneralText d-flex justify-content-center">
          <p className="generalText text-center">Encontre tudo o que você precisa em um só lugar, com variedade, qualidade e preços que cabem no seu bolso. Trabalhamos com marcas que você confia e produtos essenciais para o seu dia a dia, oferecendo praticidade, economia e uma experiência de compra simples e eficiente para toda a família.</p>
        </div>
      </div>

      <div className="cardsBox mt-5">
        <div className="cards">
          <img src={tv} alt="oi" />
        </div>
        <div className="cards">
          <img src={videoGame} alt="oi" />
        </div>
        <div className="cards">
          <img src={notebook} alt="oi" />
        </div>
        <div className="cards">
          <img src={phone} alt="oi" />
        </div>
      </div>

      <div className="col-12 boxMoreLearnGeral justify-content-center justify-content-sm-center justify-content-lg-start  mt-5 ">
        <div className="col-8 p-5">
          <p className="col-12 textTitleInformation  p-2 text-center text-lg-start d-inline-block">
            <strong>Saiba mais!</strong>
          </p>

          <div className="col-lg-5 col-sm-12 d-flex lilo flex-wrap flex-lg-nowrap  justify-content-sm-center justify-content-lg-start gap-5 p-2  ">
            <div className="caixa1 col-sm-12 align-items-center col-md-12">
              <img src={tablet} alt="teste" />
              <p className="dateImage">
                <strong>{formatDate(dateTime)}</strong>
              </p>
              <p className="generalText">Descubra as novas tecnologias em tablets, com alto desempenho, telas avançadas e inteligência artificial. Modelos modernos ideais para trabalho, estudo e entretenimento, com bateria duradoura e acessórios inteligentes.</p>
            </div>
            <div className="caixa1 col-sm-12 align-items-center col-md-12">
              <img src={relogio} alt="teste" />
              <p className="dateImage">
                <strong>{formatDate(dateTime)}</strong>
              </p>
              <p className="generalText">Descubra as novas tecnologias em relógios inteligentes, com monitoramento de saúde, desempenho aprimorado e recursos inteligentes. Modelos modernos ideais para o dia a dia, esportes e conectividade, com bateria duradoura e design elegante.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-8 d-none d-lg-flex flex-column col-lg-4 mb-2 mb-lg-0">
          <img className="oi" src={iconeSaibaMais} alt="" />
        </div>
      </div>
      <footer className="col-12 d-flex justify-content-around">
        <div className="col-8 border-top  text-center text-sm-start d-sm-flex justify-items-center justify-content-sm-around py-5 my-2">
          <div className=" d-flex justify-content-center">
          <small className=" d-flex align-items-center">2025 Company, Inc</small>
          </div>
          <div className="col-sm-4 text-center mt-2 mb-1 ">
          <img className="imgrodape" src={iconeFooter} alt="logo" />
          </div>
          <div className=" d-flex justify-content-center justify-content-sm-start justify-content-md-start ">
          <ul className="d-flex list-unstyled gap-2 ">
            <li className="border-bottom">Home</li>
            <li className="border-bottom">Comprar</li>
            <li className="border-bottom">produtos</li>
            
          </ul>
        
          </div>
           
        </div>
      </footer>
    </div>
  );
};

export default Home;
