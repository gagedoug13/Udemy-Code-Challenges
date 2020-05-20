// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let pyramidArray = []
    for (let t=0; t < n; t++) {
        pyramidArray.push(' ')
    }

    for (let i=0; i < n; i++) {
        pyramidArray.unshift('#')
        pyramidArray.pop()
        console.log(pyramidArray.join(''))
    }

}

module.exports = steps;