import * as THREE from "three";
import { scene,groupForControl, startStatus } from "./scene";

export let boll0,chendgePanel0,chendgePanel1,chendgePanel2;

const boll = {
    geometri: new THREE.SphereGeometry(0.8, 32, 16),
    matreial: [
        new THREE.MeshToonMaterial({color:0x4cf5f5}),
        new THREE.MeshToonMaterial({color:0xde1f1f}),
        new THREE.MeshToonMaterial({color:0xc71ac9}),
    ]
};

export const chendgePanel = {
    giometri: new THREE.BoxGeometry(10, 0.5, 1),
    material: [
        new THREE.MeshToonMaterial({color:0x4cf5f5, side: THREE.DoubleSide}),
        new THREE.MeshToonMaterial({color:0xde1f1f, side: THREE.DoubleSide}),
        new THREE.MeshToonMaterial({color:0xc71ac9, side: THREE.DoubleSide}),
    ]
};


function roadRenderItem(){
    if(startStatus.act){
        let a = new THREE.Mesh(boll.geometri,boll.matreial[Math.floor(Math.random()*3)]);
        let b = new THREE.Mesh(boll.geometri,boll.matreial[Math.floor(Math.random()*3)]);
        let c = new THREE.Group();

        c.add(a)
        c.add(b)
        c.name = "balls"
        
        // if(a.material.color === b.material.color){
        //     b.visible = false
        // }
        scene.add(c)
        a.position.y = 1
        b.position.y = 1
        a.position.x = Math.floor(-Math.random()*5)
        b.position.x = Math.floor(Math.random()*5)
        c.position.z = groupForControl.position.z - 200
        
    };
}

export function bollRender(){
    setInterval(()=>{
        roadRenderItem()
    },1000)
};

bollRender();


boll0 = new THREE.Mesh(boll.geometri, boll.matreial[0])
boll0.position.y = 1 ;