var paremetro = prompt('')
var fundo = document.querySelector('body')

switch (parseInt(paremetro)) {
    case  1:
        document.write('parametro 1')
        fundo.style.background = 'red'
        break;
            case 2:
            document.write('parametro 2') 
                break;

    default:
        document.write('ERRO')
        break;
}
