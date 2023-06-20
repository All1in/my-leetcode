const cityArr = [
    ["London","New York"],
    ["New York","Lima"],
    ["Lima","Sao Paulo"]
]

const lettersArr = [
    ["B","C"],
    ["D","B"],
    ["C","A"]
]

const twoLettArray = [
    ["A","Z"]
]


let destCity = function(paths) {
   const from = new Set()

   for (const path of paths) {
      from.add(path[0])
   }
   
   for (const path of paths) {
      if(!from.has(path[1])) {
         return path[1]   
      } 
   }
}

console.log(destCity(cityArr))
console.log(destCity(lettersArr))
console.log(destCity(lettersArr))
