// Write your code here
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <>
      <Popup
        className="popup-container"
        modal
        trigger={
          <button
            type="button"
            className="trigger-button "
            testid=" hamburgerIconButton"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="popup-card">
            <button
              type="button"
              className=" close-button"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="ul-list">
              <li>
                <Link to="/" className="list-item">
                  <AiFillHome className="icon" />
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link to="/about" className="list-item">
                  <BsInfoCircleFill className="icon" />
                  <h1>About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </>
  </div>
)

export default Header
