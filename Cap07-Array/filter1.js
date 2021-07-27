const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(
  produtos.filter(function (p) {
    return false
  })
)

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil == true // o true é opcional

console.log(produtos.filter(produtoFragil).filter(produtoCaro))
