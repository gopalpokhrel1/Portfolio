import React from 'react'
import Navbar from './Navbar'
import ContactBox from './ContactBox'
import Form from './Form'
import Footer from '../components/Footer'

export default function Contact() {

  const contact_content = [
    {
      title:"My Address",
      description:"Dudhpati-Bhaktapur,Nepal",
      logo:"/location.png"
    },
    {
      title:"Social Profiles",
      logo:"/share.png"
    },
    {
      title:"Email Me",
      description:"gopalpokhrel101@gmail.com",
      logo:"/mail.png"
    },
    {
      title:"Call Me",
      description:"+977 9866202294",
      logo:"/phone-call.png"
    }
    
  ]
  return (
    <>
    <Navbar/>

    <div className='page'>
    <div className="section-heading">
          <div className="section-first-heading">
            <p>CONTACT</p>
            <div className="section-line"></div>
          </div>

          <h2>CONTACT ME</h2>
        </div>
          
          <div className='contact-grid'>
            {
              contact_content.map((item, index)=>{
              return(
                <>
                <div>
                  <ContactBox key={index} heading={item.title} description={item.description}  logo={item.logo}/>
                </div>
                </>
              )
              })
            }
          </div>
        <Form/>
    </div>

    <Footer/>
    </>
  )
}
