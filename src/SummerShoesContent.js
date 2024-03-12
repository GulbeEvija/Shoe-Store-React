import { Link } from "react-router-dom";


function SummerShoesContent({summerShoesContent}) {
    return (
        <div>
            {summerShoesContent.map (( element => {
                const{id, title, image } = element;
                return (
                    <div key={id} className="container">
                        <h3 className="blogHeader">{title}</h3>
                        <img src={image} width="420px" height="320px" alt="Shoes"/>
                        <Link to={`${element.name}`}>
                            <button className='shoeButton shopLink'>Buy this shoe!</button>
                        </Link>
                    </div>
                )
            }))}
           
        </div>
    );
}


export default SummerShoesContent;

