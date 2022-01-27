function approvedStudents(arr, approvalAverage){
    let approved = []
    arr.forEach((value, i) => {
        if(arr[i] >= approvalAverage) approved.push(arr[i])
    });

    return approved
}

console.log(approvedStudents([1,3,4,5,7,9,8], 7))


function approvedStudentsDestructuring(arr, approvalAverage){
    let approved = []
    arr.forEach((value, i) => {
        if(value.nota >= approvalAverage) approved.push(value)
    });

    return approved;
}

console.log(approvedStudentsDestructuring([{nome: 'Jean', nota: 10, turma: '1A'}, {nome: 'José', nota: 6.5, turma: '3C'}, {nome: 'Paulo', nota: 8, turma: '2B'}], 7))


function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Jean',
    idade: 32
}

const pessoa2 = {
    nome: 'Joana',
    idade: 33
}

console.log(calculaIdade.call(pessoa1, 5))
console.log(calculaIdade.call(pessoa2, 5))

console.log(calculaIdade.apply(pessoa1, [5]))
console.log(calculaIdade.apply(pessoa2, [5]))