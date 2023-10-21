import React, { useEffect, useState } from 'react'
import { useStore } from '../Context/storeProvider'
import styled from '@emotion/styled'

const ContainerPay = styled.div`
  margin-top: 60px;
  display : flex;
  flex-direction: column;
  margin-left : 100px;
`

const BoxInfo = styled.div`
  border : 1px solid black;
`

const Options = styled.div`
  display : flex;
`

export default function PayStore() {

  
  const {cart , setCart , DeleteProduct} = useStore()

  const [productQuantities, setProductQuantities] = useState({});

  const handleSumProduct = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };


  const handleRestProduct = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId]) - 1, 0),
    }));
  };


  return (
    <ContainerPay>
        <h1>Pagar</h1>
        <hr />

        {cart.map((mostrar , index) =>(
        <BoxInfo key={index}>
        <p>{mostrar.marca}</p>
        <p>{mostrar.nombre}</p>  
        <p>Precio : {mostrar.precio}</p>

        <Options>   
          <div>
            <button onClick={()=>handleSumProduct(mostrar.id)}>+</button>
            <p>{productQuantities[mostrar.id]}</p>
            <button onClick={()=>handleRestProduct(mostrar.id)}>-</button>
          </div>

          <button onClick={()=> DeleteProduct(mostrar.id)}>Eliminar</button>
        </Options>
        
        </BoxInfo>
        ))}
        

    </ContainerPay>
  )
}
