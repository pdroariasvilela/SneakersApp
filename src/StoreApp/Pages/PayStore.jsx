import React, { useEffect, useState } from 'react'
import { useStore } from '../Context/storeProvider'
import styled from '@emotion/styled'
import { GoTrash } from "react-icons/go";

const ContainerPay = styled.div`
  margin-top: 60px;
  display : flex;
  flex-direction: column;
  margin-left : 100px;
  

`

const BoxInfo = styled.div`
  border : .5px solid black;
  display: flex;
  width: 60%;
  height: 100px;
  overflow: hidden;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  margin: 3px;
`

const Options = styled.div`
  display : flex;
  flex-direction: row;
  width: 10%;
`

const ButtonClassic = styled.button`
  width: 100px;

`

const Image = styled.img`
  width: 10%;

`

const InfoPay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 15px;
`

export default function PayStore() {

  
  const {cart , setCart , DeleteProduct} = useStore()


function onHandleCSumProduct (id){
 
  setCart(cart.map(item => item.id === id ? {...item , cantidad: item.cantidad + 1} : item ))
}

function onHandleCRestProduct (){
  return setCantidad((cantidad)=>{
    return cantidad - 1
  })
}




  return (
    <ContainerPay>
        <h1>Carro de compra</h1>
        <hr />

        {cart.map((mostrar) =>(
        <BoxInfo key={mostrar.id}>
        <Image src={mostrar.url_imagen} />
        <InfoPay>
        <p>{mostrar.marca}</p>
        <p>{mostrar.nombre}</p>  
        <p>Precio : {mostrar.precio}</p>
        </InfoPay>

        {/* <Options>
          <button onClick={()=> onHandleCSumProduct(mostrar.id)}>+</button>
          <p>{mostrar.cantidad}</p>
          <button onClick={onHandleCRestProduct}>-</button>
        </Options> */}
        <Options>  
          <GoTrash style={{cursor : 'pointer' , color : 'gray' , fontSize: '20px'}} onClick={()=> DeleteProduct(mostrar.id)}/>
        </Options>
        
        </BoxInfo>
        ))}
        

    </ContainerPay>
  )
}
