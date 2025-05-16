const Computer=document.querySelector(".Computer img");
const player=document.querySelector(".player img");

const computerpoint=document.querySelector(".computerpoint");
const playerpoint=document.querySelector(".playerpoint");
const Choices=document.querySelectorAll(".Choices button");

Choices.forEach((Choices) =>{
Choices.addEventListener("click", ()=> {
Computer.classList.add("shakecomputer");
player.classList.add("shakeplayer");
setTimeout(()=>{
Computer.classList.remove("shakecomputer");
player.classList.remove("shakeplayer");
player.src="./"+Choices.innerHTML+"player.png";
const Choice=["ROCK", "PAPER", "SCISSORS"];
let arrayNo=Math.floor(Math.random() * 3);
let computerchoice=Choice[arrayNo];
Computer.src="./"+ computerchoice +"Computer.png";
let cPoints=parseInt(computerpoint.innerHTML);
let pPoints=parseInt(playerpoint.innerHTML);
if(Choices.innerHTML==="ROCK")
{
if(computerchoice==="PAPER")
computerpoint.innerHTML=cPoints + 1;
else if(computerchoice==="SCISSORS")
playerpoint.innerHTML=pPoints + 1;
else if(Choices.innerHTML==="PAPER")
if(computerchoice==="SCISSORS")
computerchoice.innerHTML=cPoints + 1;
else if(computerchoice==="ROCK")
playerpoint.innerHTML=pPoints + 1;
}else {
if(computerchoice==="ROCK")
computerchoice.innerHTML=cPoints + 1;
else if(computerchoice==="PAPER")
playerpoint.innerHTML=pPoints + 1;
}
},800);
});
});