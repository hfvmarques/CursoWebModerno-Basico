function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto('Furadeira', 200))
console.log(criarProduto('Notebook', 3000))
