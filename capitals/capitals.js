function capitals(word) {
    const map = new Map();

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            if (map.has(word[i])) {
                map.get(word[i]).push(i);
            } else {
                map.set(word[i], [i]);
            }
        }
    }

    const result = [];
    for (const indexes of map.values()) {
        result.push(...indexes);
    }

    return result;
}

console.log(capitals('CodEWaRs'))
