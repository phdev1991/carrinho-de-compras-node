//quais ações  o meu carrinho de compras pode fazer

// adicionar item
async function addItem(UseCart,item) {
    // implementation for adding item to cart
    UseCart.push(item);
}

// Calcular o total do carrinho
async function calculateTotal(UseCart) {
    const result = UseCart.reduce((Total,item)=>Total+item.subtotal(),0)

    console.log(result)
    // implementation for calculating total price of items in cart
}

async function deleteItem(Usecart,name) {
    const index = Usecart.findIndex((item)=> item.name === name);

    if (index !== -1){
        Usecart.splice(index,1);
    }
    
}

async function display(Usecart,item) {

    console.log("\nItens do Carrinho:")
    Usecart.forEach((item,index)=>{
            console.log(`${index+1}.${item.name}- R$ ${item.price} | ${item.quantity}|subtotal ${item.subtotal()}`)

    })
    
}

async function removeItem(Usecart, name, quantity) {
    const index = Usecart.findIndex((item) => item.name === name);

    if (index !== -1) {
        Usecart[index].quantity -= quantity;

        if (Usecart[index].quantity <= 0) {
            Usecart.splice(index, 1);
        }
    }
}



export{addItem,deleteItem,removeItem,calculateTotal,display};