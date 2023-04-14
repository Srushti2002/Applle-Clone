import React from "react"
import Navbar from "./components/Navbar"
import Iphonepro from "./components/iPhone_14_pro"
import Iphone from "./components/iPhone_14"
import Watch from "./components/Watch"
import Ipad from "./components/iPad"
import Macbookpro from "./components/macBook_pro"
import Bkc from "./components/bkc"
import Wwdc from "./components/wwdc"
import Watchultra from "./components/watchUltra"
import Airpodspro from "./components/airPodsPro"
import Carousel from "./components/carousel"
import Footer from "./components/footer"
import "./index.css"
import "./App.css"

const images = [
  "https://static.applenovinky.cz/wp-content/uploads/2023/04/Boom-Boom.jpg",
  "https://nxscdn.com/m/2021/06/ted-lasso-trailer.jpg",
  "https://static.applenovinky.cz/wp-content/uploads/2023/04/My_Kind_Of_Country-1021x580.jpg.webp"

]
export default function App(){
  return(
    <div>
       <Navbar />
      
      <Iphonepro />
      <Iphone />

      <Watch /> 

      <Bkc />
      <Wwdc />
      <Watchultra />
      <Airpodspro />
      <Ipad />
      <Macbookpro />
      <br />
      <Carousel images={images} autoPlay =  {false} autoplayInterval={3000} />
      <Footer />
    </div>
  )
}
