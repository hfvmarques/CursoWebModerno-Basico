const imprmirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('Quadro de Honra')
      break
    case 8:
    case 7:
      console.log('Aprovado')
      break
    case 6:
    case 5:
    case 4:
      console.log('Recuperação')
      break
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota inválida')
  }
}

imprmirResultado(10)
imprmirResultado(8.9)
imprmirResultado(6.55)
imprmirResultado(2.3)
imprmirResultado(0)
imprmirResultado(-1)
imprmirResultado(11)
