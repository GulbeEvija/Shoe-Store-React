import summerOne from './picturesShoes/summerOne.png';
import summerTwo from './picturesShoes/summerTwo.png';
import summerThree from './picturesShoes/summerThree.png';
import summerFour from './picturesShoes/summerFour.png';
import summerFive from './picturesShoes/summerFive.png';
import summerSix from './picturesShoes/summerSix.png';
import summerSeven from './picturesShoes/summerSeven.png';
import Footer from './Footer';
import { Link } from "react-router-dom";


function BlogThree() {
    return (
        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">7 Trending Shoes for Summer 2024!</h2>
            </div>

            <div className="container">
                
                <div className="container">
                    <h3 className="blogHeader">Strappy Sandals</h3>
                    <img src={summerOne} width="420px" height="320px" alt="Shoes"/>
                    <Link to={`/shop/Red-sandals`}>
                        <button className='shoeButton shopLink'>Buy this shoe!</button>
                    </Link>
                </div>

            <div className="container">
                <h3 className="blogHeader">Summer Sneakers</h3>
                <img src={summerTwo} width="420px" height="320px" alt="Shoes"/>
                <Link to={`/shop/White-leather-sneakers`}>
                    <button className='shoeButton shopLink'>Buy this shoe!</button>
                </Link>
            </div>

            <div className="container">
                <h3 className="blogHeader">Espadrilles</h3>
                <img src={summerThree} width="420px" height="320px" alt="Shoes"/>
                <Link to={`/shop/Red-Espadrilles`}>
                    <button className='shoeButton shopLink'>Buy this shoe!</button>
                </Link>
            </div>

            <div className="container">
                <h3 className="blogHeader">Ballet Flats</h3>
                <img src={summerFour} width="420px" height="320px" alt="Shoes"/>
                <Link to={`/shop/Pink-leather-flats`}>
                    <button className='shoeButton shopLink'>Buy this shoe!</button>
                </Link>
            </div>

            <div className="container">
                <h3 className="blogHeader">Summer Loafers</h3>
                <img src={summerFive} width="420px" height="320px" alt="Shoes"/>
                <Link to={`/shop/Summer-suede-loafers`}>
                    <button className='shoeButton shopLink'>Buy this shoe!</button>
                </Link>
            </div>

            <div className="container">
                <h3 className="blogHeader">Slide Sandals</h3>
                <img src={summerSix} width="420px" height="320px" alt="Shoes"/>
                <Link to={`/shop/Leather-slides`}>
                    <button className='shoeButton shopLink'>Buy this shoe!</button>
                </Link>
            </div>

            <div className="container">
                <h3 className="blogHeader">Fisherman Sandals</h3>
                <img src={summerSeven} width="420px" height="320px" alt="Shoes"/>
                <Link to={`/shop/Fishermen-sandals`}>
                    <button className='shoeButton shopLink'>Buy this shoe!</button>
                </Link>
            </div>
            </div>
            
            {/* social media */}
            
            <div className="margin-top">
                <Footer />
            </div>
            

        </div>
    );
}


export default BlogThree;

