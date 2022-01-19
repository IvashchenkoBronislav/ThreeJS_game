import * as THREE from 'three'
import { boll0 } from './boll'
import { scene } from './scene'



export function renderFlor(){

    const groundFlor = {
        giometri: [
            new THREE.BoxGeometry(9.2,0.5,2000),
            new THREE.BoxGeometry(0.5, 0.6, 2000)
        ],
    
        material:[
            new THREE.MeshBasicMaterial({color: 0x050c3c, side:THREE.DoubleSide}),
        ],
        
        materialSide:[
            new THREE.MeshBasicMaterial({color:0x4cf5f5, side: THREE.DoubleSide})
        ]
    }
  
    let a = new THREE.Mesh(groundFlor.giometri[0], groundFlor.material[0])
    a.rotation.x= Math.PI / 2
    let b = new THREE.Mesh(groundFlor.giometri[1], groundFlor.materialSide[0])
   
    b.position.x = -4.7
    b.position.y = 0.1
    b.rotation.x= Math.PI / 2

    let c = new THREE.Mesh(groundFlor.giometri[1], groundFlor.materialSide[0])
    c.position.x = 4.5
    c.position.y = 0.6
    c.rotation.x= Math.PI / 2

    let group = new THREE.Group()
    b.name = "sidePanel"
    c.name = "sidePanel"
    group.name ="flor"
    group.add(a)
    group.add(b)
    group.add(c)
    scene.add(group)
    group.rotation.x = Math.PI / 2
    group.position.z = -a.geometry.parameters.height / 2.2
    console.log( a.geometry.parameters.height)
}

renderFlor()



// let florGround = new THREE.Mesh(groundFlor.giometri, groundFlor.material[0])
// florGround.rotation.x = Math.PI /2
// scene.add(florGround)

