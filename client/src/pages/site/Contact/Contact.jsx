import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
    const form = useRef();

   
  const sendEmail = (e) => {
  
 e.preventDefault()
    emailjs.sendForm('service_5qkhepg', 'template_g0m1t05', form.current, 'YwBxsj-wvbTZC-e_v')
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your message has been sent!',
        });
        form.current.reset();
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: `Something went wrong: ${error.text}`,
        });
      });
  };


    return (
        <div className="page-content">
        <Helmet>
            <title> Contact Us</title>
        </Helmet>
            <div id="shopify-section-contact-hero" className="shopify-section">
                <div className="holder mt-0 py-5 py-md-10 bg-cover lazyloaded" 
                     style={{ 
                         backgroundImage: 'url("https://foxic-theme.myshopify.com/cdn/shop/files/Untitled-2_2.jpg?v=1614300044")',color:"white"
                     }}>
                    <div className="container">
                        <div className="page-title-bg text-left">
                            <h1 className="text-left text-light">Contact Us</h1>
                            <p>
                                Our web company consists of web programmers and designers with extensive experience in the web market. Each of us worked as hired worker to create templates for Magento, Shopify, Wordpress and others. We decided to unite our forces and to do projects such as we would like them to be in accordance to our experience in customer support. We want to make online shops <strong>better</strong> and more interesting.
                            </p>
                            <p>
                                We like <strong>Shopify</strong> because Shopify provides You with a variety of tools to help You set up and run Your business. Depending on the plan that You choose, You can find everything You need to showcase Your products online, to process payments, and to make Your store work for You.
                            </p>
                            <p>
                                <em>Our support is available 10.00 – 18.00 GMT + 2 (Monday – Friday). We usually get back to you within 24 hours.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="shopify-section-contact-icons" className="shopify-section">
                <div className="holder holder-mt-medium" id="holder-contact-icons">
                    <div className="container">
                        <div className="title-wrap text-center">
                            <h2 className="h1-style">OUR INFORMATION</h2>
                            <div className="h-sub maxW-825">
                                <p>
                                    <em>We hired only seasoned, professional technicians with at least 5-10 years experience and usually many more. They have put full experience into the <strong>FOXic</strong></em>
                                </p>
                            </div>
                        </div>
                        <div className="text-icn-blocks-row justify-content-start">
                            <div className="text-icn-block-hor">
                                <div className="icn">
                                <i class="fa-sharp fa-light fa-map-location icon-location"></i>
                                    
                                </div>
                                <div className="text">
                                    <h4>Address</h4>
                                    <p>Level 3 178 Clarence, Sydney NSW00 2005</p>
                                </div>
                            </div>
                            <div className="text-icn-block-hor">
                                <div className="icn">
                                <i class="fa-light fa-phone icon-phone"></i>
                                </div>
                                <div className="text">
                                    <h4>Phone</h4>
                                    <p>+3 800 555 35 35</p>
                                </div>
                            </div>
                            <div className="text-icn-block-hor">
                                <div className="icn">
                                <i class="fa-light fa-clock icon-watch"></i>
                
                                </div>
                                <div className="text">
                                    <h4>Hours:</h4>
                                    <p>7 Days a week from 09:00 am to 5:00 pm</p>
                                </div>
                            </div>
                            <div className="text-icn-block-hor">
                                <div className="icn">
                                <i class="fa-light fa-envelope icon-envelope-2"></i>
                                </div>
                                <div className="text">
                                    <h4>E-mail:</h4>
                                    <p><a href="mailto:foxsupport@gmail.com">foxsupport@gmail.com</a></p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form and Map Section */}
            <div id="shopify-section-contact-form-map" className="shopify-section">
                <div className="holder holder-mt-medium">
                    <div className="container">
                        <div className="row vert-margin">
                            <div className="col-6">
                                <div className="title-wrap text-left">
                                    <h2 className="h1-style">GET IN TOUCH WITH US</h2>
                                    <div className="h-sub maxW-825">
                                        <p>We do not like spam as much (or more!) than you and promise to never rent, share, or abuse your e-mail address and contact information in any way.</p>
                                    </div>
                                </div>
                                <form ref={form} onSubmit={sendEmail} id="ContactForm01" className="contact-form" >
                                    <input type="hidden" name="form_type" value="contact" />
                                    <input type="hidden" name="utf8" value="✓" />
                                    <div className="row vert-margin-middle">
                                        <div className="col-lg">
                                            <div className="form-group">
                                                <input className="form-control form-control--sm" type="text" name="user_name" placeholder="Name" id="ContactForm01Name"  />
                                            </div>
                                        </div>
                                        <div className="col-lg">
                                            <div className="form-group">
                                                <input className="form-control form-control--sm" type="email" name="user_email" placeholder="Email" id="ContactForm01Email"  required />
                                            </div>
                                        </div>
                                        <div className="col-lg">
                                            <div className="form-group">
                                                <input className="form-control form-control--sm" type="tel" id="ContactForm01Phone" name="user_phone" placeholder="Phone Number" pattern="[0-9\-]*"  />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-1 mt-lg-3">
                                        <div className="form-group">
                                            <textarea className="form-control form-control--sm textarea--height-200" name="user_message" id="ContactForm01Body" placeholder="Message"></textarea>
                                        </div>
                                        <button className="btn btn--md mt-md-1" type='send'>Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-6">
                                <div className="contact-map bg-cover lazyloaded">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48621.22748846351!2d49.943707554357886!3d40.390532943163976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063005bfed44b%3A0xbe3f71b324a34e5f!2sEmil%20supermarket!5e0!3m2!1str!2saz!4v1718729357634!5m2!1str!2saz" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
