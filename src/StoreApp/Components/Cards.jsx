import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";


import { zapatillas } from "../../services/zapatillas";
import { useStore } from "../Context/storeProvider";

export default function Cards() {
  const ContainerCard = styled.div`
    width : 300px;
    display: flex;
    flex-direction : column;
    text-align : center;
    border : 1px solid gray;
    border-radius : 10px;
    margin : 30px;
    padding : 20px;
    box-shadow: 5px 5px 15px gray;

  `;

  const Img = styled.div`
    display:flex;
    justify-content : center;
    width: 300px;
    
    img {
        width : 200px
    }
  `;
  
  const Button = styled.button`
    border-radius : 5px;
    width : 70%;
    background : black ;
    color : white ;
    padding : 5px;
  `


  const {cart , AddCardProduct } = useStore()

  useEffect(() => {
    console.log(cart);
  }, [cart]);




  return (

    <>
        {zapatillas.map((zapatillasData , index) =>(
      <ContainerCard key={index}>

        <Img>
          <img src={zapatillasData.url_imagen} alt="" />
        </Img>
        <div>
          <h5>{zapatillasData.marca}</h5>
          <p>{zapatillasData.nombre}</p>
          <p>S/.{zapatillasData.precio}</p>
          <Button onClick={() => AddCardProduct(zapatillasData)}>Agregar</Button>
        </div>
        </ContainerCard>
        ))}
    </>

  );
}
