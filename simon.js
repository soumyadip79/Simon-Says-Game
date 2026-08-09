let gameSeq = [];
let userSeq = [];

let btns = ["pink", "orange", "green", "blue"];

let started = false;
let level = 0;


let score = 0;
let highscore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelUP();
    }

})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 350);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUP() {
    userSeq = [];
    level++;
    score++;
    h2.innerText = `Level ${level}`;

    // Choose Random btn then flash
    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranBtn);

    gameSeq.push(ranColor);
    console.log(gameSeq);
    btnFlash(ranBtn);
    

}

function checkAns(idx) {
    // console.log(`Current Level : ${level}`);
    // let idx = level-1;
    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("Same & Continue");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUP, 1000);
            if(score>=highscore){
                highscore=score;
            }
        }
    } else {
        
        h2.innerHTML = `Game Over ! Your Score is : <b>${level}</b> <br> Highest Score : <b>${highscore+1}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250)
        
        reset();
    }
}

function btnPress() {
    let btn = this;
    // console.log(btn);
    // console.log("Button was pressed");
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);

    userSeq.push(userColor);


    checkAns(userSeq.length - 1); //last idx of userSeq array
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    score = 0;
}