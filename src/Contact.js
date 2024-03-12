import Footer from "./Footer";
import { Accordion } from './Accordion/Accordion';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div>
            <div className="titleContainer container">
                <h2 className="blogTitle">Contact</h2>
                <p className="blogText">Get in touch!</p>
            </div>

            <div className='container'>
                <ContactForm />
            </div>


            <div className="container">
                <h2 className="blogTitle">Frequently Asked Questions (FAQ)</h2>
                <Accordion />
            </div>

            <div className="padding">
                <Footer />
            </div>
        </div>
    );
}


export default Contact;