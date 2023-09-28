
// Guardar el carrito en el localStorage
export const saveCartLocalStorage = (cart)=>{
    localStorage.setItem('cart' , JSON.stringify(cart))
}


// Obtener el carrito del localStorage
export const getCartFromLocalStorage = () =>{

    const saveCart = localStorage.getItem('cart')

    //Si dentro de savedCart existe un elemento , este lo
    //parsea y lo muestra , de lo contrario manda un [] vacio.
    return saveCart ? JSON.parse(saveCart) : []
}