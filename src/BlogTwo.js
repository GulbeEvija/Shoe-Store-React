import SlidesTwo from "./SlidesTwo";
import SlidesFive from "./SlidesFive";
import SlidesFour from "./SlidesFour";
import SlidesOne from "./SlidesOne";
import SlidesSix from "./SlidesSix";
import SlidesThree from "./SlidesThree";
import Footer from "./Footer";

function BlogTwo() {
    return (
        <div>

            <div className="titleContainer container">
                <h2 className="blogTitle">6 Shoes Every Woman Should Have in Her Closet</h2>
            </div>

            <div className="container">
                <div className=" margin-top">
                    <h3 className="blogHeader">#1 - The polished flats</h3>
                    <SlidesOne />
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#2 - The fashion sneakers</h3>
                    <SlidesTwo />
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#3 - The court shoes </h3>
                    <SlidesThree />
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#4 - The Chelsea boots</h3>
                    <SlidesFour />
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#5 - The showpiece shoe</h3>
                    <SlidesFive />
                </div>

                <div className=" margin-top">
                    <h3 className="blogHeader">#6 - The knee-high boots</h3>
                    <SlidesSix />
                </div>
                
            </div>
            

            {/* social media */}
            <div className="margin-top">
                <Footer />
            </div>
        </div>
    );
}


export default BlogTwo;