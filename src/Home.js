import video from './assets/picturesOther/homeVideo.mp4';
import pumpsHome from './assets/picturesOther/pumpsHome.jpg';
import loafersHome from './assets/picturesOther/loafersHome.jpg';
import { Link } from "react-router-dom";

import Footer from './Footer';


function Home() {
    return (
        <div>
            <div className='flex-center'>

                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>


                <div className='home-container'>
                    <h2 className='welcome'>Welcome to the Shoe Store!</h2>
                    <p className='welcomeText'>A place for modern women</p>
                    <Link to={`/shop`}>
                        <button className='shopButton homeLink'>SHOP NOW</button>
                    </Link>
                    
                </div>
            </div>

            <div>
                <h2 className='spring'>SPRING / SUMMER 2024</h2>
                <Link to={`/shop`}>
                    <button className='springBtn springLink'>Shop the new collection</button>
                </Link>
            </div>

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

                        <Link to={`/shop`}>
                            <button className='myButton'>Shop flats & loafers</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container'>
                    <h2 className='spring'>Explore The shoe blog</h2>
                    <Link to={`/blog`}>
                        <button className='springBtn springLinkTwo'>read the newest article</button>
                    </Link>
                </div>

            <Footer />

        </div>
    );
}


export default Home;