let celdas=["","","","","","","","",""]
let jugadoractual="x"
let resultado=document.querySelector(".result")
let botones=document.querySelectorAll(".btn")

let condiciones=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8],
];

//desde aca empieza la logica
//console.log(botones)

const triki=(Element,i)=>{
  Element.value=jugadoractual
  Element.disabled = true;
  celdas[i]=jugadoractual;
  jugadoractual= jugadoractual== "x" ? "o": "x";
  resultado.innerHTML= `player ${jugadoractual} turn`
};


botones.forEach((boton,indice)=>{
  boton.addEventListener("click",()=>{triki(boton,indice)}) 
  
})