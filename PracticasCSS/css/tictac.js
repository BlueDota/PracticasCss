
const gameBoard = document.querySelector('#gameboard');

const infoDisplay = document.querySelector('#info');

const startCells = ['', '', '', '', '', '', '', '',''];

let go = "circle";

infoDisplay.textContent = go+ " va primero compa";

function createBoard (){
 
    startCells.forEach((_cell,index) => {

       const cellElement = document.createElement('div');
       cellElement.classList.add('square');
       cellElement.id = index;
       cellElement.addEventListener("click", addGo);
       gameBoard.appendChild(cellElement);

    });
}

createBoard();

function addGo(e){
    console.log("click xd",e.target)

    const  goDisplay = document.createElement('div');
    
    goDisplay.classList.add(go);
    e.target.appendChild(goDisplay);
    go = go === "circle" ? "cross": "circle";
    console.log(go)
    infoDisplay.textContent = "ahora le toca a "+"  "+go;
    e.target.removeEventListener("click",addGo);

}
addGo();