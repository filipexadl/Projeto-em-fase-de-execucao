var idade = prompt('Qual a sua idade?')
var foto = document.querySelector('body')

if (idade >0 && idade<15) {
    document.write('Você é uma criança')
    foto.style.backgroundImage = "url('img/ciranda.jpg')" 
    

} else if(idade >=15 && idade <30) {
    document.write('Você é um jovem')
    foto.style.backgroundImage = "url('img/jovens.jpg')" 

}if (idade >=30 && idade <60){
    document.write('Você é um Adulto')
    foto.style.backgroundImage = "url('img/adultos.jpg')" 
    

}else if(idade >=60){
    document.write('Você é um Idoso')
    foto.style.backgroundImage = "url('img/idosos.jpg')" 
   
}if (idade <0){
    document.write(Error)
}
