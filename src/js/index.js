import "../scss/mane.scss";
import "./scene.js";
import "./controller"
import './gound'
import {startStatus} from "./scene.js";
import backgroundGif from "../img/C.gif"



let buttonStart = document.querySelector("#start");

buttonStart.addEventListener('click',()=>{
    buttonStart.classList.add("none");
    startStatus.act = true;
    console.log(startStatus)
})

document.querySelector('.defScreen').style.backgroundImage = backgroundGif;