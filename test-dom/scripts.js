/*var variavel1 = prompt('Digite algum numero:')
var variavel2 = prompt('Digite outro numero:')
variavel1 = parseInt(variavel1)
variavel2 = parseInt(variavel2)
var res = variavel1 + variavel2

 if (res == 30) {
    document.write(`Realemnte o valor é = a ${res}`)
 } else if(res <= 20 ) {
    document.write(`= ou mneos que 20 não pode ser calculado seu valor é  ${res}`)
 }else{
    document.write(`valor não pode ser calculado`)
 }

*/



/*var varialvel1 = prompt("Digite um numero:")
var varialvel2 = prompt("Digite outro numero:")

varialvel1 = parseInt(varialvel1)
varialvel2 = parseInt(varialvel2)

var res = (varialvel1 + varialvel2) /2 


document.write(`${res}`)*/

/*A média de aprovação é 8 */
var media1 = prompt('Qual a sua primeira nota?')
var media2 = prompt('Qual a sua segunda nota?')

media1 = parseInt(media1)
media2 = parseInt(media2)

var res = (media1 + media2) /2

if (res >=8) {
    window.alert(`Você foi aprovado 
                Sua media foi ${res}`)
} else if (res >=5 ) {
    window.alert("Você esta de recuperação")
}else{
    window.alert("REPROVADO")
}

//document.write(`${res}`)//


