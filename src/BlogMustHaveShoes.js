import Footer from "./Footer";
import Slider from "./Slider";
import { dataSlider } from "./dataSlider";

function BlogMustHaveShoes() {


    return (

        <div>

            <div className="titleContainer container">
                <h2 className="blogTitle">6 Shoes Every Woman Should Have in Her Closet</h2>
            </div>

            <div className="container">
                <div className=" margin-top">
                    <h3 className="blogHeader">#1 - The polished flats</h3>
                    <Slider dataSlider={dataSlider[0]}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#2 - The fashion sneakers</h3>
                    <Slider dataSlider={dataSlider[1]}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#3 - The court shoes </h3>
                    <Slider dataSlider={dataSlider[2]}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#4 - The Chelsea boots</h3>
                    <Slider dataSlider={dataSlider[3]}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#5 - The showpiece shoe</h3>
                    <Slider dataSlider={dataSlider[4]}/>
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#6 - The knee-high boots</h3>
                    <Slider dataSlider={dataSlider[5]}/>
                </div> 
                
            </div>
            

            <div className="margin-top">
                <Footer />
            </div>
        </div>
    );
}


export default BlogMustHaveShoes;