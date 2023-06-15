let sortPeople = function(names, heights) {
    let people = []
    for (let i = 0; i < names.length; i++) {
        people.push({ name: names[i], height: heights[i] })
    }

    people.sort((a, b) => b.height - a.height)

    let sortedNames = people.map(person => person.name)

    return sortedNames
}

console.log(sortPeople(["Mary", "John", "Emma"], [180,165,170]))
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]))
