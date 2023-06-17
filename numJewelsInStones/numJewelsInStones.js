let numJewelsInStones = function(jewels, stones) {
    let count = 0

    const jewelsHt = {}
    for(const jewel of jewels) {
        jewelsHt[jewel] = true
        console.log('jewelsHt[jewel]', jewelsHt[jewel]);
    }

    for (const stone of stones) {
        if(stone in jewelsHt) count += 1
    }

    return count
}

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))