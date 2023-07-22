let isPrefixString = function(s, words) {
    let answer = ''

    for (let i = 0; i < words.length; i++) {
        answer += words[i]
        if(answer == s) return true
    }

    return false
}

console.log(isPrefixString("iloveleetcode", ["i","love","leetcode","apples"]))
console.log(isPrefixString("iloveleetcode", ["apples","i","love","leetcode"]))