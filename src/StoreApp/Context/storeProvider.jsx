import { useContext, useState } from "react"
import { StoreContext } from "./storeContext"
import { getCartFromLocalStorage , saveCartLocalStorage } from '../../services/LocalStorageUtils'


export const StoreProvider = ({children})=>{

    const [cart , setCart] = useState(getCartFromLocalStorage())
  
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

    const DeleteProduct = (id)=>{

        const updateCart = cart.filter((product)=> product.id !== id);
    
        saveCartLocalStorage(updateCart)
        setCart(updateCart)
        
      }

    return(
        <StoreContext.Provider value={{cart , AddCardProduct , DeleteProduct}}>
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