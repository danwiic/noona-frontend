import { Helmet } from "react-helmet"
import Layout from "../Components/Navbar/Layout"
Helmet
export default function About() {
  return(
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Layout>
        <h1>ABOUT</h1>
      </Layout>
    </div>
  )
};
