import React from "react"
import classes from "../styles/wwdc.module.scss"

export default function Wwdc(){
    return(
        <div className={classes.wwdcRoot}>
            <div id="newIWwdc" className={classes.wwdcId}></div>
            <h1 className={classes.wwdcMain}>WWDC23</h1>
            <h3 className={classes.wwdcPara}>Apple Worldwide Developers Conference.<br />
            Join us online from 5 to 9.</h3>
            <a className={classes.wwdcLink} href="https://developer.apple.com/wwdc23/">Learn more</a>
            
        </div>
    )
}