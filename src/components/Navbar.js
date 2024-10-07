import React,{ useState,useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiBooksBold as ImBooks } from "react-icons/pi";

import { FaBars, FaTimes, FaArrowDown } from "react-icons/fa";
import { FiHome, FiInfo, FiBookOpen, FiHelpCircle } from 'react-icons/fi'; // Icons for links
import weblogo from '../images/logo.png'
import { useAuth } from '../AuthContext'; // Import the custom hook

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth(); // Get the current authenticated user
  const [dropdownOpensub, setDropdownOpensub] = useState(false);

  if(currentUser != null){
    if (currentUser.displayName == undefined || currentUser.displayName == '' ){
      currentUser.displayName = "Unknown"
    }
  }
 

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpensub(!dropdownOpensub);
  };
  const closeDropdownsub = () => {
    setDropdownOpensub(false);
  };
  const dropdownRefsub = useRef(null); // Reference for dropdown

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefsub.current && !dropdownRefsub.current.contains(event.target)) {
        closeDropdownsub(false); // Close the dropdown
      }
    };

    // Add event listener for document clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRefsub]);
  const handleLogout = async () => {
    try {
      await logout();
      console.log('User logged out');
      navigate('/login');
      closeDropdown();
      // Redirect to login page or home page after logout
    } catch (error) {
      console.error('Logout error:', error.message);
    }
    
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
    <nav className={`navbar ${isFixed ? 'fixed-navbar' : ''}`} >
    <div className="navbar-logo-title">
        {/* Logo */}
        <Link to="/">
          <img src={weblogo} alt="Book Shop Logo" className="navbar-logo" />
        </Link>
        {/* Website Title */}
        <h1 className="navbar-title">Groot Readers</h1>
    </div>
    { !currentUser ? (
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
              <div className='nav-buttons'>

                <div className="nav-button2"
                  onClick={() => setIsAccordionOpen(!isAccordionOpen)}>
                  <div style={{ position : "relative" }}>
                      <div style={{ marginTop : "0px" }}>
                        <img src={currentUser.photoURL || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'} alt="User Avatar" className="user-avatar" />
                        <span className="bubble-count3">12</span>
                      </div>
                  </div>
                  <div className='nav-button2-sub' >
                      <p style={{ width: "auto",  marginTop : "18px" }}>{currentUser.displayName}</p>
                      
                  </div>
                  
                  
                
        
                </div>
              </div> 
            
            </li>
            {isAccordionOpen && (
              <li>
              <div className='nav-buttons'>
                <div className='nav-button2'>
                <div  className={'arrord-menu'}  >
                      
                      <Link style={{ textDecoration: "none" }} to={'/profile'}>View Profile</Link>
                      <Link style={{ textDecoration: "none" }}  to={'/about'} > About </Link>

                      <a onClick={handleLogout}>Logout</a>
                  </div>
                </div>
                  
              </div>

              </li>

            )}
            
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
              <Link  className='nav-item' to="/books" onClick={closeDropdown}>
            
                  <div>
                  <ImBooks className="nav-icon" /> 
                  </div>
                  <div>
                    <p>Books</p>
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
            {currentUser && (
             <li>
              <div className='nav-buttons'>
                <div className="nav-button2">
                  <div style={{  position : "relative" }}>
                    <div style={{ marginTop : "8px" }}>
                      <FaShoppingCart size={20} />
                      <span className="bubble-count">2</span>
                    </div>
                  </div>
                  <div className='nav-button2-sub'>
                    <p style={{  marginTop : "18px" }}>Cart</p>

                  </div>
                  
                </div>
                <div className="nav-button2">
                <div style={{ position : "relative" }}>
                  <div style={{ marginTop : "8px" }}>
                        <FaHeart size={20} />
                        <span className="bubble-count2">12</span>
                      </div>
                  </div>
                  <div className='nav-button2-sub' >
                    <p style={{ width: "auto", marginTop : "18px" }}>Wish List</p>

                  </div>
                </div>
                
              </div>
                
              </li>
            )}

          </ul>
          
          <div className="nav-buttons">
            <div className="nav-button1">
              <div style={{  position : "relative" }}>
                  <div style={{ marginTop : "8px" }}>
                    <FaShoppingCart size={20} />
                    <span className="bubble-count">2</span>
                  </div>
              </div>
              <div className='nav-button1-sub'>
                <p style={{ fontSize: "15px", marginTop : "18px" }}>Cart</p>

              </div>
            </div>
            <div className="nav-button1">
              <div style={{ position : "relative" }}>
                  <div style={{ marginTop : "8px" }}>
                    <FaHeart size={20} />
                    <span className="bubble-count2">12</span>
                  </div>
              </div>
              <div className='nav-button1-sub' >
                <p style={{ width: "auto",  fontSize: "15px", marginTop : "18px" }}>Wish List</p>

              </div>
              
            </div>
            <div className="nav-button1" onClick={toggleDropdown} ref={dropdownRefsub}>
              <div style={{ position : "relative" }}>
                  <div style={{ marginTop : "0px" }}>
                    <img src={currentUser.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} alt="User Avatar" className="user-avatar" />
                    <span className="bubble-count3">122</span>
                  </div>
              </div>
              
             
              
                <div  className={`dropdown-menu ${dropdownOpensub ? 'open' : ''}`}   >
                  <div className="nav-button1">
                    <div style={{ position : "relative" }}>
                        <div style={{ marginTop : "0px" }}>
                          <img src={currentUser.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"} alt="User Avatar" className="user-avatar" />
                        </div>
                    </div>
                    <div className='nav-button2-sub' >
                        <p style={{ width: "auto",  marginTop : "10px" , whiteSpace: "nowrap" }}>{currentUser.displayName}</p>
                        
                    </div>
                  </div>
                  <div  style={{
                      backgroundColor: '#cabdbd',
                      height: 0.1,
                      borderColor : '#cabdbd'
                  }}></div>
                  <Link style={{ textDecoration: "none" }} to={'/profile'}>View Profile</Link>
                  <Link style={{ textDecoration: "none" }}  to={'/about'} > About </Link>
            
                  <a onClick={handleLogout}>Logout</a>
                </div>
              
            </div>
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
