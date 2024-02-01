import { Link } from "react-router-dom";


function Shoes({shoesForSale}) {
    return (
        <div className="rowContainer">
            {shoesForSale.map (( element => {
                const {id, name, title, price, text, searchTerm, imageShoe} = element;
                return (
                    <div key={id} className="shoeContainer">

                    <Link to={`/shop/${element.name}`}>
                        <img className="shoeShopPic" src={imageShoe} width="450px" height="450px" alt="Shoes"/>
                    </Link>
                        <div className="container">
                            <h3 className="productName">{title}</h3>
                            <h4 className="productPrice">$ {price}</h4>
                            <button className='shoeButton'>Buy</button>
                        </div>
                    </div>
                )
            }))}
        </div>
    );
}


export default Shoes;