import { Link } from "react-router-dom"
import Layout from "../Components/Navbar/Layout"
import "./styles/Signup.css"

export default function Signup() {
  return(
    <>
      <Layout>
        <div className="signup__container">

          <div className="signup__layout">
            <div className="signup__image">
              <img src="side2.jpg"/>
            </div>

              <div className="signup__form__container">
                  <h2>SIGNUP</h2>

                <form className="signup__form" onSubmit={(e) => {e.preventDefault}}>
                  <input type="text" placeholder="Username" name="username" />
                  <input type="text" placeholder="Email" name="username" />
                  <input type="text" placeholder="Create password" name="password" />
                  <input type="text" placeholder="Confirm password" name="password" />
                  
                  <button>Create account</button>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
                
              </div>
          
        </div>
        </div>
      </Layout>
    </>
  )
};
