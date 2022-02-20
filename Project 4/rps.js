let round = document.querySelector('.round');

let rock = document.getElementById('rock');

let paper = document.getElementById('paper');

let scissors = document.getElementById('scissors');

let player1 = document.querySelector('.player1');

let cpu = document.querySelector('.cpu');

var cpuimage = document.getElementById("randomimage");

var playerimagea = document.getElementById("playerimage");

let scoreIcon = document.querySelectorAll('.score-icon')

let roundover = document.querySelector('.roundover')

let box = document.querySelector('.box');

let decision = document.querySelector('.decision');

let gameOver = document.querySelector('.gameOver');

let startBtn = document.querySelector('.start');

let choosen = document.querySelector('.choosen');

// *******FUNCTIONS*********

function disable(){
rock.disabled = true;
paper.disabled = true;
scissors.disabled = true;
}

function enable(){
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

disable();

startBtn.onclick = function(){
    startBtn.classList.remove("start");
    startBtn.textContent = "Round 1";
    startBtn.disabled = true;
    enable();
    
}




var randomnumber;

function cputurn() {
    randomnumber = Math.floor(Math.random() * 3) + 1;
    var randomimage = "img" + randomnumber + ".png";
    cpuimage.setAttribute("src", randomimage);
}

var x;

function playerturn(x) {

    icon = "img" + x + ".png";
    playerimagea.setAttribute("src", icon);

}

function visibility() {

    setTimeout(()=>{
        round.style.opacity = "1";
       },500
       )    

    setTimeout(()=>{
     player1.style.opacity = "1";
     cpu.style.opacity = "1";
    },1000
    )
  
    // cpuimage.classList.add(randomimage);
}


// WHAT HAPPENS ON CLICKING BUTTONS 

rock.addEventListener("click", function () {
    x = 1;
    visibility();
    cputurn();
    playerturn(1);
    gameStart();
});

paper.onclick = function () {
    x = 2;
    visibility();
    cputurn();
    playerturn(2);
    gameStart();
}

scissors.onclick = function () {
    x = 3;
    visibility();
    cputurn();
    playerturn(3);
    gameStart();
}

// var a = 0;

// var b = 0;

var i = -1;

var j = 2;

function gameStart() {

    if (randomnumber == x) {
        // Tie
    }
    

    else if ((randomnumber == 1 && x == 2) || (randomnumber == 2 && x == 3) || (randomnumber == 3 && x == 1)) {
        // PLayer 1 won 
        i++;
        scoreIcon[i].style.visibility = "visible";

        
        console.log(scoreIcon[i]);
        // a++;
        // playerscore.innerHTML = a;

    }

    else {
        j++;
        scoreIcon[j].style.visibility = "visible";
        
        // cpu won
      

    }

    if(i==2 || j==5){
        roundends();
        
    }


}

var roundNumber = 1;

var youWon = 0;

var youLost = 0;

function roundends() {

    setTimeout(()=>{
        randomimage.setAttribute("src", "img1.png");
        playerimage.setAttribute("src", "img1.png");
    },3000)
   


        if (i == 2) {
            box.style.visibility = "visible";
            decision.textContent = "YOU WON!";
            gameOver.textContent = "Round Over";
            roundover.classList.remove("khatam");
            youWon++

            setTimeout(() => {
                box.style.visibility = "hidden"
            }, 3000
            )
        }

        else if (j == 5) {
            decision.textContent = "YOU LOST!"
            box.style.visibility = "visible"
            gameOver.textContent = "Round Over";
            roundover.classList.remove("khatam");
            youLost++;

            setTimeout(() => {
                box.style.visibility = "hidden"
            }, 3000
            )

        }

        roundNumber++;
        startBtn.textContent = "ROUND " + roundNumber;
        setTimeout(() => {
            for(k=0;k<6;k++){
                scoreIcon[k].style.visibility = "hidden";
            }
        },3000
        )
        i=-1;
        j=2;


    if (roundNumber == 4) {
        box.style.visibility = "visible";
        // roundover.classList.remove("roundover");
        roundover.classList.add("khatam");
        startBtn.classList.add("start");
        startBtn.textContent = "Restart";
        startBtn.disabled = false;
        disable();
        roundNumber = 1;
        // setTimeout(() => {
        //     box.style.visibility = "hidden"
        // }, 6000
        // )

        if (youWon > youLost) {
            decision.style.textAlign = "center";
            decision.textContent = "CONGRATS, YOU ARE LUCKIER THAN CPU";

            gameOver.textContent = "GAME OVER";
        }

        else if (youWon < youLost) {
            decision.textContent = "OH! CPU IS LUCKIER THAN YOU";
            gameOver.textContent = "GAME OVER";
        }

        youWon = 0;
        youLost = 0;
        
    }
}
