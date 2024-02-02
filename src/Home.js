import video from './picturesOther/homeVideo.mp4';
import pumpsHome from './picturesOther/pumpsHome.jpg';
import loafersHome from './picturesOther/loafersHome.jpg';
import { Link } from "react-router-dom";

import Footer from './Footer';
// import SlidesBootstrap from './SlidesBootstrap';


function Home() {
    return (
        <div>
            <div className='flex-center'>

            {/* video */}
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>

            {/* intro */}

                <div className='home-container'>
                    <h2 className='welcome'>Welcome to the Shoe Store!</h2>
                    <p className='welcomeText'>A place for modern women</p>
                    <button className='shopButton'><a href={`/shop`} rel="noreferrer" className='homeLink'>SHOP NOW</a></button>
                </div>
            </div>
            {/* summer collection and cta */}

            <div>
                <h2 className='spring'>SPRING / SUMMER 2024</h2>
                <button className='springBtn'><a href={`/shop`} rel="noreferrer" className='springLink'>SHOP THE COLLECTION</a></button>
            </div>

{/* shop 2 types */}
            <div className='blue container'>

                <div className='shoesHome'>
                    <div className='container margin'>
                        <img className='bluePic' src={pumpsHome} width="550px" height="550px" alt="Shoes"/>
                        <h4 className='blogHeader'>Uptown pumps</h4>
                        <p className='blogText'>Add luxury to your work wardrobe with these elevated silhouettes.</p>

                        <Link to={`/shop`}>
                            <button className='myButton'>Shop pumps!</button>
                        </Link>
                        
                    </div>

                    <div className='container margin'>
                        <img className='bluePic' src={loafersHome} width="550px" height="550px" alt="Shoes"/>
                        <h4 className='blogHeader'>Downtown loafers</h4>
                        <p className='blogText'>Modern and polished with a dose of effortless edge.</p>
                        <button className='myButton'><a href={`/shop`} rel="noreferrer" className='shopLink'>Shop flats & loafers</a></button>
                    </div>
                </div>
            </div>


            {/* about us and button */}

            <div className='container'>
                    <h2 className='spring'>Explore The shoe blog</h2>
                    <button className='springBtn'><a href={`/blog/blogOne`} rel="noreferrer" className='springLinkTwo'>read the newest article</a></button>
                </div>

            {/* social media */}
            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Home;