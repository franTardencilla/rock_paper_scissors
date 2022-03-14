

const buttons = document.querySelectorAll("#selection")
const container = document.querySelector(".container")
var allWins = []

buttons.forEach(button => button.addEventListener("click",
(e) => game(e.target.innerHTML)))

function computerPlay(){
    /*We first create an array for all 3 different types of possible plays*/
    const results = ["rock", "paper", "scissors"]
    /* We get a random index, and extract the object from the array*/
    let computerPlay = results[Math.floor(Math.random() * results.length)]
    /*We return the value*/
    return computerPlay
}

function gameRound(userElection, computerElection){

    /*We first create a variable that holds all the possible values */
    const gameOptions = ["rock","paper","scissors"]

    /* Then we pass the inputs to lower case so it's the comparison will be case insensitive*/
    const userSelectionToLowerCase = userElection.toLowerCase()
    const computerElectionToLowerCase = computerElection.toLowerCase()

    /**We check if the 2 options are the same or if the user input options that are not valid */
    if(userSelectionToLowerCase == computerElectionToLowerCase){
        return "it's a tie"
    } else if (!gameOptions.includes(userSelectionToLowerCase) || !gameOptions.includes(computerElectionToLowerCase)){
        return "Please enter a valid option"
    }

    /**
     * If everything is ok, we then get check if the computer won, if not it means the user won
     */

    const computerWins = (userSelectionToLowerCase == "rock" && computerElectionToLowerCase == "paper") 
    || (userSelectionToLowerCase == "paper" && computerElectionToLowerCase == "scissors") 
    || (userSelectionToLowerCase == "scissors" && computerElectionToLowerCase == "rock")

    /*Construct the message with the winner and why it won */
    const result = computerWins ? `The computer wins ${computerElectionToLowerCase} beats ${userSelectionToLowerCase} ` : `The user wins ${userSelectionToLowerCase} beats ${computerElectionToLowerCase} `
    return result
    
}

/**
 * This is the main entry for the game
 */
function game(userInput){
   
    var result = gameRound(userInput,computerPlay())
    allWins.push(result)
    allWins.length == 5 ? showResults(checkTheUltimateWinner(allWins), result) : showResults(result)
}

/**
 * This function helps determine who won the game by adding up all the wins of each player
 * @param {this is the array of all the results obtained from the game} allWins 
 * @returns a string telling who won the game
 */
function checkTheUltimateWinner(allWins){
    var userWins = 0
    var computerWins = 0

    /**We iterate through all of the results received */
    allWins.forEach(win => {
        /** if it is a tie then return because this does not count to anybody */
        if(win.includes("it's a tie")) return
        win.includes("computer wins") ? computerWins++ : userWins++
        
    });

    console.log(`user wins ${userWins} and computer wins ${computerWins}`)
    return userWins > computerWins ? "the user won the game" : "the computer won the game"
}

function showResults(textToShow,...otherText){
    const finalResultsTxt = otherText

    if(finalResultsTxt.length !== 0){
        const winner_div = document.createElement("div")
        winner_div.textContent = finalResultsTxt.shift()
        container.appendChild(winner_div)
        allWins.length = 0
    }
    const div_results = document.createElement("div")
    div_results.textContent = textToShow
    container.appendChild(div_results)

}

