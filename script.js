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