console.log("welcome to tic tac toe");
let music=new Audio('./components/music.mp3');
let turns =new Audio('./components/ting.mp3');
let gameOver= new Audio('components/gameover.mp3');
let turn='X';
let count=0;
let c=true;
let isgameover = false;
let changeTurn= ()=>{
    return (turn === 'X')?'O':'X';
}


const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (c===true) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            c=false;
            document.querySelector('.info').style.color="green";
            
            document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.imgbox3').getElementsByTagName('img')[0].style.width = "200px";
            music.play();
        }
    })
}


let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    
    element.addEventListener('click', ()=>{
        
        if(boxtext.innerText === '' && c===true && count<=9){
            count++;
            boxtext.innerText = turn;
            turn = changeTurn();
            gameOver.play();
            checkWin();
            if (!isgameover){
                document.querySelector('.info').innerText =  "Turn for " + turn;
                
            } 
            
        }
        if(count>8){
            document.querySelector('.info').innerText =  "Draw " ;
            document.querySelector('.info').style.color="Red";
        }
    })
})
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    count=0;
    c=true;
    console.log(turn);
    music.pause();
    document.querySelector('.info').innerText =  "Turn for " + turn;
    document.querySelector('.info').style.color="black";
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgbox3').getElementsByTagName('img')[0].style.width = "0px";
})