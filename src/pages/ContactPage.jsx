import React from 'react'

const ContactPage = () => {
  return (
    <>
    <div className="contact-page">
        <div className="contact-hero backdrop">
            <div className="container">
            <h1>CONTACT US TO ORDER</h1>
            <p>Send us a message to order your product. Have questions or feedback? reach out to us anytime</p>
            </div>
            
        </div>
        <div className="contact-info">
            <div className="container contacts">
            <div className="info first">
            <i className="fa-solid fa-envelope-circle-check" style={{color: "#2d7221",}}></i>
            <h3>Send  A Mail</h3>
            <p>
You can place an order or make inquiries by sending us a mail using the mail address below.</p>
            <p><b
            style={{color:'#2d7221'}}
            >hashiyahbasharu@gmail.com</b></p>
            </div>

            <div className="info">
            <i className=
            "fa-solid fa-phone-volume" style={{color: "#2d7221",}}></i>
            <h3>Call us- FAST!</h3>
            <p>You can now call to place your order faster and easily.</p>
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
            <p>Send us a message on Whatsapp to place your order and make more inquiries.</p>
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
