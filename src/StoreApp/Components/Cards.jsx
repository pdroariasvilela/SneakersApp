import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";


import { zapatillas } from "../../services/zapatillas";
import { saveCartLocalStorage , getCartFromLocalStorage } from "../../services/LocalStorageUtils";

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
  const [cart , setCart] = useState(getCartFromLocalStorage())

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const updateCart = (newCart)=>{

    setCart(newCart)
    saveCartLocalStorage(newCart)
  }

  const AddCardProduct = (product)=>{
    const isProductInCart = cart.some((item) => item.id === product.id)

    if(!isProductInCart){
      const newCart = [...cart, product]
      updateCart(newCart)

    }else{
      console.log("El producto ya esta en el carrito")
    }
  }



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
