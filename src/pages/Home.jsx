import React from 'react';
import img1 from '../assets/wp.png';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import AOS  from 'aos';
import { useEffect } from 'react';
import aboutismg from '../assets/Basharu.png';

import hear from '../assets/Hearing Aids.png';
import img3 from '../assets/2.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/1.png';
import jaws from '../assets/JAWS.png';

import logo1 from '../assets/index-logo-large.png'
import logo2 from '../assets/freedom-scientific-logo.png';
import logo3 from '../assets/MaxiAids-logo-blue.png'
import logo4 from '../assets/th.jpg';
import Faq from '../components/Faq';


function Home() {

  useEffect(() => {
  AOS.init({duration:2000})
  }, [])
  
  return (
    <>
    <div className="hero-segment backdrop">
     <div className= "hero-text" >
      <div className="container">
     
        <div className="text">
        <h1 className="brand-name">Amiti General Services LLC</h1>
        <h1 className="brand-name"><b>Leading Assistive Technology Provider in west Africa</b></h1>
        <h1  data-aos='fade-right'>Making a difference in the lives of people with disabilities a device at a time
 </h1>
        <p>Empowering independence through innovative equipment for disabilities.</p>
        <button><Link to='/Contact'>Contact us</Link></button>
        </div>
     
      </div>
       
    </div>
    </div>
    <div className="container brands">
      <p>In Partnership With</p>
      
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
      <img src={logo4} alt="" />
      <img src={logo1} alt="" />


    </div>
    <div className="main-seg">
      <div className="first-segment container">
        <div className="head-text"   data-aos='fade-right'>
           <h2>
            <b>Amiti generals</b> is the top choice for cutting-edge disability software and equipment in West Africa

           </h2>
           <p>
           Our mission is to enhance the lives of people with disabilities by offering top-notch solutions, ranging from reading and listening devices to sensory equipment. With our commitment to innovation, we strive to make everyday tasks more accessible and enjoyable for individuals with disabilities across the region.
           </p>
           <button> <Link to='/Shop'> View Shop</Link>
           </button>
        </div>
        <div className="head-img">
           <img src={img1} alt="" />
        </div>
      </div>
    <div className="body-text">
      <div className=" sec-seg container">
      <h2>OUR <b>BEST SELLING </b> PRODUCTS</h2>
      <p className='para'>
      Discover our handpicked selection of top-requested products, based on customer feedback, tailored to your needs and preferences.</p>

   <div className="product-list"  data-aos='fade-up'>
   <Card
        imageUrl={hear}
        title="Hearing Aids"
        content="Improve auditory perception and communication for individuals with hearing loss, allowing them to participate fully in conversations, enjoy multimedia content, and engage in social activities with greater clarity.
        "
        
      />
      <Card
        imageUrl={img3}
        title="Duxbury Braille Translator"
        content="Convert electronic text into Braille format, allowing visually impaired individuals to access written materials in a tactile format, promoting literacy and inclusion."
        
      />
      <Card
        imageUrl={img4}
        title="Perkin Brailler"
        content="
        Enable efficient Braille writing and note-taking, essential for visually impaired individuals to communicate and access written information."
        
      />
      <Card
        imageUrl={img5}
        title="Pearl Reading Camera"
        content="Provide instant access to printed text by capturing and converting it into accessible formats such as audio or Braille, enabling visually impaired users to read books, documents, and other printed materials."
        
      />
      <Card
        imageUrl={img6}
        title="Index Everest Braille Embossers"
        content= "Facilitate the production of high-quality Braille documents, empowering visually impaired users with access to printed materials for education, work, and daily living."
        
      />
      <Card
        imageUrl={jaws}
        title="Jaws Screen Reader"
        content ="Enhance digital accessibility by converting on-screen content into synthesized speech or Braille output, enabling visually impaired individuals to navigate computers and mobile devices independently."
        
      />
   </div>
      </div>
      <div className="banner-section">
        <div className="container">
        <h1>Inquiries about ordering in bulk?</h1>
          <p>looking to place <b>excluisve wholesale or bulk orders?</b> contact us directly for faster responses and handling. we are here to assist you with your large-scale needs</p>
          <button><Link to='/Contact'>Send us a message</Link></button>
        </div>
        
      </div>

      <div className="accordion container">
        <div className="faq-title">
          <h1>Frequently Asked Questions</h1>
          <p className='para'>
            our answers to frequently asked questions
          </p>
        </div>
        <div className="faqs">
         <Faq
          question={ "Why is the price not listed on the site together with the products?"}
          answer={"The fluctuation in rates and currency exchange policies, along with our commitment to subsidize rates for individuals in great need, necessitates a personalized approach to pricing. Please reach out to us via mail or phone for pricing inquiries, and we'll respond promptly."}
         />

          <Faq
          question={ "Are there shipping costs and how do they work?"}
          answer={'Yes, shipping costs apply. We prioritize affordability and reliability when selecting shipment services to ensure your products reach you safely. Details regarding delivery and associated costs will be communicated to you by our team.'}
         />

          <Faq
          question={ "I'm not sure of the product I want to get, can you help?"}
          answer={"Absolutely! We're here to assist you in finding the right assistive technology for your needs. Simply provide us with a detailed explanation of your requirements, and we'll guide you towards the most suitable product."}
         />

          <Faq
          question={ "Do you offer refunds or accept product returns?"}
          answer={'Our policy generally prohibits refunds, with limited exceptions. For further details or specific inquiries regarding returns, please contact our team for assistance.'}
         />

          <Faq
          question={ "Would I receive a guide on how to use the product?"}
          answer={'Yes, each product includes comprehensive training manuals to help you maximize its functionality and benefits.'}
         />
        </div>
      </div>


      <h2 
      className='about-us-title'
      data-aos='fade-down'>
      <b>About us</b> </h2>

      <div className="first-segment about-us container">

      <div className="head-img">
           <img src={aboutismg} alt="" />
        </div>
        <div className="head-text"   data-aos='fade-up'>
           
           <p>
           Established in 1996 by the late Barrister Danlami Basharu, AMITI General Services is deeply committed to empowering individuals with disabilities across West Africa. Today, under the stewardship of Barrister Basharu's family, we continue his legacy of providing essential assistive technology to enhance the lives of people with disabilities.
           </p>
           <p>
           Discover the remarkable and life changing journey of Barrister Danlami Basharu here <b>link</b>
           </p>
           <div className="about-icon">


           </div>
        </div>
      
      </div>
    </div>
    </div>
   
    </>
  )
}

export default Home;
