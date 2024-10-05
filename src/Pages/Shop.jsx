import { Helmet } from "react-helmet"
import Layout from "../Components/Navbar/Layout"
Helmet
export default function Shop() {
  return(
   <div>
    <Helmet>
      <title>Shop</title>
    </Helmet>
     <Layout>
      <h1>Shop</h1>
    </Layout>
   </div>
  )
};
