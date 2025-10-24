

const getcartFromLocalStorage = () => {
    const sotoredCardString = localStorage.getItem("cart")
    if (sotoredCardString) {
        const storedCard = JSON.parse(sotoredCardString)
        return (storedCard)
    }
    return ([])
}

const saveCartToLocalStorage = cart => {
    const cardStringiFy = JSON.stringify(cart)
    localStorage.setItem("cart",cardStringiFy)
} 

const addItemToCartLocalStorage = id => {
    const cart = getcartFromLocalStorage()
    const newCart = [...cart ,id]
    saveCartToLocalStorage(newCart)
}

export{
    getcartFromLocalStorage as getCartStorage,
    addItemToCartLocalStorage as addItmesStorage
}