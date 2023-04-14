import React from "react"
import classes from "../styles/Iphonepro.module.scss"
export default function Iphonepro(){
  
  return(
    <div className={classes.pro}>
      <div id="newIphonePro" className={classes.phoneProId}></div>
      <h1 className={classes.proHead}>iPhone 14 Pro</h1>
      <p className={classes.proSubHead}>Pro.Beyond.</p>
      <div className={classes.link}>
        <a className={classes.learn} href="https://www.apple.com/in/iphone-14-pro/">Learn more</a>
        <a className={classes.buy} href="https://www.apple.com/in/shop/buy-iphone/iphone-14-pro">Buy</a>
      </div>
      
    </div>
  )
}
