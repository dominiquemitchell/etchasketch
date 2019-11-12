//This project I was not able to create the rainbow pen or eraser. I also couldn't get the grid to be resizeable. But the etch-a-sketch is functional.

//Variable initializations
const container = document.querySelector("#container");
let rows = document.getElementsByClassName("grid-style");
let cells = document.getElementsByClassName("grid-style");
const btnClear = document.querySelector("#newGrid");

//Function for initial grid creation
function createGrid(squares){
  for (let s = 0; s < squares; s++) {
    let grid = document.createElement("div");
    grid.className = "grid-style";
    container.appendChild(grid); 
  }
}
createGrid(860);

//Event listeners
btnClear.addEventListener("click",() => {
  container.innerHTML = "";
  createGrid(860);
})

