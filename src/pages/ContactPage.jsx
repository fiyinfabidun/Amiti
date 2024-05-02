import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div className="contact-page">
        <div className="contact-hero backdrop">
            <div className="container">
            <h1>CONTACT US</h1>
            <p>Have questions or feedback? feel free to reach out to us for any inquiries or assistance </p>
            <p>send us a messsage to place orders.</p>
            </div>
            
        </div>
        <div className="contact-info">
            <div className="container contacts">
            <div className="info first">
            <i className="fa-solid fa-envelope-circle-check" style={{color: "#2d7221",}}></i>
            <h3>Send  A Mail</h3>
            <p>Get in touch with us today! Email us at the mail address below.</p>
            <p><b
            style={{color:'#2d7221'}}
            >hashiyahbasharu@gmail.com</b></p>
            </div>

            <div className="info">
            <i className=
            "fa-solid fa-phone-volume" style={{color: "#2d7221",}}></i>
            <h3>Call Us</h3>
            <p>Need assistance with your order? Dial us directly at the Number idicated below</p>
            <p><b 
            style={{color:'#2d7221'}}
            > +234 8025108533</b></p>
            </div>

            <div className="info">
            <i className=
            "fa-brands fa-whatsapp"
            style={{color: "#2d7221",}}
            ></i>
            <h3>send us a message</h3>
            <p>Have questions or inquiries? Reach out to us! Drop us an email or send us a message on WhatsApp</p>
            <p><b 
            style={{color:'#2d7221'}}
            > +234 8025108533</b></p>
            </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ContactPage