import Footer from "./Footer";
import { useState } from "react";
import Buttons from "./Buttons";
import Shoes from "./Shoes";
import { dataShop } from "./dataShop";


function Shop() {

    const [allShoes, setAllShoes] = useState(dataShop);
    
    return (


        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">Shop</h2>
                <p className="blogText">Shoes for any occasion!</p>
            </div>

            <Buttons setAllShoes={setAllShoes} dataShop={dataShop}/>
            <Shoes shoesForSale={allShoes} />



            {/* social media */}
            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Shop;