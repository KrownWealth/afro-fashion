/* This is a Large-viewport Component. Designed to render on larger devices or screen sizes */

import CartIcon from "../../cartServices/cart-icon/cart-icon.components";
import CartDropdown from "../../cartServices/cart-dropdown/cart-dropdown";
import { ReactComponent as Logo } from "../../assets/afro-fa.svg";
import { React, useContext, useState , Fragment} from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { SignOutUser } from "../../../utils/firebase.utils";
import { useAlert } from "../../../contexts/alert.context";
import { Navbar, Container } from 'react-bootstrap';
import { LuHelpCircle } from "react-icons/lu";

import './navbar.styles.scss'

const NavBarComponent = () => {
  const navigate = useNavigate();
  const { isCartOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const [ cartOpen, setCartOpen ] = useState(false);
  const { addAutoCloseAlert, addOptionsAlert } = useAlert();

  const authIconStyle = {
    backgroundColor: currentUser ? 'green' : 'yellow',
  }

  const toggleCart = () => {
    if (cartOpen) setCartOpen(false)
    else setCartOpen(true)
  }

  const handleSignOut = (event) => {
    event.preventDefault();

    const handleYes = () => {
      SignOutUser();
      addAutoCloseAlert("success", `You are now signed out! see you soon  🤗`)
      navigate('/auth')
    };
  
    const handleNo = () => {
      addAutoCloseAlert("warning", 'Ok! you are still signed in... 🤗');
    };
    
    addOptionsAlert(
      'warning',
      'Are you signing out?',
      handleYes, handleNo
    );
  }

  return (
    <Fragment>
      <Container className="container no-padding-container">
        
        <Outlet />

        <Navbar fixed="bottom" bg="light">

          {isCartOpen && <CartDropdown />}

          <nav className="navbar bottom">
            <div className="container-fluid">
              <Link className="navigation logo" to='/'>
                <Logo/>
              </Link>

              <Navbar.Brand href="/" className="nav-brand">
                <h1>
                  <span className="green">A</span>
                  <span>fro</span>
                  &nbsp;
                  <span className="green">Fa</span>
                  <span>sh</span>
                  <span className="green">ion</span>
                </h1>
              </Navbar.Brand>

              <ul className="nav nav-tabs justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to='shop'>
                    <span className="nav-title">SHOP</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <span onClick={toggleCart}>
                    <CartIcon />
                  </span>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to='profile'>
                    PROFILE
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to='help'>
                    <span className="help-icon">
                      <LuHelpCircle/>
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to='credits'>
                    CREDITS
                  </Link>
                </li>

                <li className="nav-item" style={authIconStyle}>
                 {
                  currentUser ? (
                    <Link className="nav-link active" aria-current="page"
                      onClick={handleSignOut}>
                      LOGOUT
                    </Link>
                  ) : (
                    <Link className="nav-link active" aria-current="page"
                      to='auth'>
                      LOGIN 
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </Navbar>
      </Container>
    </Fragment>
  )
}


export default NavBarComponent;