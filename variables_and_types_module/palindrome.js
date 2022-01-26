function checkPalindrome(string){
    if(!string) return;

    unspacedString = string.replaceAll(' ', '')
    reversedUnspacedString = unspacedString.split('').reverse().join('')

    return unspacedString.split('').reverse().join('') === unspacedString
}

console.log(checkPalindrome('roma me tem amor'))


function removeEvenNumbers(numbersArray){
    if(!numbersArray) return -1 
    if(!numbersArray.length) return -1

    numbersArray.forEach((value, i) => {
        if(value % 2 === 0) numbersArray[i] = 0
    });

    return numbersArray
}

console.log(removeEvenNumbers([1, 2, 2, 4 , 3, 4, 5, 6, 7, 89, 0]))

console.log(removeEvenNumbers([]))


let a = 0
let b = null
let c

console.log(`${a}, ${b}, ${c}`)