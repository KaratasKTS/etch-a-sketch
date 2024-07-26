const Size = document.getElementById("input");
const Clear = document.getElementById("Clear");
const Father = document.querySelector(".Father");


const fatherSize = 600;
let gridSize = 16;

const childDivs = [];

function createGrid(size){
    Father.innerHTML="";
    for(let i = 0; i < (gridSize * gridSize); i++){
        let childDiv = document.createElement("div");
        childDiv.style.width = `${(fatherSize / gridSize)}px`;
        childDiv.style.height = `${(fatherSize / gridSize)}px`;
        childDiv.classList = "children";
        childDiv.style.backgroundColor= "black";
        Father.appendChild(childDiv);
        
        childDivs.push(childDiv);
        childDiv.addEventListener("mouseover", ()=>{
            childDiv.style.backgroundColor = " white";
        });
    }
}

function clearFather (){
    childDivs.forEach(childDiv => {
        childDiv.style.backgroundColor = "black";
    });
    
}

Size.addEventListener("input", (event)=>{
    gridSize = event.target.value;
    createGrid(gridSize);
    
})

createGrid()