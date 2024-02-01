import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xbjvnoap");
  
  if (state.succeeded) {
      return <p>Thanks for messaging us!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='container' >
        <div className='size'>
            <label for="full-name" className="blogText">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required="" className="blogText"></input>
        </div>

        <div className='size'>
            <label htmlFor="email" className="blogText">Email Address</label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="email@domain.tld"
                className="blogText"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>

        <label for="message" className="blogText">Your message</label>
        <textarea
            id="message"
            name="message"
            placeholder="Type here..."
            className="blogText"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className='shoeButton'>Submit</button>
    </form>
  );
}

export default ContactForm;
