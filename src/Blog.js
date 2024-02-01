import Footer from "./Footer";
import summerOne from './picturesShoes/summerOne.png';
import lepardTwo from './picturesShoes/lepardTwo.png';
import flatTwo from './picturesShoes/flatTwo.png';

function Blog() {
    return (
        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">Blog</h2>
                <p className="blogText">Get the newest information from the experts!</p>
            </div>

            <div className="container">


                <div className="container">
                    <h2 className="blogName">10 shoe trends for 2024!</h2>
                    <img className="blogTwoPic" src={lepardTwo} width="420px" height="320px" alt="Shoes"/>
                    <button className='springBtn'><a href={`/blog/blogOne`}  rel="noreferrer" className='springLink'>Read the article</a></button>
                </div>


                <div className="container">
                    <h2 className="blogName">6 Shoes Every Woman Should Have in Her Closet</h2>
                    <img className="blogTwoPic" src={flatTwo} width="420px" height="320px" alt="Shoes"/>
                    <button className='springBtn'><a href={`/blog/blogTwo`} rel="noreferrer" className='springLink'>Read the article</a></button>
                </div>

                <div className="container">
                    <h2 className="blogName">7 Trending Shoes for Summer 2024!</h2>
                    <img className="blogTwoPic" src={summerOne} width="420px" height="320px" alt="Shoes"/>
                    <button className='springBtn'><a href={`/blog/blogThree`}  rel="noreferrer" className='springLink'>Read the article</a></button>
                </div>
            </div>
            {/* social media */}
            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Blog;