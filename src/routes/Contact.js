import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT ME." text="lats have a chat"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact