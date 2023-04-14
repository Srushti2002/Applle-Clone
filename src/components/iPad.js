import React from "react"
import classes from "../styles/iPad.module.scss"

export default function Ipad(){
    return(
        <div className={classes.ipadRoot}>
            
           <div className={classes.ipadCard}>
            <div id="newIpad" className={classes.ipadId}></div>
            <h1>iPad</h1>
            <h3>Lovable.Drawable.Magical.</h3>
            {/* <div className={classes.ipadLink}>
                <a href="https://www.apple.com/in/ipad-10.9/">Learn More</a>
                
                <a href="https://www.apple.com/in/shop/buy-ipad/ipad">Buy</a>
            </div> */}
            </div> 
        </div>
    )
}
