import Footer from "./Footer";
import BlogContent from "./BlogContent";
import { dataBlogContent } from "./dataBlogContent";
import { useState } from "react";

function Blog() {

    const [blog, setBlog] = useState(dataBlogContent);

    return (
        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">Blog</h2>
                <p className="blogText">Get the newest information from the experts!</p>
            </div>

            <BlogContent blogContent={blog}/>

            <Footer />

        </div>
    );
}


export default Blog;