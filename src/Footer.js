import instagramIcon from './assets/picturesOther/instagramIcon.png';
import facebookIcon from './assets/picturesOther/facebookIcon.png';
import tiktokIcon from './assets/picturesOther/tiktokIcon.png';
import pinterestIcon from './assets/picturesOther/pinterestIcon.png';
import twitterIcon from './assets/picturesOther/twitterIcon.png';

function Footer() {
    return (
        <div>
            {/* social media */}
            <div className='flex-center'>
                <a href={"https://www.instagram.com/"} target="_blank" rel="noreferrer"><img src={instagramIcon} alt="Instagram"/></a>
                <a href={"https://www.facebook.com/"} target="_blank" rel="noreferrer"><img src={facebookIcon} alt="Facebook"/></a>
                <a href={"https://www.tiktok.com/en/"} target="_blank" rel="noreferrer"><img src={tiktokIcon} alt="TikTok"/></a>
                <a href={"https://www.pinterest.ca/"} target="_blank" rel="noreferrer"><img src={pinterestIcon} alt="Pinterest"/></a>
                <a href={"https://www.instagram.com/"} target="_blank" rel="noreferrer"><img src={twitterIcon} alt="Twitter"/></a>
            </div>

            <div className='flex-center footer'>
                <p>Copyright © 2024 Shoe Store. All Rights Reserved.</p>
            </div>
        </div>
    );
}


export default Footer;