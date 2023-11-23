import { useContext, useState } from "react"
import { StoreContext } from "./storeContext"
import { getCartFromLocalStorage , saveCartLocalStorage } from '../../services/LocalStorageUtils'


export const StoreProvider = ({children})=>{

    const [cart , setCart] = useState(getCartFromLocalStorage())
  
    const updateCart = (newCart)=>{
  
      setCart(newCart)
      saveCartLocalStorage(newCart)
    }
    
    //Añadir producto al carro
    const AddCardProduct = (product)=>{
      const isProductInCart = cart.some((item) => item.id === product.id)
  
      if(!isProductInCart){
        const newCart = [...cart, product]
        updateCart(newCart)
  
      }else{
        console.log("El producto ya esta en el carrito")
      }
    }


    //Eliminar producto del carro
    const DeleteProduct = (id)=>{

        const updateCart = cart.filter((product)=> product.id !== id);
    
        saveCartLocalStorage(updateCart)
        setCart(updateCart)
        
      }


    const QuantityProduct = () =>{

        const numberCart = cart.length;
        return numberCart
    }

    return(
        <StoreContext.Provider value={{cart , AddCardProduct , DeleteProduct, QuantityProduct , setCart}}>
            {children}
        </StoreContext.Provider>
    )
}

export function useStore(){
    const context = useContext(StoreContext)
    if (!context) {
        throw new Error('useStore debe utilizarse dentro de un proveedor de StoreContext');
      }
    return context
}