import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import PhoneNavbar from "./PhoneNavbar";
import classes from "../styles/Navbar.module.scss";

export default function Navbar() {
    const [glassState, setGlassSet] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener("scroll", ()=>{
            
            const cursorScrollPosition = document.documentElement.scrollTop;

            if(cursorScrollPosition > 50 && cursorScrollPosition < window.innerHeight){
                setGlassSet(1);
            }
            else if(cursorScrollPosition > window.innerHeight){
                setGlassSet(2);
            }
            else{
                setGlassSet(0);
            }

        });

        return function(){
            window.removeEventListener("scroll", ()=>{});
        }
    }, []);

    return(
        <div className={`${classes.rootNavbar} ${classes.phoneMenu} ${
            glassState === 1
            ? classes.color
            : glassState === 2
            ? classes.active
            : classes.inactive
        }`}>
            <div className={classes.navbar}>
                
            <img src={require('../images/apple_logo.png')} />
            <ul className={classes.navbarControl}>
                <li><a href="#newIphonePro">iPhone 14 Pro </a></li>
                <li><a href="#newIphone">iPhone 14 </a></li>
                <li><a href="#newIwatch">Watch </a></li>
                
                <li><a href="#newAppleBkc">Apple Store </a></li>
                <li><a href="#newIWwdc">Conference </a></li>
                <li><a href="#newUltraWatch">Ultra Watch </a></li>                
                <li><a href="#newAirPodsPro">AirPods Pro </a></li>
                <li><a href="#newIpad">iPad </a></li>

                <li><a href="#newMacBookPro">MacBook </a></li>
 

        </ul>
            <div className={classes.phoneMenu}>
                <PhoneNavbar />
            </div>
            </div>  
        </div>
    )
}