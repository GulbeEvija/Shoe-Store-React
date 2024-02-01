import summerOne from './picturesShoes/summerOne.png';
import summerTwo from './picturesShoes/summerTwo.png';
import summerThree from './picturesShoes/summerThree.png';
import summerFour from './picturesShoes/summerFour.png';
import summerFive from './picturesShoes/summerFive.png';
import summerSix from './picturesShoes/summerSix.png';
import summerSeven from './picturesShoes/summerSeven.png';
import Footer from './Footer';


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
                    <button className='shoeButton'><a href={`/shop/Red-sandals`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
                </div>

            <div className="container">
                <h3 className="blogHeader">Summer Sneakers</h3>
                <img src={summerTwo} width="420px" height="320px" alt="Shoes"/>
                <button className='shoeButton'><a href={`/shop/White-leather-sneakers`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
            </div>

            <div className="container">
                <h3 className="blogHeader">Espadrilles</h3>
                <img src={summerThree} width="420px" height="320px" alt="Shoes"/>
                <button className='shoeButton'><a href={`/shop/Red-Espadrilles`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
            </div>

            <div className="container">
                <h3 className="blogHeader">Ballet Flats</h3>
                <img src={summerFour} width="420px" height="320px" alt="Shoes"/>
                <button className='shoeButton'><a href={`/shop/Pink-leather-flats`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
            </div>

            <div className="container">
                <h3 className="blogHeader">Summer Loafers</h3>
                <img src={summerFive} width="420px" height="320px" alt="Shoes"/>
                <button className='shoeButton'><a href={`/shop/Summer-suede-loafers`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
            </div>

            <div className="container">
                <h3 className="blogHeader">Slide Sandals</h3>
                <img src={summerSix} width="420px" height="320px" alt="Shoes"/>
                <button className='shoeButton'><a href={`/shop/Leather-slides`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
            </div>

            <div className="container">
                <h3 className="blogHeader">Fisherman Sandals</h3>
                <img src={summerSeven} width="420px" height="320px" alt="Shoes"/>
                <button className='shoeButton'><a href={`/shop/Fishermen-sandals`}  rel="noreferrer" className='shopLink'>Buy this shoe!</a></button>
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
