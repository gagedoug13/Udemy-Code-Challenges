// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let finalArray = []
    let arr = str.split(' ')
    for (let word of arr) {
       let letters = word.split('')
       finalArray.push(letters[0].toUpperCase() + word.slice(1))
    }
    return finalArray.join(' ')
} 

module.exports = capitalize;

// alternate solution -
// return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')