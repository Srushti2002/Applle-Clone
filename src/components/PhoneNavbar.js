import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function(){
    const [show, setShow] = React.useState(false)

    function toggle(){
        setShow(prevState => !prevState)
    }
    return(
        <div>
            <GiHamburgerMenu onClick={toggle} />
            {show ?
             <ul>
                <li><a href="#newIphonePro">iPhone 14 Pro </a></li>
                <li><a href="#newIphone">iPhone 14 </a></li>
                <li><a href="#newIwatch">Watch </a></li>
                
                <li><a href="#newAppleBkc">Apple Store </a></li>
                <li><a href="#newIWwdc">Conference </a></li>
                <li><a href="#newUltraWatch">Ultra Watch </a></li>
                <li><a href="#newAirPodsPro">AirPods Pro </a></li>
                <li><a href="#newIpad">iPad </a></li>
                <li><a href="#newMacBookPro">MacBook </a></li>
        
        
             </ul>:
             <div></div>

            }


            
        </div>
    )
    
}