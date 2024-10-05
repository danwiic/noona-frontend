import { Helmet } from "react-helmet";
import Layout from "../Components/Navbar/Layout";
Helmet
Layout

export default function Contact() {
  return(
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Layout>
        <h1>Contact</h1>
      </Layout>
    </div>
  )
};
