import argentBank from "../Assets/argentBankLogo.png"
import { Link } from "react-router-dom"

export default function Nav(){

    return(
        <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src= {argentBank}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link to="/Login" className="link"> 
          <i className="fa fa-user-circle"></i>
          Sign In
          </Link>
        </div>
      </nav>
    )
}