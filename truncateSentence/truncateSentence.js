let truncateSentence = function(s, k) {
    const spl = s.split(' ')
    spl.length = k
    return spl.join(' ')
}

console.log(truncateSentence("Hello how are you Contestant", 4))
console.log(truncateSentence("What is the solution to this problem", 4))
console.log(truncateSentence("chopper is not a tanuki", 5))
