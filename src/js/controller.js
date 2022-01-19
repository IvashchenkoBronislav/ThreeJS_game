import * as THREE from "three"
import * as TWEEN from "@tweenjs/tween.js"
import { Scene } from "three";
import { boll0, bollRender, chendgePanel } from "./boll"
import { camera, groupForControl, scene, startStatus} from "./scene"

let widtWin, nowPosBoll, scoreStatus;

nowPosBoll = boll0.position;


export function stratAction(){
    if(startStatus.act){
        ControllerBoll()
        groupForControl.position.z -= 1
    }    
}

export function ControllerBoll(obj){
    widtWin = window.innerWidth
    document.addEventListener("touchmove", (event)=>{
        if(Math.floor(nowPosBoll.x) >-5 && Math.floor(nowPosBoll.x) <5){
            nowPosBoll.x = (event.changedTouches[0].clientX - (widtWin/2))/30
        }else if(Math.floor(nowPosBoll.x) >=-6 && Math.floor(nowPosBoll.x) <=6){
            startStatus.act = false
            document.querySelector(".defited").classList.add('dOn')
            document.querySelector(".defScreen").classList.add('dOn1')
        }
       
        // boll0.rotation.y +=0.1
    })
}
export function planeCendgerRen(){
    if(startStatus.act){
        let a = new THREE.Mesh(chendgePanel.giometri , chendgePanel.material[Math.floor(Math.random()*3)])
        a.name = "PlaneSwitch"
        a.rotation.x = Math.PI / 2

        let b = new THREE.PointLight(0xffffff, 0.5, 100)
        
        scene.add(b)
        a.position.z = groupForControl.position.z - 500
        a.rotation.x = Math.PI/2
        b.position.set(0,20,a.position.z)
        scene.add(a)
    }
}

function colorSwitch(){
    
    setInterval(()=>{
        scene.children.map((el)=>{
            if(el.name === "PlaneSwitch"){
                if(el.position.z > groupForControl.position.z){
                    boll0.material = el.material
                    scene.children.map((el)=>{
                        if(el.name === "flor"){
                            el.children.map((el)=>{
                                if(el.name === "sidePanel"){
                                    el.material.color = boll0.material.color
                                }
                            })
                        }
                    })
                    setInterval(()=>{{
                        scene.remove(el)
                    }},1000)
                }
            }
        })
    })
}
colorSwitch()

setInterval(()=>{
    planeCendgerRen()
}, 5000)

export function optimization(){
    scene.children.map((el)=>{
        
        if(el.name === "balls"){
            if(el.position.z >= groupForControl.position.z){
                scene.remove(el)
            }
        }
    })
}

export function score(){
    scene.children.map((el)=>{
        if(el.name === "balls"){
            if(el.position.z >= groupForControl.position.z){
                el.children.map((el)=>{
                    if(el.position.x >= boll0.position.x + 0.05  || el.position.x <= boll0.position.x + 0.05){
                        // console.log(el)
                        scene.remove(el)
                    }else{
                    
                    }
                })
            }
        }
    })
}

