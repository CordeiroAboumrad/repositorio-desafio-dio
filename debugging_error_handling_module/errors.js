function treatArray(arr, num){
    try{
        if(!arr || !num) throw new ReferenceError('Parameters were not send')

        if(typeof(arr) !== 'object') throw new TypeError('Array informed is not an Object')

        if(typeof(num) !== 'number') throw new TypeError('Number informed is not a Number')

        if(arr.length !== num) throw new RangeError('Length of the array is different from the '
        + 'number informed')
        
    }catch(e){
        console.log(e instanceof(Error))
        console.log(e)
    }
}

// treatArray([], 2)
// treatArray(2)
// treatArray([1], 'a')
treatArray([1,2], 3)