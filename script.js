let plyrScr = 0;
let compScr = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgChng = document.querySelector(".msg-cont"); 
let plyrScore = document.querySelector("#plyr-score");
let compScore = document.querySelector("#comp-score");
let reset = document.querySelector(".reset");

const genCompChoice = () =>{
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]; 
}

const gameDraw = () =>{
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#001524";
}

const showWinner = (plyrWin, plyrChoice, compChoice) =>{
    if(plyrWin){
        msg.innerText = `You Win! Your ${plyrChoice} Beats ${compChoice}`;
        plyrScr++;
        plyrScore.innerText = plyrScr;
        msg.style.backgroundColor = "#2b9348";
    }
    else{
        msg.innerText = `You Lost! ${compChoice} Beats Your ${plyrChoice}`;
        compScr++;
        compScore.innerText = compScr;
        msg.style.backgroundColor = "#c32f27";
    }
}

const playGame = (plyrChoice) =>{
    const compChoice = genCompChoice();

    if(plyrChoice === compChoice){
        gameDraw();
    }
    else{
        let plyrWin = true;
        if(plyrChoice === "Rock"){
            plyrWin = compChoice === "Paper" ? false : true;
        }
        else if(plyrChoice === "Paper"){
            plyrWin = compChoice === "Scissors" ? false : true;
        }
        else{
            plyrWin = compChoice === "Rock" ? false : true;
        }

        showWinner(plyrWin, plyrChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const plyrChoice = choice.getAttribute("id");
        playGame(plyrChoice);
    })
} ) 

const resetGame = () =>{
    plyrScr = 0;
    plyrScore.innerText = plyrScr;
    compScr = 0;
    compScore.innerText = compScr;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#001524";
}

reset.addEventListener("click", resetGame);
