import React, { useEffect, useState } from 'react'
import { getCartFromLocalStorage } from '../../services/LocalStorageUtils'
import { useStore } from '../Context/storeProvider'

export default function PayStore() {

  const {cart , setCart , DeleteProduct} = useStore()

  // useEffect(()=>{

  //   const mostrarCarrito = getCartFromLocalStorage()
  //   setCart(mostrarCarrito)

  // },[])

  // const DeleteProduct = (id)=>{

  //   const updateCart = cart.filter((product)=> product.id !== id);

  //   saveCartLocalStorage(updateCart)
  //   setCart(updateCart)
    
  // }

  return (
    <>
        <h1>Pagar</h1>
        <hr />

        {cart.map((mostrar , index) =>(
        <div key={index}>
        <p>{mostrar.marca}</p>
        <p>{mostrar.nombre}</p>  
        <p>{mostrar.precio}</p>
        <button onClick={()=> DeleteProduct(mostrar.id)}>Eliminar</button>
        </div>
        ))}
        

    </>
  )
}
