import { useParams, useNavigate } from "react-router-dom";
import { dataShop } from "./dataShop";
import Footer from "./Footer";


function EachShoe() {
    const navigate = useNavigate();
    const { name } = useParams();



    return (
        <div>
            {dataShop.filter((item) => item.name === name).map((elem, index) => {
                return (
                    <div key={index}>

                        <div className="container">
                            <img className="shoeShopPic" src={elem.imageShoe} width="550px" height="450px" alt="shoe"/>

                            <div className="container">
                                <h3 className="productName">{elem.title}</h3>
                                <h4 className="productPrice">$ {elem.price}</h4>
                                <p className='blogText'>{elem.text}</p>
                                <button className='shoeButton'>Buy</button>
                            </div>
                        </div>

                        <div className="container">
                            <button className='backBtn' onClick={() => navigate(-1)}>Go Back</button>
                        </div>


                {/* social media */}
            
                    <div className="margin-top">
                        <Footer />
                    </div>
            
                    </div>


                );
            })}
        </div>
    );
}

export default EachShoe;