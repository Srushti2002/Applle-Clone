import React from "react"
import classes from "../styles/bkc.module.scss"

export default function Bkc(){
    return(
        <div className={classes.bkcRoot}>
            <div id="newAppleBkc" className={classes.bkcId}></div>
            <h1 className={classes.bkcMain}>Apple BKC</h1>
            <h2 className={classes.bkcPara}>India's first apple store <br />
            is arriving soon at Mumbai.</h2>
            <a className={classes.bkcLink} href="https://www.apple.com/in/retail/bkc/">Learn more</a>
            
        </div>
    )

}