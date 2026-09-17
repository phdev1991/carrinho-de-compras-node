// caso de uso dos itens do carrinho de compras

// ---> criar item com subtotal certo
async function createItem( name, price, quantity) {   
return {
    name: name,
    price: price,   
    quantity: quantity,
    subtotal:() => price * quantity
};

}

// item.js, linha 14-16
export default createItem