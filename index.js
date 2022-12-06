const { input } = require('./input')
const { scoreObject } = require("./scores")

const groupsOfThree = []

for(let i = 0; i < input.length; i += 3){
    groupsOfThree.push([input[i], input[i + 1], input[i + 2]])
}

let foundLetters = []
groupsOfThree.forEach(word => {
    let flag = true
    for(let i = 0; i < word[0].length; i++){
        // iterate through second string only if we haven't found the letter yet
        for(let j = 0; j < word[1].length; j++){
            if(word[0][i] === word[1][j] && flag){
                // Iterate through final string only if a common letter between the first two is found
                for(let k = 0; k < word[2].length; k++){
                    if(word[0][i] === word[2][k] && flag){
                        foundLetters.push(word[0][i])
                        flag = false;
                    }
                }
            }
        }
    }
})

console.log(foundLetters.length)
let score = 0;
foundLetters.forEach(letter => {
    let letterScore = scoreObject[letter]
    score += letterScore
})

console.log(score)