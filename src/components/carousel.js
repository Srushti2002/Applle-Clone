import React from "react"
import classes from "../styles/carousel.module.scss"



const Carousel =
  ({images, autoplay = false, autoplayInterval = 3000 }) => {
    const [currImageIndex, setCurrImageIndex] = React.useState(0);
    const [isPlay, setIsPlay] = React.useState(autoplay);

    React.useEffect(() => {
      let intervalId;
      if(isPlay){
        intervalId = setInterval(() =>{
          setCurrImageIndex((currImageIndex + 1) % images.length);
        }, autoplayInterval);
      }
      


      return  function(){
        clearInterval(intervalId);
      }
    },[isPlay, currImageIndex, images.length, autoplayInterval]);

    const prevImage = () => {
      setCurrImageIndex((currImageIndex -1 + images.length) % images.length);
    };

    const nextImage = () => {
      setCurrImageIndex((currImageIndex + 1) % images.length);
    };

    function toggle(){
      setIsPlay(!isPlay);
    };

    return (
      <div className={classes.carouselWrapper}>
        <div className={classes.carousel}>
        <button className={classes.carouselPrev} onClick={prevImage}>{"<"}</button>
        <img className={classes.carouselImg} src={images[currImageIndex]} alt={`Image ${currImageIndex}`} />
        <button className={classes.carouselNext} onClick={nextImage}>{">"}</button>
        <button className={classes.carouselToggle} onClick={toggle}>{isPlay ? 'Pause' : 'Play '}</button>
        
      </div>

      </div>
          )
  }

export default Carousel;
