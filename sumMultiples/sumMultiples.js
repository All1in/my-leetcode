let sumOfMultiples = function(n) {
   let arrayNeed = []
   for (let i = 1; i <= n; i++) {
       if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0) arrayNeed.push(i)
   }
   return arrayNeed.reduce((acc, val) => acc + val)
}

console.log(sumOfMultiples(7))
console.log(sumOfMultiples(10))
console.log(sumOfMultiples(9))
