let findTheDifference = function(s, t) {
    const n = s.length
    let c = t.charCodeAt(n)

    for (let index = 0; index < n; index++) {
        c ^= s.charCodeAt(index) 
        c ^= t.charCodeAt(index)        
    }

    return String.fromCharCode(c)
}

console.log(findTheDifference("abcd", "abcde"))
console.log(findTheDifference("", "y"));