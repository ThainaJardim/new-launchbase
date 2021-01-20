// cálculo de IMC

const nome = 'Thainá'
const peso = 70
const altura = 1.63

const imc = peso / (altura * altura)
let message = ""

if ( imc >= 30){
  message =  `Thainá, seu imc é de ${imc} e você está acima do peso`
} else {
    message = `Thainá, seu imc é de ${imc} e você não está acima do peso`

}
console.log(message)

/* ----------------------------------------------------------------*/

// cálculo aposentadoria


const nome = 'Thainá'
const sexo = "F"
const idade = 26
const contribuicao = 7
const calc = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}