import { useState } from 'react'
import './ContactUs.css';
import { MdLocationOn, MdMail } from "react-icons/md";
import { FaPhoneAlt, FaTwitter, FaInstagram} from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

function ContactUs() {
    const [contact, setContact] = useState({
        phoneNumber: '',
        email: '',
        fullName: '',
        companyName: '',
        message: '',

    });

    const handleContactForm = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        setContact({
            phoneNumber: '',
            email: '',
            fullName: '',
            companyName: '',
            message: '',
        
        });
        
    }

  return (
    <div className="contactus">
         <div className='contactus-head'>
            <h3>Contact Us</h3>
        </div>
        <div className='contactus-content'>

            <div className='contactus-details'>
            

                <form onSubmit={handleSubmit}>

                <label htmlFor="fullname">
                        Full Name / Company Name
                    </label>

                    <input
                        id="fullname"
                        type="text"
                        value={contact.fullName}
                        name="fullName"
                        onChange={handleContactForm}
                        placeholder="Enter name here"
                        required
                    />

                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={contact.email}
                        name="email"
                        onChange={handleContactForm}
                        placeholder="Enter email here"
                        required
                    />
                
                    <label htmlFor="phone">
                        Phone Number
                    </label>

                    <input
                        id="phone"
                        type="number"
                        value={contact.phoneNumber}
                        name="phoneNumber"
                        onChange={handleContactForm}
                        placeholder="Enter phone number here"
                        required
                        
                    />
                
                    <label htmlFor="message">
                        How do you want us to help you?
                    </label>

                    <textarea
                        id="message"
                        value={contact.message}
                        name="message"
                        onChange={handleContactForm}
                        placeholder="Enter your message here..."
                        rows={10}
                        required
                    >
                    </textarea>
                    <div className='checkbox-div'>
                    <input
                        id="check"
                        type="checkbox"
                        value={contact.checkbox}
                        name="checkbox"
                        onChange={handleContactForm}
                        reqguired
                    />
                    <p>By contacting, you agree to the<span>terms of use</span>   and our <span>privacy policy</span></p>
                    </div>

                <button>Submit message</button>
                </form>
            </div>
            <div className='contactus-image'>
                <div className='contactus-image-pic'>
                    img
                </div>
                <div className='contactus-image-details'>
                    <div className='contactus-image-writeup'>
                        <div className='contactus-writeup-line'>
                            <div className='contactus-writeup-icon'>
                                <MdLocationOn  className='cont-writeup-icon'/>
                            </div>
                            <div className='contactus-writeup-icon' >
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                        </div>
                        <div className='contactus-writeup-line'>
                            <div className='contactus-writeup-icon'>
                                <FaPhoneAlt  className='cont-writeup-icon'/>
                            </div>
                            <div className='contactus-writeup-icon' >
                                <p>+234 810 2527 421</p>
                            </div>
                        </div>
                        <div className='contactus-writeup-line'>
                            <div className='contactus-writeup-icon'>
                                <MdMail  className='cont-writeup-icon'/>
                            </div>
                            <div className='contactus-writeup-icon' >
                                <p>finallmailsample@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contactus-image-socials'>
                        <div className='contactus-socials'>
                            <a href='' target='_blank'><RiFacebookFill /></a>
                        </div>
                        <div className='contactus-socials'>
                            <a href='' target='_blank'><FaTwitter /></a>
                        </div>
                        <div className='contactus-socials'>
                            <a href='' target='_blank'><FaInstagram /></a>
                        </div>
                    
                    </div>
                </div>


            </div>


        </div>

        
    </div>
  )
}

export default ContactUs