class Meal {
    constructor (food){
        this.food = food
    }

    eat() {
        return 'eating...'
    }
}

burguer = new Meal('hambúrguer')

console.log(burguer.eat())

class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(val){
        this._saldo = parseFloat(val);
    }

    sacar(value) {
        if (value > this._saldo) return 'Operação Negada';
        this._saldo -= value;
    }

    depositar(value) {
        this._saldo += value;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.cartaoCredito = cartaoCredito;
        this.tipo = 'conta corrente'
    }

    get cartaoCredito() {
        return this.cartaoCredito;
    }

    set cartaoCredito(value) {
        if(value){
            this.cartaoCredito = value;
        }
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'conta universitária';
    }

    sacar(value) {
        if(value <= 500 && this._saldo - value >= 0) {
            this._saldo -= value
        }else{
            console.log('Operação Inválida')
        }
    }
}

const banc1 = new ContaBancaria(1234, 567891, 'conta geral', 1000);

console.log(banc1._saldo)

const univer1 = new ContaUniversitaria(1234, 123456, 1000);

univer1.sacar(512);
univer1.sacar(10);

console.log(univer1.saldo);

univer1.depositar(110);

console.log(univer1.saldo);