import { Link } from "react-router-dom";
import { dataBlogContent } from "./dataBlogContent";


function BlogContent() {

    return (
        <div>
            {dataBlogContent.map (( element => {
                const {id, blogTitle, blogImage, path } = element;
                return (
                    <div key={id} className="container">
                        <h2 className="blogName">{blogTitle}</h2>
                        <img className="blogTwoPic" src={blogImage} alt="Shoe" width="420px" height="320px" />
                        <Link to={`${element.path}`}>
                            <button className='springBtn springLink'>Read the article</button>
                        </Link>
    
                    </div>
                )
            }))}
        </div>
    );
}


export default BlogContent;

