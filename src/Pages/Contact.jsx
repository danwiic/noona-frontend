import { Helmet } from "react-helmet";
import Layout from "../Components/Navbar/Layout";
import "./styles/Contact.css"
import Map from "../Components/Map/Map";
Map
Helmet
Layout

export default function Contact() {

  function submitForm(e){
    e.preventDefault()
  }

  return(
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Layout>
        <div className="contact__container">
          
          <section className="first__section">
            <h2>Contact Us</h2>
            <hr />

            <div className="shop__info">

              <div className="info">
                <div className="infos">CONTACT</div>
                <div>
                    Tel: +63 9764203909
                  </div>
                  <div>
                  FB: NOONA&apos;S NOODLES
                  </div>
                  <div>
                  Email: noonasnoodles@gmail.com
                  </div>
                </div>
              
              <div className="info">
                <div className="infos">ADDRESS</div>
                  <div>
                    LGM Building Crisostomo Street Cavite City, Cavite, Philippines
                    </div>
                </div>

              <div className="info">
                <div className="infos">OPENING HOURS</div>
                <div>
                Mon - Fri: 9am - 9pm
                  </div>
                  <div>
                  Saturday: 9am - 9pm
                  </div>
                  <div>
                  Sunday: Closed
                  </div>
                </div>
            </div>


              <div className="contact">
                <h2>SEND US A MESSAGE</h2>
                  <form className="contact__form" onSubmit={submitForm}>
                
                    <label>First Name*
                      <input type="text" placeholder="Enter first name..." required/>
                    </label>

                    <label>Last Name*
                      <input type="text" placeholder="Enter last name..." required/>
                    </label>

                    <label>Email*
                      <input type="text" placeholder="Enter email..." required/>
                    </label>

                    <label>Subject
                      <input type="text" placeholder="Enter subject..." required/>
                    </label>

                    <label className="message__con">Message
                      <textarea  placeholder="Type your message here...." type="text" className="message"required/>
                    </label>
                    
                    <button className="btn__contact">SUBMIT</button>
                  </form>
              </div>

              <div className="map__container">
                <Map/>
              </div>
          </section>
          
         

        </div>
      </Layout>
    </div>
  )
};
