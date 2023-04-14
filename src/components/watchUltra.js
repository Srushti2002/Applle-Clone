import React from "react"
import classes from "../styles/watchUltra.module.scss"

export default function watchUltra(){

    return(
        <div className={classes.watchUltraRoot}>
            <div id="newUltraWatch" className={classes.ultraWatchId}></div>
            <h1 className={classes.watchUltraHead}>Watch</h1>
            <p className={classes.watchUltraColor}>ULTRA</p>
            <h3 className={classes.watchUltraPara}>Adventure awaits.</h3>
            <div className={classes.watchUltraLink}>
                <a href="https://www.apple.com/in/apple-watch-ultra/">Learn more</a>
                <a href="https://www.apple.com/in/shop/buy-watch/apple-watch-ultra">Buy</a>
            </div>
        </div>
    )
}