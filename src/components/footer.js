import React from "react"
import classes from "../styles/footer.module.scss"

export default function Footer(){
    return(
        <div className={classes.footerRoot}>
            <div className={classes.footerCopyright}>© Copyright 2023 Apple Inc. All rights reserved.</div>
            {/* <ul className={classes.footerLinks}>
                <li><a href="https://www.apple.com/in/legal/privacy/">Privacy policy |</a></li>
                <li><a href="https://www.apple.com/in/legal/internet-services/terms/site.html">Terms of use |</a></li>
                <li><a href="https://www.apple.com/in/shop/browse/open/salespolicies">Sales Policy |</a></li>
                <li><a href="https://www.apple.com/in/legal/">Legal |</a></li>
                <li><a href="https://www.apple.com/in/sitemap/">Site Map</a></li>
            </ul> */}
            <div className={classes.footerCountry}>India |
                
            </div>
            <a className={classes.mine} href="https://linktr.ee/SrushtiDeshmukh">Srushti Deshmukh</a>
        </div>
    )
}