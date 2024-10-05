import Navbar from "./Navbar.jsx";

export default function Layout({children}) {
  return(
    <div>
      <Navbar/>
      {children}
    </div>
  )
};
