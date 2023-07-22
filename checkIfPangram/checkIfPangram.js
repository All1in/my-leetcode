let checkIfPangram = function(sentence) {
    const letterCountMap = new Map();

    for (const char of sentence) {
        letterCountMap.set(char, (letterCountMap.get(char) || 0) + 1);
    }

    return letterCountMap.size === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))
