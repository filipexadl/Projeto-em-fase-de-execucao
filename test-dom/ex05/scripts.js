var nome = prompt("Qual o seu nome?")
var altura = prompt("Qual a sua altura")
var peso = prompt("Qual o seu peso?")

altura = parseFloat(altura)
peso = parseFloat(peso)


var altura = altura /100

var m = peso / (altura * altura)


if (m >= 0 && m <16) {
    document.write(" Baixo peso muito grave")
} 
else if ( m >= 16 && m <=16.99){
    document.write(" Baixo peso grave")
}
else if ( m >= 17 && m <=18.49) {
    document.write(" Baixo peso ")
}
else if ( m > 18,50 && m <14.99){
    document.write(" Peso normal ")
}

else if ( m >= 25 && m <=24.49) {
    document.write(" Sobrepeso")
}
else if ( m > 30 && m <34.99){
    document.write(" Obesidade grau 1")
}

else if ( m > 35 && m <39.99){
    document.write(" Obesidade grau 2")
}

else{
    document.write(" Obesidade grau 3")
}

document.write(` Seu imc é = ${m} `)
