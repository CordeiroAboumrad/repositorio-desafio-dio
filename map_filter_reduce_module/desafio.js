const lista = [{
        nome: 'sabão em pó',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 12
    },{
        nome: 'toalha',
        preco: 30
    }
]

const saldoDisponivel = 100

function calculaSaldo(saldo, lista) {
    return lista.reduce((acc, current) => {
        return acc -= current.preco
    }, saldo);
}


console.log(calculaSaldo(saldoDisponivel, lista))