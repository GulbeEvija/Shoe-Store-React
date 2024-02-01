import React from "react";
import logo from './picturesOther/shoeStoreLogo.png';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Home";
import Shop from "./Shop";
import EachShoe from "./EachShoe";
import Blog from "./Blog";
import BlogOne from "./BlogOne";
import BlogTwo from "./BlogTwo";
import BlogThree from "./BlogThree";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="flex-center shipping">
        <p>FREE shipping over $99</p>
      </div>
 
    <nav className="flex-space nav-bar mobile">
      <img src={logo} className="logo" alt="Shoe store logo"/>
      <Link to="/" className='link'>Home</Link>
      <Link to="/shop" className='link'>Shop</Link>
      <Link to="/blog" className='link'>Blog</Link>
      <Link to="/contact" className='link'>Contact</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path='/shop/:name' element={<EachShoe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/blogOne" element={<BlogOne />} />
      <Route path="/blog/blogTwo" element={<BlogTwo />} />
      <Route path="/blog/blogThree" element={<BlogThree />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  
  </Router>
  );
}

export default App;
