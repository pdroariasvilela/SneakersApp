import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";


import { zapatillas } from "../../services/zapatillas";
import { useStore } from "../Context/storeProvider";

export default function Cards() {
  const ContainerCard = styled.div`
    width : 250px;
    display: flex;
    flex-direction : column;
    border-radius : 10px;
    margin : 5px;
    padding : 20px;
    box-shadow: 5px 5px 15px gray;
    overflow: hidden;
    align-items: center;
    text-align: left;
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
    border-radius : 20px;
    width : 100%;
    height: 40px;
    background : black ;
    color : white ;
    padding : 5px;

    border: none;
    outline: none;
  `

  const PriceNormal = styled.p`
    text-decoration:line-through;
  `

  const PriceOferta = styled.p`
    color : red;
    font-weight: 700;
`

 const BoxInfoCard = styled.div`
    width: 100%;
    margin : 3px;
    line-height: 1;
    margin-left: 33px;
    
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
        <BoxInfoCard>
          <h5>{zapatillasData.marca}</h5>
          <p>{zapatillasData.nombre}</p>
          <PriceNormal>S/.{zapatillasData.precio}</PriceNormal>
          <PriceOferta> Oferta S/.{zapatillasData.precio_oferta}</PriceOferta>
        </BoxInfoCard>
          <Button onClick={() => AddCardProduct(zapatillasData)}>COMPRAR</Button>
        </ContainerCard>
        ))}
    </>
  );
}
