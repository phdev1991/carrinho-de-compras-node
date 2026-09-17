## Objetivo

Criar um carrinho de compras baseado no carrinho de compras da Shopee, aonde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente.

// domínio da aplicação: carrinho de compras

// as entidades representadas
// → carrinho
// → itens

## Entidades

### Item
- `id`
- `name`
- `price`
- `quantity`
- `calculateSubtotal()` → retorna `price * quantity`

### Cart
- `items` — lista de itens no carrinho
- `wishlist` — lista de desejos
- `addItem(item)` — adiciona um item (soma quantidade se já existir)
- `addToWishlist(item)` — adiciona um item à lista de desejos
- `removeItem(id)` — remove um item pelo id
- `removeItemByIndex(index)` — remove um item pelo índice
- `calculateItemSubtotal(id)` — subtotal de um item específico
- `calculateTotal()` — soma o subtotal de todos os itens do carrinho
- `displayCart()` — exibe o carrinho formatado no console

## Como rodar

```bash
npm install
npm start
```

## Estrutura

```
06-shopee-cart/
├── src/
│   ├── item.js
│   └── cart.js
├── index.js
├── package.json
└── readme.md
```
