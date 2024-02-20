import {useState} from "react";
import "./Contact.scss";
import emailjs from '@emailjs/browser'
import "dotenv";

//email service id: service_fw5qioy
//email template id: template_edkwqxs
//public key: vJ2Acp3n5ocFVWwDY

const publicKey = import.meta.env.VITE_Emailjs_Public_Key;
const serviceId = import.meta.env.VITE_Email_Service_Id;
const templateId = import.meta.env.VITE_Email_Template_Id;





function Contact() {
    emailjs.init(`${publicKey}`)
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState('');

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
      };
        
        


      const submit = async () => {
        if (name && email && phone && message && isValidEmail(email)) {
          try {
            // TODO - send mail using EmailJS
            await emailjs.send(`${serviceId}`,
                `${templateId}`, {
              from_name: name,
              from_email: email,
              phone,
              message,
            });
    
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setEmailSent(true);
            setEmailError('');
          } catch (error) {
            setEmailError(error);
            setEmailSent(false);
          }
        } else {
          setEmailError('Please fill in all fields and provide a valid email.');
        }
      };
    
        return (
            <div id="contact">

              <div className="address">
              <h1>Contact Us</h1>
             

                <div>
                  <p>
                    <strong> <h2>Office Address:</h2></strong> Plot 46 Federal Housing Estate, Uyo. Nigeria
                  </p>
                  <p>
                    <strong><i className="bi bi-telephone mx-2 fs-6" style={{color: "red"}}></i></strong> <a href="tel:08022458238" >08022458238</a>
                  </p>
                  <p>
                    <strong><i className="bi bi-envelope-check mx-2 fs-6" style={{color: "red"}}></i></strong><a href="mailto:t.timenigeriaglobal@gmail.com">t.timenigeriaglobal@gmail.com</a></p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.2431219537204!2d7.909157162767801!3d5.02459118011993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d5632298208dd%3A0x64b01dc4bfab9b23!2sFederal%20Housing%20Estate!5e0!3m2!1sen!2sng!4v1705154572300!5m2!1sen!2sng"
                  width="400"
                  height="300"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>




                <div className="contact-inputs">
                  <p>To get free quotation, make enquiries, or hire us, fill the fields below, and we'll reach you soonest.</p>
                <input
                    type="text"
                    placeholder="Your Name:"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your email address:"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                  <input
                    type="text"
                    placeholder="Your active phone number:"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <textarea
                    placeholder="Your message:"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                ></textarea>
                <button onClick={submit}> <i className="bi bi-envelope-check mx-2 fs-6" style={{color: "white"}}></i>Send Message</button>
                {emailError && <span className="error">{emailError}</span>}
                <span className={emailSent ? 'visible' : "undefined"}>
                    Thank you for your message, we will be in touch in no time!
                </span>
                </div>
                

                <div className="container">
                  <hr />
                  <h3 className="fs-6 fw-300">Privacy Policy:</h3> <span>We only receive and process your contact details for the purpose of serving your request for quoation, or consultation in our services.</span>
                  </div>
            </div>
        )
    }
 

  


export default Contact;

