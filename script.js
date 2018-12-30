const divContainer = document.getElementById('divContainer');
const randomButton = document.querySelector('#randomColors');
const blackButton = document.querySelector('#blackColor');
const eraseButton = document.querySelector('#eraseButton');
const clearButton =document.querySelector('#clearButton');
const dimensionsButton = document.querySelector('#dimensionsButton');

let random =false;
let color = 'black';
let dimensions = 20;
createGrid(dimensions);

randomButton.addEventListener('click',randomClick);
blackButton.addEventListener('click',blackClick);
eraseButton.addEventListener('click',eraseClick);
clearButton.addEventListener('click',clearClick);
dimensionsButton.addEventListener('click',dimensionsClick);

function randomClick(){
    random=true;
}

function eraseClick(){
    color='white';
    random= false;
}

function blackClick(){
    color='black';
    random=false;
}

function dimensionsClick(){
    clearGrid();
    dimensions=prompt("Enter dimensions: ");
    createGrid(dimensions);
    color='black';
}

function createGrid(boxes){
    for(i=0; i<boxes*boxes;i++){
        const div = document.createElement('div');
        div.setAttribute = ('id', 'box');
        div.addEventListener('mouseover', changeColor);
        div.style.width=divContainer.clientWidth/boxes+ 'px';
        div.style.height=divContainer.clientHeight/boxes+ 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.margin  = '0px';
        div.style.padding = '0px';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        divContainer.appendChild(div);
    }
}

function changeColor(){
    if(random){
        color = `rgb(${(Math.random()*256) + 1},${(Math.random()*256) + 1},${(Math.random()*256) + 1})`;
    }
    this.style.backgroundColor = color;
}

function clearGrid(){
    while(divContainer.firstChild){
        divContainer.removeChild(divContainer.firstChild);
    }
}

function clearClick(){
    clearGrid();
    createGrid(dimensions);
}