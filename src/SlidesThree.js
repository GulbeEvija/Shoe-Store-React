import { useState } from "react";
import { dataSlidesOne } from "./dataSlidesOne";


function SlidesThree() {

    const [slides, setSlides] = useState(0);
    const {id, slidePhotoThree} = dataSlidesOne[slides];

    const backPic = () => {
        setSlides((slides => {
          slides --;
          if (slides < 0) {
            return dataSlidesOne.length-1;
          }
          return slides;
        }))
      }
    
      const nextPic  = () => {
        setSlides((slides => {
          slides ++;
          if (slides > dataSlidesOne.length - 1) {
            slides = 0;
          }
          return slides;
        }))
      }

    return (
        <div>
            
            <div key={id} className="slideRow">
                <button className="btnSlide" onClick={backPic}>Back</button>
                <img className="blogTwoPic" src={slidePhotoThree} alt="Fashion" width="500px" height="350px"/>
                <button className="btnSlide" onClick={nextPic}>Next</button>
            </div>
        
        </div>
    )
}

export default SlidesThree;