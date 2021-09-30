let data = require('./data')
console.log(data.vegetables)

//gib nur das ERSTE Element des Arrays zurück
let first = data.animals.shift()
console.log(first)

//gib alle AUSSER dem letzten Element des Arrays zurück
data.animals.pop()
console.log(data.animals)

//gib nur das LETZTE Element des Arrays zurück
let last = data.animals.pop()
console.log(last)

//gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
data.vegetables.shift()
console.log(data.vegetables)
console.log(data.vegetables.slice(1))

//schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt
const removed = data.vegetables.filter(elt => elt.length > 5)
console.log(removed)

//gib ein Array zurück, dass nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente!
let sorted = data.numbers.sort(function compareNumbers(a, b) {
    return a - b;
})
console.log(data.numbers)
let uniqueNum = new Set(sorted)
console.log(uniqueNum)

//lev1.3
let func = require('./function.js')
console.log(func(6, 7, "*"))
