function calculadora(){
    let v1 = Number(prompt('Digite o primeiro valor:'))
    let v2 = Number(prompt('Digite o segundo valor:'))

    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão real (/)\n5 - Resto (%)\n6 - Potenciação (**)'))
        
    switch (operacao) {
        case 1:
            soma(v1, v2)
            break;
        case 2:
            subtracao(v1, v2)
            break;
        case 3:
            multiplicacao(v1, v2)
            break;
        case 4:
            divisaoReal(v1, v2)
            break;
        case 5:
            resto(v1, v2)
            break;
        case 6:
            potenciacao(v1, v2)
            break;
        default:
            alert('Operação não permitida')
            break;
    }

    novaOperacao()

}

function soma(a, b){
    alert(`${a} + ${b} = ${a + b}`)
}

function subtracao(a, b){
    alert(`${a} - ${b} = ${a - b}`)
}

function multiplicacao(a, b){
    alert(`${a} * ${b} = ${a * b}`)
}

function divisao(a, b){
    alert(`${a} / ${b} = ${a / b}`)
}

function resto(a, b){
    alert(`${a} % ${b} = ${a % b}`)
}

function potenciacao(a, b){
    alert(`${a} ** ${b} = ${a ** b}`)
}

function novaOperacao(){
    let opcao = Number(prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não'))

    switch (opcao) {
        case 1:
            calculadora()
            break;

        case 2:
            alert('Até mais!')
            break;
    
        default:
            alert('Por favor, digite uma opção válida')
            novaOperacao()
            break;
    }
}


calculadora()