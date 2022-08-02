import { useState, useEffect } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import './NewsLetter.css';


const CustomForm = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fname">
                    First Name
                </label>

                <input
                    id="fname"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="Jane"
                    required
                />
            </div>

            <div>
                <label htmlFor="lname">
                    Last Name
                </label>

                <input
                    id="lname"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Doe"
                    required
                />
            </div>

            <div>
                <label htmlFor="email">
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                />
            </div>

            {status === "sending" && (
                <div className="alert alert-sending">
                    sending...
                </div>
            )}

            {status === "error" && (
                <div 
                    className="alert alert-error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status === "success" && (
                <div
                    className="alert alert-success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        
            <button>Subscribe</button>

        </form>
        </>
    );
};

function NewsLetter() {
  return (
    <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>

        <div>
            <p>
                Subscribe to our newsletter to get weekly and monthly updates on newly added features and better ways to monitor your finances.
            </p>
        </div>

        <div>
            <MailchimpSubscribe 
                url={`${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}

                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            
            />
        </div>
    </div>
  )
}

export default NewsLetter