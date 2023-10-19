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
  const [QuantityProduct , SetQuantityProduct] = useState(setCart)

  // const handleSumProduct = (productId) => {
  //   SetQuantityProduct((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === productId
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     )
  //   );
  // };


  // const handleRestProduct = (productId) => {
  //   SetQuantityProduct((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === productId
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };


  return (
    <ContainerPay>
        <h1>Pagar</h1>
        <hr />

        {cart.map((mostrar , index) =>(
        <BoxInfo key={index}>
        <p>{mostrar.marca}</p>
        <p>{mostrar.nombre}</p>  
        <p>{mostrar.precio}</p>

        <Options key={index}>   
          <div>
            <button onClick={()=> handleSumProduct(mostrar.id)}>+</button>
            <p>{QuantityProduct}</p>
            <button onClick={()=> handleRestProduct(mostrar.id)}>-</button>
          </div>

          <button onClick={()=> DeleteProduct(mostrar.id)}>Eliminar</button>
        </Options>
        
        </BoxInfo>
        ))}
        

    </ContainerPay>
  )
}
