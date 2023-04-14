import React from "react"
import classes from "../styles/macBook_pro.module.scss"

export default function Macbookpro(){
    return(
        <div className={classes.macCardRoot}>
            <div className={classes.macCard}>
                <div id="newMacBookPro" className={classes.macBookProId}></div>
                <h1>MacBook Pro</h1>
                <h3>Supercharged by M2 Pro and M2 Max.</h3>
                <div className={classes.maclink}>
                    <a href="https://www.apple.com/in/macbook-pro-14-and-16/">Learn More</a>
                    <a href="https://www.apple.com/in/shop/buy-mac/macbook-pro/14-inch-macbook-pro">Buy</a>
                </div>
            </div>
        </div>
    )
}