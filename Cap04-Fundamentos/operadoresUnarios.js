let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1 // este tem precedĂȘncia sobre num1++
console.log(num1)

console.log(++num1 === num2--) // evitar
console.log(num1 === num2)
