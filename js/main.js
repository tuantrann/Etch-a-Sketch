const container = document.querySelector("#container");
const button = document.querySelector('button');

let newItem = (num =>{
    for(let i = 0; i < num*num; i++){
        const gridHover = document.createElement("div");
        gridHover.className = "grid-item";
        
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        gridHover.addEventListener("mouseenter", e=>{
            if(gridHover.style.background == ''){
                gridHover.style.backgroundColor = "#" + randomColor;

            }
           
        });
        container.appendChild(gridHover);
    }
    container.style.gridTemplateColumns = `repeat(${num},30px)`;
    container.style.gridTemplateRows =`repeat(${num},30px)`;
    
    
}); 

newItem(16);

button.addEventListener('click', boxValue=>{
    container.innerHTML = '';
    let value = prompt("How many box do you want?")
    newItem(value);
})