function filtraPares(arr) {
    return arr.filter((item) => {
        return item % 2 === 0
    })
}

nums = [1,2,3,4,5,6,7,8,9,10,77,78,79]

console.log(filtraPares(nums))
