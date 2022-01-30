function somaValores(arr) {
    return arr.reduce((acc, current) => {
        return acc += current
    });
}

const arr = [1, 2, 3, 4]

console.log(somaValores(arr))
