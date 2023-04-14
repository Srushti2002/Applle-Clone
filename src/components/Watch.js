import React from "react"
import classes from "../styles/Watch.module.scss"
export default function Watch(){
    return(
        <div className={classes.phoneWatch}>
            <div id="newIwatch" className={classes.watchId}></div>
            <h1 className={classes.watchHead}>WATCH</h1>
            <h4 className={classes.watchSubHead}>Series 8</h4>
            <h3 className={classes.watchThirdHead}>A healthy leap ahead.</h3>
            {/* <div className={classes.href}>
                
            <a href="https://www.apple.com/in/apple-watch-series-8/" className={classes.watchLearn}>Learn more</a>
            <a href="https://www.apple.com/in/apple-watch-series-8/" className={classes.watchBuy}>Buy</a>
            </div> */}
            </div>
    )
}
