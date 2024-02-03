/* This is a Mobile first Component. Designed to render on mobile devices and smaller screen sizes */

import CartDropdown from "../../cartServices/cart-dropdown/mobile.cart-dropdown";
import CartIcon from "../../cartServices/cart-icon/cart-icon.components";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/user.context";
import { SignOutUser } from "../../../utils/firebase.utils";
import { useAlert } from "../../../contexts/alert.context";
import { Fragment, useContext, useState } from "react";
import { LuLogIn, LuUserCheck } from "react-icons/lu";
import { Container, Navbar } from "react-bootstrap";
import BurgerMenu from './mobile.navdrop';
import { SideNav } from "./side-nav";

import './navbar.styles.scss'

const MobileNavBar = () => {
  const navigate = useNavigate();
  const { addAutoCloseAlert } = useAlert();
  const { currentUser } = useContext(UserContext);
  const [ isBurger, setBurger ] = useState(false);
  const [ cartOpen, setCartOpen ] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);
  
  const authIconStyle = {
    backgroundColor: currentUser ? 'green' : 'yellow',
    borderRadius: '50%',  
    width: '35px',        
    height: '35px',       
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',         
  }

  function toggleMenu() {
    if (isBurger) {
      setBurger(false);
    }
    else { setBurger(true)}
  }

  function toggleCart() {
    if (cartOpen) {
      setCartOpen(false);
    }
    else { setCartOpen(true)}
  }

  const handleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  const handleSignOut = (event) => {
    event.preventDefault();
    addAutoCloseAlert("warning", `You're now signed out! see you soon 🤗`)

    SignOutUser();
    navigate('/auth')
  }

  return (
    <Fragment>
      <Container className="container no-padding-container">
        <nav className="nav bg-gw">

          <div className="container-fluid">
            <div className="nav-burger">
              <button 
                type="button" 
                onClick={toggleMenu}
                className="navbar-toggler burger-button"
              >
                <div className="animated-icon1">                      
                  <span></span>
                
                  <span></span>
                      
                  <span></span>
                </div>
              </button>

              <Navbar.Brand className="nav-brand">
                <Link to="/">
                  <h1>
                    <span className="green">A</span>F
                  </h1>
                </Link>
              </Navbar.Brand>

              <div className="burger-end">
                <span onClick={toggleCart}><CartIcon /></span>
                
                <div className={"auth-icon"} style={authIconStyle}>
                  {
                  currentUser ? (
                    <span className="nav-link"                       
                      onClick={handleSideNav}>
                      <LuUserCheck color="white"/>                       
                    </span>
                    ) : (
                    <Link className="nav-link"
                      to='/auth'>
                        <LuLogIn/>
                      </Link>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={currentUser ? "side-nav" : "dis-non"}>
          {showSideNav && (
            <SideNav
              displayName={currentUser?.displayName}
              onSignOut={handleSignOut}
            />
          )}
          </div>

          {cartOpen && <CartDropdown />}
        </nav>
        {isBurger && <BurgerMenu />}
        <Outlet />
      </Container>
    </Fragment>
  )
}

export default MobileNavBar;