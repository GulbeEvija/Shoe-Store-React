import { useState } from "react";


function Slider({dataSlider}) {

    const [slides, setSlides] = useState(0);
    const slidesPhoto = dataSlider[slides];


    const backPic = () => {
        setSlides((slides => {
          slides --;
          if (slides < 0) {
            return dataSlider.length-1;
          }
          return slides;
        }))
      }
    
      const nextPic  = () => {
        setSlides((slides => {
          slides ++;
          if (slides > dataSlider.length - 1) {
            slides = 0;
          }
          return slides;
        }))
      }

    return (
        <div>
            
            <div className="slideRow">
                <button className="btnSlide" onClick={backPic}>Back</button>
                <img className="blogTwoPic" src={slidesPhoto} alt="Fashion" width="500px" height="350px"/>
                <button className="btnSlide" onClick={nextPic}>Next</button>
            </div>
        
        </div>
    )
}

export default Slider;