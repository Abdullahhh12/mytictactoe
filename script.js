console.log("Welcome To Tic Tac Toe")
let audioTurn = new Audio("ting.wav")
let gamewin = new Audio("gamewin.wav")
let turn = "X"
let isgameover = false; 

// function to change the turn 
const changeTurn = ()=>{
    return turn === "X"? "0":"X"
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 10, 10, 0],
        [3, 4, 5,  10, 30, 0],
        [6, 7, 8, 10, 50, 0],
        [0, 3, 6, -9.5, 30, 90], 
        [1, 4, 7, 10, 30, 90],
        [2, 5, 8, 30, 30, 90],
        [0, 4, 8, 10, 30, 45],
        [2, 4, 6, 10, 30, 135],

    ]
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="160px"
            gamewin.play();
            document.querySelector(".line").style.width = "43vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`

        }
    })

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                

            }
            
        }
    })
})

// Add on clicl listner to reset button
reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
    document.querySelector(".line").style.width = "0vw";

})



