// cadeira de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // não é recomendado fazer isso
const avo = { attr1: 'A' }
const pai = { __proto___: avo, attr2: 'B' } // desta forma não funcionou
const filho = { __proto___: pai, attr3: 'C' } // desta forma não funcionou
// Object.setPrototypeOf(pai, avo) // desta forma funcionou
// Object.setPrototypeOf(filho, pai) // desta forma funcionou
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(pai.attr0, pai.attr1, pai.attr2)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
