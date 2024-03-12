import { Link } from "react-router-dom";


function BlogContent({blogContent}) {

    return (
        <div>
            {blogContent.map (( element => {
                const {id, blogTitle, blogImage, name } = element;
                return (
                    <div key={id} className="container">
                        <h2 className="blogName">{blogTitle}</h2>
                        <img className="blogTwoPic" src={blogImage} alt="Shoe" width="420px" height="320px" />
                        <Link to={`${element.name}`}>
                            <button className='springBtn springLink'>Read the article</button>
                        </Link>
    
                    </div>
                )
            }))}
        </div>
    );
}


export default BlogContent;

