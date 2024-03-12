import { useState } from "react";
import { dataShoeTrends } from "./dataShoeTrends";
import Footer from "./Footer";


function BlogShoeTrends() {
    

    const [shoes, setShoes] = useState(dataShoeTrends);

    const removeShoes = (id) => {
        let newShoes = shoes.filter(shoe => shoe.id !== id);
        setShoes(newShoes)
      }


    return (
        <div>

            <div className="titleContainer container">
                <h2 className="blogTitle">{shoes.length} shoe trends for 2024!</h2>
            </div>

            <div className="container">
            {shoes.map((element => {
                const {id, name, images} = element;


                return (
                    <div key={id}>
                        <div className="margin-top">
                            {images.map((image, id) => (
                                <img key={id} className="trendPic" src={image} alt="Shoes" width="300px" height="350px"/>
                            ))}

                        </div>

                        <div className="container padding">
                            <h3 className="blogHeader">{id} - {name}</h3>
                            <button className="blogBtn" onClick={() => removeShoes(id)}>I will pass!</button>
                        </div>
                    </div>
                )
            }))}

            <div className="padding">
                <button className="deleteAll" onClick={() => setShoes([])}>Delete all!</button>
            </div>
            

            <div className="margin-top">
                <Footer />
            </div>

            </div>
        </div>
    )
}

export default BlogShoeTrends;