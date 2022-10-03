import { useState } from 'react'
import './ContactUs.css';

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

        <form onSubmit={handleSubmit}>
        
            <label htmlFor="phone">
                Phone Number
            </label>

            <input
                id="phone"
                type="number"
                value={contact.phoneNumber}
                name="phoneNumber"
                onChange={handleContactForm}
                placeholder="123-456-7890"
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
                placeholder="your@email.com"
                required
            />
    

    
            <label htmlFor="fullname">
                Full Name
            </label>

            <input
                id="fullname"
                type="text"
                value={contact.fullName}
                name="fullName"
                onChange={handleContactForm}
                placeholder="John Doe"
                required
            />
    

        
            <label htmlFor="companyname">
                Company Name
            </label>

            <input
                id="companyname"
                type="text"
                value={contact.companyName}
                name="companyName"
                onChange={handleContactForm}
                placeholder="Your Company Name"
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
                placeholder="Your message here..."
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

        <button>Submit</button>
        </form>

        
    </div>
  )
}

export default ContactUs