import React from "react"
import classes from "../styles/airPodsPro.module.scss"

export default function Airpodspro() {
    return(
        <div className={classes.airPodsProRoot}>
            <div id="newAirPodsPro" className={classes.airPodsProId}></div>
            <h1 className={classes.airPodsProHead}>AirPods Pro</h1>
            <h3 className={classes.airPodsProPara}>Rebuilt from the sound up.</h3>
            {/* <div className={classes.airPodsProLink}>
                <a href="https://www.apple.com/in/airpods-pro/">Learn more</a>
                <a href="https://www.apple.com/in/shop/product/MQD83HN/A/airpods-pro">Buy</a>
            </div>
             */}

        </div>
    )
}