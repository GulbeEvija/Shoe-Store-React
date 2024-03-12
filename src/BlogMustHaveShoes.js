import { useState } from "react";
import Footer from "./Footer";
import Slider from "./Slider";
import { dataSlider } from "./dataSlider";

function BlogMustHaveShoes() {

   
    const [slides, setSlides] = useState(0);
    const slidePhotoOne = dataSlider[slides];
    const slidePhotoTwo = dataSlider[slides];
    const slidePhotoThree = dataSlider[slides];
    const slidePhotoFour = dataSlider[slides];
    const slidePhotoFive = dataSlider[slides];
    const slidePhotoSix = dataSlider[slides];

    return (

        <div>

            <div className="titleContainer container">
                <h2 className="blogTitle">6 Shoes Every Woman Should Have in Her Closet</h2>
            </div>

            <div className="container">
                <div className=" margin-top">
                    <h3 className="blogHeader">#1 - The polished flats</h3>
                    <Slider slidePhoto={slidePhotoOne}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#2 - The fashion sneakers</h3>
                    <Slider slidePhoto={slidePhotoTwo}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#3 - The court shoes </h3>
                    <Slider slidePhoto={slidePhotoThree}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#4 - The Chelsea boots</h3>
                    <Slider slidePhoto={slidePhotoFour}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#5 - The showpiece shoe</h3>
                    <Slider slidePhoto={slidePhotoFive}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#6 - The knee-high boots</h3>
                    <Slider slidePhoto={slidePhotoSix}/>
                </div> 
                
            </div>
            

            <div className="margin-top">
                <Footer />
            </div>
        </div>
    );
}


export default BlogMustHaveShoes;