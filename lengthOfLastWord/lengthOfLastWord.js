let lengthOfLastWord = function(s) {
    const reg = /\w+/gm
    const myArr = s.match(reg)
    return myArr[myArr.length - 1].length
}

console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
