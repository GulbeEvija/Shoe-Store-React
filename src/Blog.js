import Footer from "./Footer";
import BlogContent from "./BlogContent";

function Blog() {

    return (
        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">Blog</h2>
                <p className="blogText">Get the newest information from the experts!</p>
            </div>

            <BlogContent />

            <Footer />

        </div>
    );
}


export default Blog;