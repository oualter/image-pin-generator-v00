import { useState } from "react"
import mapImage from './../assets/img/croquis-reunion.png'

export default function ImagePlaceHolder(){
    const [localCoords, setLocalCoords] = useState({x: 0, y: 0});

    const handleShowCoordinates = (event)=>{
        const targetElement = event.target;
        const rect = targetElement.getBoundingClientRect(); 
        setLocalCoords({
            x: Math.round(event.clientX - rect.left),
            y: Math.round(event.clientY - rect.top)
        });
    }

    const [pins, setPins] = useState([]);  

    const handlePinOnMap = (event)=>{
        // ajouter div / img après la carte
        const targetElement = event.target;
        const rect = targetElement.getBoundingClientRect(); 
        let xpos = Math.round(event.clientX - rect.left)
        let ypos = Math.round(event.clientY - rect.top)
        console.log(event.pageY)

        const newPin = { completed: true, x: xpos, y:ypos };
        setPins([...pins, newPin]);     
    }
    return(
        <>
            <p id="display-pos-box">Position : ({localCoords.x}, {localCoords.y})</p>
            <div className="image-placeholder">
                <img src={mapImage} width="1000" height="auto" className="tomap" alt="basemap" onMouseMove={handleShowCoordinates} onClick={handlePinOnMap} />
                
                {pins.map((elt, index)=>(
                        <div key={index} className="pin" style={{left:elt.x+'px', top:elt.y+'px'}}></div>
                        )
                    )   
                }                
            </div>
        </>
    )
}