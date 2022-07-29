//window.alert("Seja muito bem vindo")


var nota = prompt('Qual a nota do aluno?')
var faltas = prompt('Faltas do aluno')
var fundo = document.querySelector('body')

var media = 7
var faltasMaximas =15

if (nota >= media && faltas <= faltasMaximas) {
    document.write('Aluno aprovado')
    fundo.style.background='blue'
    fundo.style.transition='9s'
    
} else {
    document.write('Aluno reprovado')
    fundo.style.background='red'
    fundo.style.transition='2s'

}

//var resultado = (nota >= media && faltas <= faltasMaximas) ?'Aprovado' : 'Reprovado'
//document.write(resultado)

//var resultado =  (nota >= media && faltas <= faltasMaximas) ? 'Aprovado' : 'Reprovado'
//document.write(resultado)



//var fundo = document.querySelector('body')
//fundo.style.background = 'red'

