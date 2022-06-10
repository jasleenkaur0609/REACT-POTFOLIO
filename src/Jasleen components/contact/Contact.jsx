import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useState } from "react";


  const Contact = () => {
  const [done] = useState(false)
  
  

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title" style = {{color:'#183a1d'}}>Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <h5 style = {{color:'#183a1d'}}>+91 8437589148</h5>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <h5 style = {{color:'#183a1d'}}>jasleensejal2003@gmail.com</h5>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              <h5 style = {{color:'#183a1d'}}>Street No.02, Jujhar Nagar, Patiala</h5>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc" style = {{color:'#183a1d'}}>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form >
            <input type="text" placeholder="Name" name="user_name"  />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
