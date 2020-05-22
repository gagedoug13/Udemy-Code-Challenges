// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let counter = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let input = str.toLowerCase()
    for (let item of input) {
       if (vowels.includes(item)) {
           counter++
       }
    }
    return counter
}

module.exports = vowels;
