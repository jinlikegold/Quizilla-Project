
import { quizResults } from './data.js'

/* 
separation of concerns:
1) record selections
2) get matching data
3) select highest # of matches
4) render matching data along with text input - revealResults()

So far:

- When the form button is clicked, a modal pops up that will contain results.
- Added textarea input to rendered results - what you write in the textarea will be in there!
- When you click outside the popup, the modal closes.
- Create data object that contains the quiz results with fantasy name, verb, image links, alt text *
- Import data to this file
- Added form values to data object
- Created a function to ping the corresponding data object when a radio selection is made that matches


Still need to implement:

- need to tally the number of times a radio selection matches stored results data
- get the highest # and return the corresponding result
- Have the correct results render in the modal upon submission
- Add remaining data to rendered results, i.e. "You are a [fantasy name] being! Who [verb] '[textarea value]'"
- Decide what to do with email input
- Decide what to do with gender input (maybe remove or somehow weave in as pronouns)
- Create highlight styling when a radio item is selected, for better visibility

*/


let surveyForm = document.querySelector('#survey-form')
let submitBtn = document.querySelector('#submit-btn')
let resultsModal = document.querySelector('.results-modal')
let inputThoughts = document.querySelector('#input-thoughts')

// prevent default form behavior (refreshing upon submit)
surveyForm.addEventListener('submit', (e)=> e.preventDefault())

// close modal box by clicking outside of it
document.addEventListener('click', (e) => {
    if (!resultsModal.contains(e.target) && !submitBtn.contains(e.target)) {
        resultsModal.style.display = 'none'
    }
})

// display results in modal box, upon clicking on submit button
let revealResults = () => {
    resultsModal.style.display = "flex"
    resultsModal.innerHTML = `
    <h3>Here are your results!</h3>
    <p>You are a *being* who *verbs* ${inputThoughts.value}</p>
    <img>
    `
}
submitBtn.addEventListener('click', revealResults)

// This function is able to get the value of what is selected for each question & match it to a stored result in the data!
function recordSelections () {
    let catSelections = document.getElementsByName('cat')
    for (let catSelection of catSelections) {
        if (catSelection.checked) {
            let firstAnswer = catSelection.value // this gives the value of the selected answer      
            let firstResult = quizResults.filter((result) => {
                if (result.formValue.includes(firstAnswer)) {
                    console.log(result) // this logs out the corresponding object (result) in the data!
                } 
            })
        } 
    }
    let greetingSelections = document.getElementsByName('greeting')
    for (let greetingSelection of greetingSelections) {
        if (greetingSelection.checked) {
            let secondAnswer = greetingSelection.value // this gives the value of the selected answer      
            let secondResult = quizResults.filter((result) => {
                if (result.formValue.includes(secondAnswer)) {
                    console.log(result) // this logs out the corresponding object (result) in the data!
                } 
            })
        } 
    }
    let magicSelections = document.getElementsByName('greeting')
    for (let magicSelection of magicSelections) {
        if (magicSelection.checked) {
            let thirdAnswer = magicSelection.value // this gives the value of the selected answer      
            let thirdResult = quizResults.filter((result) => {
                if (result.formValue.includes(thirdAnswer)) {
                    console.log(result) // this logs out the corresponding object (result) in the data!
                } 
            })
        } 
    }
    let foodSelections = document.getElementsByName('greeting')
    for (let foodSelection of foodSelections) {
        if (foodSelection.checked) {
            let fourthAnswer = foodSelection.value // this gives the value of the selected answer      
            let fourthResult = quizResults.filter((result) => {
                if (result.formValue.includes(fourthAnswer)) {
                    console.log(result) // this logs out the corresponding object (result) in the data!
                } 
            })
        } 
    }
}

function getMatchingData() {
    recordSelections()
}

function selectMostMatches() {
    getMatchingData()
    // tally up the amount each result is pinged? - see below for thoughts

/*
    let darkResult = 0
    let rainbowResult = 0
    let gentleResult = 0
    let glitterResult = 0


if (firstAnswer === 'dark') {
                darkResult++
            } else if (firstAnswer === 'rainbow'){
                rainbowResult++
            } else if (firstAnswer === 'gentle'){
                gentleResult++
            } else if (firstAnswer === 'glitter'){
                glitterResult++
            }*/


    //from here, this will ping the correct data to then go to renderResults()
}


// test below - may or may not use

function matchAllValues(selections) {
    let checkedRadio = document.querySelector('input[value="dark"]')
    let selectedArray = []
}

matchAllValues()

