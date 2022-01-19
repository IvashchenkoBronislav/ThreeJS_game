import * as THREE from "three"
import * as TWEEN from "@tweenjs/tween.js"
import { boll0} from "./boll";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

import { ControllerBoll, optimization, score, stratAction } from "./controller";
import bgTextureSky from '../texture/censornet_news_528.jpg'


export let scene, camera, renderer, startStatus, groupForControl ,light;

startStatus={act:false}


function init (){

    const loader = new THREE.TextureLoader();
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf1f1f1)

    const bgTexture = loader.load(bgTextureSky);
    
    scene.background = bgTexture;
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 10000);
    camera.position.z = 15
    camera.position.y = 5
    camera.rotation.x = 0.1
    // camera.rotation.y =3

    light = new THREE.PointLight(0xfffffff,0.7)
    light.position.set(0,100,200)
    scene.add(light)
    
    scene.add(camera)

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );

    document.querySelector(".displayAD").appendChild( renderer.domElement );


    window.addEventListener( 'resize', onWindowResize );

    // scene.add(boll0)

    groupForControl = new THREE.Group()
    
    groupForControl.add(boll0)
    groupForControl.add(camera)
    scene.add(groupForControl)
    // let a= new OrbitControls(camera, renderer.domElement)

    
    // ControllerBoll()
}
setInterval(() => {
    optimization()
}, 700);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // cover()
}

init()

function animate() {
    TWEEN.update()
    score()
    stratAction()
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}



animate();