import { useState } from 'react';
import Footer from './Footer';
import SummerShoesContent from './SummerShoesContent';
import { dataSummerShoes } from './dataSummerShoes';


function BlogSummerShoes() {

    const [summerShoes, setSummerShoes] = useState(dataSummerShoes);

    return (
        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">7 Trending Shoes for Summer 2024!</h2>
            </div>

            <SummerShoesContent summerShoesContent={summerShoes}/>

            <div className="margin-top">
                <Footer />
            </div>
            

        </div>
    );
}

export default BlogSummerShoes;

