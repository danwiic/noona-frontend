import Layout from "../Components/Navbar/Layout"
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  './styles/Landing.css'
import { useEffect } from "react";
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

     <section>
     <div className="con">
        <div className="item" data-aos="fade-down">
          <img src="front-bg.png" alt="" />
        </div>

        <div className="item" data-aos="fade-left">
          <h1 className="nga1">Choose from our selection of noodles and toppings</h1>
          <p>Each is bursting with authentic taste and texture. Whether you prefer your ramyeon spicy, savory, or somewhere in between, the power is in your hands to create a bowl that satisfies your cravings.</p>
          <button>LEARN MORE</button>
        </div>

        <div className="item" data-aos="fade-up">
          <img src="display1.jpg" alt="" />
        </div>

        <div className="item" data-aos="fade-up">
          <img src="display2.jpg" alt="" />
        </div>

        <div className="item" data-aos="fade-right">
          <img src="display3.jpg" alt="" />
        </div>
      </div>
     </section>

     
      </Layout>

    </div>
  )
};
