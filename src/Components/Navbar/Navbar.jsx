import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";




export default function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(prev => !prev)
  }


  const navBar = [
    { path: '/', name: "HOME" },
    { path: '/shop', name: "SHOP" },
    { path: '/about', name: "ABOUT" },
    { path: '/contact', name: "CONTACT" }
  ];

  return (
    <>
    <div className="nav__con">
      <Link to={'/'}>
        <h3 className="nav__logo">Noona's 
          <span className="nav__logo_1">oodle</span>
        </h3>
      </Link>

      {navBar.map((nav, index) => (
        <NavLink
          to={nav.path}
          key={index}
          className={({ isActive }) => `nav__list ${isActive ? 'active' : ''}`}
        >
          <div className="nav__text">{nav.name}</div>
        </NavLink>
      ))}

      <div className="nav__right">
        <button className="btn__login">LOGIN</button>
        <FaShoppingCart className="cart__icon"/>
        <GiHamburgerMenu 
          className={isMenuOpen? "openMenu nav__menu" : "closeMenu nav__menu"} 
          onClick={openMenu}
        />
      </div>
    </div>
    {isMenuOpen && (
     <div className="mobile__nav">
      <ul className="mobile__links">
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>
          <Link to={'/shop'}>SHOP</Link>
        </li>
        <li>
          <Link to={'/about'}>ABOUT</Link>
        </li>
        <li>
          <Link to={'/contact'}>CONTACT</Link>
        </li>
        <li>
          <Link to={'/login'}>LOGIN</Link>
        </li>
      </ul>
     </div>
    )}
    </>
  );
}
