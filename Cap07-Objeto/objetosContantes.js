// pessoa -> endereço de memória 123 {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 ->{novo objeto}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria' // essa atribuição será ignorada porque foi freezada
pessoa.end = 'Rua ABC' // essa atribuição será ignorada porque foi freezada
delete pessoa.nome // essa deleção será ignorada porque foi freezada

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
