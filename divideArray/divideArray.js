let divideArray = function(nums) {
    let chk = new Set()

    for (const num of nums) {
        if(chk.has(num)) {
            chk.delete(num)
        } else {
            chk.add(num)
        }
    }

    return chk.size === 0
}

console.log(divideArray([3,2,3,2,2,2]))
console.log(divideArray([1,2,3,4]))
