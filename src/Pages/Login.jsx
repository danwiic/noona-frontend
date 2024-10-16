import { Link } from "react-router-dom"
import Layout from "../Components/Navbar/Layout"
import "./styles/Login.css"
Link
Layout



export default function Login() {
  return(
    <>
      <Layout>
        <div className="login__container">

          <div className="login__layout">
            <div className="login__image">
              <img src="side2.jpg"/>
            </div>

              <div className="login__form__container">
                  <h2>LOGIN</h2>

                <form className="login__form" onSubmit={(e) => {e.preventDefault}}>
                  <input type="text" placeholder="Username" name="username" />
                  <input type="text" placeholder="Password" name="password" />
                  <Link>Forgot Password?</Link>
                  <button>Login</button>
                  <p>Dont have an account? <Link to="/signup">Signup</Link></p>
                </form>
                
              </div>
          
        </div>
        </div>
      </Layout>
    </>
  )
};
