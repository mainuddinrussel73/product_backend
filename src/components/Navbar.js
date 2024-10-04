import React,{ useState,useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { FiHome, FiInfo, FiBookOpen, FiHelpCircle } from 'react-icons/fi'; // Icons for links
import weblogo from '../images/logo.png'
import { isAuthenticated, logout } from '../utils/auth';

const Navbar = ({setIsAuthenticat}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsAuthenticat(false);
    closeDropdown();
  };
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <>
      <nav className={`navbar ${isFixed ? 'fixed-navbar' : ''}`}>
      <div className="navbar-logo-title">
          {/* Logo */}
          <Link to="/">
            <img src={weblogo} alt="Book Shop Logo" className="navbar-logo" />
          </Link>
          {/* Website Title */}
          <h1 className="navbar-title">Groot Readers</h1>
      </div>
      {!isAuthenticated() ? (
          <div className='nav-div' ref={dropdownRef}>
              <ul  className={`nav-links-l ${isOpen ? 'active' : ''}`} >
                
                <li><button className="nav-button3" >
                  <Link onClick={closeDropdown} to="/signup">Sign Up</Link>
                </button></li>
                <li><button className="nav-button3">
                <Link onClick={closeDropdown} to="/login">Log In</Link>
                  </button></li>

              </ul>

              <div className={`menu-toggle ${isOpen ? 'open' : ''}`}>
              {/* Hamburger or Cross Icon */}
                {isOpen ? (
                  <FaTimes color="#7D4F4A" size={30} className="icon close-icon" onClick={toggleMenu} />
                ) : (
                  <FaBars color="#7D4F4A" size={30} className="icon hamburger-icon" onClick={toggleMenu} />
                )}
              </div>
          </div>
          
        ) : (
          <div className='nav-div' ref={dropdownRef} >
            <ul  className={`nav-links ${isOpen ? 'active' : ''}`}>
              <li>
                  <Link className='nav-item' to="/" onClick={closeDropdown}>
                
                      <div>
                      <FiHome className="nav-icon" /> 
                      </div>
                      <div>
                        <p>Home</p>
                      </div>
                  
                  </Link>
                </li>
              <li>
                <Link  className='nav-item' to="/about" onClick={closeDropdown}>
              
                    <div>
                    <FiInfo className="nav-icon" /> 
                    </div>
                    <div>
                      <p>About</p>
                    </div>
                </Link>
              </li>
              <li>
                <Link  className='nav-item' to="/blog" onClick={closeDropdown}>
                
                    <div>
                    <FiBookOpen className="nav-icon" /> 
                    </div>
                    <div>
                      <p>Blog</p>
                    </div>
                
                
                </Link>
              </li>
              <li>
                <Link  className='nav-item' to="/faq" onClick={closeDropdown} >
                  
                    <div >
                    <FiHelpCircle className="nav-icon" /> 
                    </div>
                    <div>
                      <p>FAQ</p>
                    </div>
                
                </Link>
              </li>
              <li><button className="nav-button2" onClick={closeDropdown}>Buy Book</button></li>
              <li><button className="nav-button2" onClick={handleLogout}>Log out</button></li>

            </ul>
            <div className="nav-buttons">
              <button className="nav-button1" onClick={closeDropdown}>Buy Book</button>
              <button className="nav-button1" onClick={handleLogout}>Log out</button>
            </div>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`}>
              {/* Hamburger or Cross Icon */}
                {isOpen ? (
                  <FaTimes color="#7D4F4A" size={30} className="icon close-icon" onClick={toggleMenu} />
                ) : (
                  <FaBars color="#7D4F4A" size={30} className="icon hamburger-icon" onClick={toggleMenu} />
                )}
            </div>
          </div>
        )}
    
      
    </nav>
     {/* Translucent overlay */}
     {isOpen && <div className="dropdown-overlay" onClick={closeDropdown}></div>}
    </>
   
  );
};

export default Navbar;
