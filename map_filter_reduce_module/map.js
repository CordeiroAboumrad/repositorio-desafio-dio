const maca = {
    value: 2
};

const laranja = {
    value: 3
};

function mapComThis(arr, thisArg) {
    return arr.map((item) => {
        return item * thisArg.value;
    }, thisArg);
}


const nums = [1, 2]

console.log(`${mapComThis(nums, laranja)}`)


function mapSemThis(arr) {
    return arr.map((item) => {
        return item * 2
    })
}

const nums2 = [2, 4, 6, 8, 10]

console.log(mapSemThis(nums2))
console.log(nums2)
