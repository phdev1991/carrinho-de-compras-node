import * as Cartservice from "./services/cart.js"

import createItem from './services/item.js'

const cart = []
// const wishlist = [] // TODO: feature de lista de desejos
const wishlist=[]

// Função para adicionar item ao carrinho   
console.log(" \nshopee cart total:")
const item1 = await createItem("carrinho",20.99,2)
const item2 = await createItem("camisa",15.99,3)
const item3 = await createItem("bola",10.00,2)


await Cartservice.addItem(cart,item2)
await Cartservice.addItem(cart,item2)


await Cartservice.removeItem(cart, item2.name, 1)
await Cartservice.display(cart)


await Cartservice.calculateTotal(cart);


