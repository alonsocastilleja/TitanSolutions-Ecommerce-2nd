import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm';
import Footer from '../Components/Utilities/Footer';
import NavBar from '../Components/Utilities/NavBar';


const ContactPage = () => {
    return(
        <div>
          <NavBar />
          <ContactForm />
          <Footer />
        </div>
    )
}

export default ContactPage;