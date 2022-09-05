function calcular (tipo , valorr) {
    if (tipo === 'acao') {

        if (valorr === 'c') {
            document.getElementById('resultado').value = '' 
        }
        
        if (valorr === '+' || valorr === '-' || valorr === '+' || valorr === '*' || valorr === '/' || valorr === '.') {
            document.getElementById('resultado').value += valorr
        }

        if (valorr === '=') {
           var valor_campo = document.getElementById('resultado').value
           document.getElementById('resultado').value = (eval(valor_campo))
          
        }
    } else if(tipo === 'valor') {
     document.getElementById('resultado').value += valorr
    }
}

