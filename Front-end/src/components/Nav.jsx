import logo from "../Assets/argentBankLogo.webp"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from 'react-redux';
import { setLogOut } from "../redux/profileTokenSlice";
import { setResetProfile } from "../redux/profileInfoSlice"

export default function Nav() {
  const token = useSelector(state => state.userToken.token)
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch();
 

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="./" >
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {(!token) ?
          <Link to="/Login" className="link">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
          :
          <>
            <Link to="/user" className="link">
              <i className="fa fa-user-circle"></i>
              {profile.firstName} {profile.lastName}
            </Link>
            <br></br>
            <Link
              className="main-nav-item"
              to={token ? "./" : "./Login/"}
              onClick={() => {
                if (token) {
                  dispatch(setLogOut({}))
                  dispatch(setResetProfile())
                }
              }}>
                {token ? "" : <i className="fa fa-user-circle"></i> }
              
              {token ? " Sign Out" : " Sign In"}
            </Link>


          </>
        }
      </div>
    </nav >
  )
}