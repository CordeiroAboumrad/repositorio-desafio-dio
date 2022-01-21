function comparaNumeros(a, b){
    equal_numbers = (a === b) ? '' : 'não'
    check_sum_gt_10 = ( (a + b) >= 10 ) ? 'maior ou igual a' : 'menor'
    check_sum_gt_20 = ( (a + b) >= 20 ) ? 'maior ou igual a' : 'menor'

    alert(`Os números ${a} e ${b} ${equal_numbers} são iguais. Sua soma é ${check_sum_gt_10} que 10 e ${check_sum_gt_20} que 20.`)
}


function initialize(){
    num1 = Number(prompt('Digite o primeiro número:'))
    num2 = Number(prompt('Digite o segundo número:'))
    
    comparaNumeros(num1, num2)
}

initialize()