import React from "react";
import { toast } from 'react-toastify'

export default function Form() {
    const accesskey=import.meta.env.VITE_ACCESS_KEY;

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", accesskey);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Email sent successfully")
        
        event.target.reset();
      } else {
        toast.error(data.message)
      }
    };
  return (
    <>
      <section className="form-page">
        <div>
          <form onSubmit={onSubmit} className="form">
          <input type="hidden" name="access_key" value={accesskey}/>
            <div className="form-first">
              <div>
                <input type="text" name="fullname" placeholder="Enter your Full Name" required/>
              </div>
              <div>
                <input type="email" name="email" placeholder="Enter your Email" required />
              </div>
            </div>
              <div className="subject">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
            <div className="form-textarea">
                <textarea name="message" id="" placeholder="Message" required></textarea>
            </div>
            
            <div className="submit-btn">
                <button type="submit">Send Message</button>
            </div>
            <span style={{ color: "white", fontSize: "1rem" }}>{result}</span>
          </form>
          
        </div>
      </section>
    </>
  );
}
