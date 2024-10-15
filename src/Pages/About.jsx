import { Helmet } from "react-helmet"
import "./styles/About.css"
import Layout from "../Components/Navbar/Layout"
Helmet
export default function About() {
  return(
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Layout>
        <div className="about__container">

          <div className="about__content" data-aos="zoom-out-up">
            <h2 className="about__header">Welcome to Noona&apos;s Noodles!</h2>

            <p> Your number one source for all things related in koreans.
              We are dedicated to giving you the very best of noodle(ramen), drinks,
              meats, ice creams, snacks, etc.
              with a focus on dependability, customer service and uniqueness.
            </p>
 
            <p>
              Founded in [year] by Jace Jeong, Shine Korea Supermarket has
              come a long way from its beginnings in a 10 No. 3, 60 Timog Avenue
              Corner Panay Avenue, Diliman, South Triangle, Lungsod Quezon,
              1103 Kalakhang Maynila
            </p>
  
            <p>
              When the store founder first started out, his passion for
              marketing and selling and to give other people their wants and needs drove him to do intense research and decided to
              established a business and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers online and walk-ins, you can also find us in Facebook and GrabMart. And we are thrilled to be a part of the quirky, and
              fantastic wing of the Korean stores industry.
            </p>
     
            <p>We hope you enjoy our products as much as we enjoy offering
              them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
 
             <p>Sincerely,</p>

             <h3>Jace Jeong, CEO, Founder.</h3>

              <br />
          </div>



         <section className="shop__gallery">

         <h1 className="section__header" data-aos="fade-down" >
            SHOP GALLERY
          </h1>
          <div className="image__grid">

            <div className="about__image" data-aos="fade-right">
              <img src="side.jpg" alt="" className="img_abt" />
            </div>

            <div className="about__image" data-aos="fade-up">
              <img src="side1.jpg" alt="" className="img_abt" />
            </div>

            <div className="about__image" data-aos="fade-up">
              <img src="side2.jpg" alt="" className="img_abt" />
            </div>

            <div className="about__image" data-aos="fade-left">
              <img src="side3.jpg" alt="" className="img_abt" />
            </div>

          </div>
         </section>
       
        
      
        </div>
      </Layout>
    </div>
  )
};
