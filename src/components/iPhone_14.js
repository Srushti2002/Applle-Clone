import React from "react"
import classes from "../styles/Iphone.module.scss"
export default function Iphone(){
    return(
        <div className={classes.iphone}>
            <div id="newIphone" className={classes.phoneId}></div>
           <h1 className={classes.secondHead}>iPhone 14</h1> 
           <h3 className={classes.secondSubHead}>Two great sizes.</h3>
           <h3 className={classes.secondSubHead}>Now with the splash of yellow.</h3>
            <div className={classes.rel}>
                <a className={classes.phoneLearn} href="https://www.apple.com/in/iphone-14/">Learn more</a>
                <a className={classes.phoneBuy} href="https://www.apple.com/in/shop/buy-iphone/iphone-14">Buy</a>
            </div>
            <div></div>
        </div>
    )
}

