
import "./logs.css";
import { Link } from "react-router-dom";

function DashboardNav() {
  // const [sidebarVisible, setSidebarVisible] = useState(false);

  // const showSidebar = () => setSidebarVisible(true);
  // const hideSidebar = () => setSidebarVisible(false);

  return (
    <div className="dashcontainer">
      <nav>
        {/* <ul className={`sidebar ${sidebarVisible ? "show" : "hide"}`}>
          <li className="close-button" onClick={hideSidebar}>
            <Link to="#" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/dashhome" className="nav-link">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link to="#" className="dropbtn">
              Dashboards
            </Link>
            <div className="dropdown-content">
              <Link to="/gnodeb" className="nav-link">GnodeB</Link>
              <Link to="/amf" className="nav-link">AMF</Link>
              <Link to="/smf" className="nav-link">SMF</Link>
              <Link to="/upf" className="nav-link">UPF</Link>
              <Link to="/uedetails" className="nav-link">UE-Details</Link>
              <Link to="/ran" className="nav-link">Ran</Link>
            </div>
          </li>
          <li>
            <Link to="/logout" className="nav-link">
              Logout
            </Link>
          </li>
        </ul> */}
        <ul>
          {/* <li className="menu-button" onClick={showSidebar}>
            <Link to="#" className="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </Link>
          </li> */}
        </ul>
      </nav>

      <div className="header">
        <div className="side-nav">
          <ul className="menus-icons">
            <li>
              <Link to="/dashhome">
                <img src="src/images/house_6610122.png" alt="Home Icon" />
                <p>Home</p>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="#"><img src="src/images/dashboard_7152431.png"></img>
                <p>Dashboards</p> 
              </Link>
              <div className="dropdown-content">
                <Link to="/gnodeb" className="nav-link">GnodeB</Link>
                <Link to="/amf" className="nav-link">AMF</Link>
                <Link to="/smf" className="nav-link">SMF</Link>
                <Link to="/upf" className="nav-link">UPF</Link>
                <Link to="/uedetails" className="nav-link">UE-Details</Link>
                <Link to="/ran" className="nav-link">Ran</Link>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/logout">
                <img src="src/images/logout_11130005.png" alt="Logout Icon" />
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
