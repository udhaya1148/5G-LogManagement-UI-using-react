import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Login.css'

function Login() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  function showSidebar() {
    setSidebarVisible(true);
  }

  function hideSidebar() {
    setSidebarVisible(false);
  }

  function login(event) {
    event.preventDefault();
    setPopupVisible(true);
  }

  function enter(event) {
    event.preventDefault();
    setPopupVisible(true);
    setSidebarVisible(false); // Change to false to hide the sidebar
  }

  function ValidateForm(event) {
    
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username.toLowerCase() === 'admin' && password === 'admin') {
      navigate('/maindashboard')
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }

  return (
      <div className='logincontainer'>
        <nav>
          <ul className={`sidebar1 ${sidebarVisible ? 'show1' : 'hide1'}`}>
            <li className="close-button" onClick={hideSidebar}>
              <Link to="#" className="nav-link1">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </Link>
            </li>
            <li><Link to="/home" className="nav-link1">Home</Link></li>
            <li><Link to="#" className="nav-link1">About</Link></li>
            <li><Link to="#" className="nav-link1">Contact</Link></li>
            <li className="enter" onClick={enter}><Link to="#" className="nav-link1">Login</Link></li>
          </ul>

          <ul>
            <li className="hide1"><Link to="/" className="nav-link">Home</Link></li>
            <li className="hide1"><Link to="#" className="nav-link">About</Link></li>
            <li className="hide1"><Link to="#" className="nav-link">Contact</Link></li>
            <li className="hide1" onClick={login}><Link to="#" className="nav-link">Login</Link></li>
            <li className="menu-button" onClick={showSidebar}>
              <Link to="#" className="nav-link1">
                <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>

        {popupVisible && (
          <div className="popup show1">
            <form id="loginForm" onSubmit={ValidateForm}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
  );
}

export default Login;
