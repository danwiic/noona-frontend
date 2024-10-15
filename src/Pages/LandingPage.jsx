import Layout from "../Components/Navbar/Layout"
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  './styles/Landing.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
Link
useEffect

export default function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return(
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Layout>

      {/* <div className="con">
        <div className="what" data-aos="fade-right"></div>
        <div className="what" data-aos="fade-down"></div>
        <div className="what" data-aos="fade-up"></div>
        <div className="what" data-aos="fade-up"></div>
        <div className="what" data-aos="fade-up"></div>
        <div className="what" data-aos="fade-up"></div>
      </div> */}

        <section className="landing__section">
        <div className="con">
            <div className="item" data-aos="fade-down">
              <img src="front-bg.png" alt="" className="landing__image"/>
            </div>

            <div className="item" data-aos="fade-left">
              <h1 className="landing__header">Choose from our selection of noodles and toppings</h1>
              <p className="landing__description">Each is bursting with authentic taste and texture. Whether you prefer your ramyeon spicy, savory, or somewhere in between, the power is in your hands to create a bowl that satisfies your cravings.</p>
              <button><Link to="/shop">LEARN MORE</Link></button>
            </div>

            <div className="item" data-aos="fade-up">
              <img src="display1.jpg" alt=""className="landing__image"/>
            </div>

            <div className="item" data-aos="fade-up">
              <img src="display2.jpg" alt="" className="landing__image"/>
            </div>

            <div className="item" data-aos="fade-right">
              <img src="display3.jpg" alt="" className="landing__image"/>
            </div>
          </div>
        </section>

     
      </Layout>

    </div>
  )
};
