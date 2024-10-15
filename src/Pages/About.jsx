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

          <div className="image__grid">
            <img src="main.jpeg" alt="" className="about__image" />
          </div>
asda
        </div>
      </Layout>
    </div>
  )
};
