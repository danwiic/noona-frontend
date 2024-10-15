import { Helmet } from "react-helmet"
import Layout from "../Components/Navbar/Layout"
import "./styles/Shop.css"
import { Link } from "react-router-dom"
import shop from "../../JSON FILES/shop.js"
import { useState } from "react"
useState
Link

export default function Shop() {

  const [items, setItems] = useState(shop)
  

  return(
   <div>
    <Helmet>
      <title>Shop</title>
    </Helmet>

     <Layout>
      <div className="shop__con">

        <section className="shop__side">

        <div className="mob__selection">
          <label className="item__category">Select Category</label>
            <select name="cars" id="cars">
              <option value="all">ALL</option>
              <option value="noodles">NOODLES</option>
              <option value="drinks">DRINKS</option>
              <option value="toppings">TOPPINGS</option>
            </select> 
        </div>


          <ul className="shop__selection">

            <li>
              <h2>CATEGORIES</h2>
            </li>

            <li>
              <Link>ALL</Link>
            </li>

            <li>
              <Link>NOODLES</Link>
            </li>

            <li>
              <Link>DRINKS</Link>
            </li>

            <li>
              <Link>TOPPINGS</Link>
            </li>

          </ul>
        </section>

        <div className="shop__items">
          {items.map((item) => (
           <div className="items__container" key={item.id}>
              <img src={item.image} alt={item.name} className="item__image"/>

              <h3>{item.name}</h3>
              <h4>₱{item.price}</h4>
              <button className="cart__add">ADD TO CART</button>
           </div>
          ))}
        </div>

      </div>
    </Layout>
   </div>
  )
};
