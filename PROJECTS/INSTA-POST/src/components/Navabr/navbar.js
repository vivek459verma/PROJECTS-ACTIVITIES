import "./navbar.css";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Navbar = () => (
  <nav>
    <div className="nav-content">
      <button className="logo-button" type="button">
        <img
          src="https://res.cloudinary.com/saiuttej/image/upload/v1686387561/Insta%20Share%20Project%20Assets/Instagram_Logo_qbqh8e.png"
          alt="website logo"
        />
      </button>

      <ul className="menu-list-container">
        <li>
          <AiOutlineHome className="menu-icon" />
          <button type="button" className="menu-item">
            Home
          </button>
        </li>

        <li>
          <CgProfile className="menu-icon" />
          <button type="button" className="menu-item">
            Profile
          </button>
        </li>
        <li>
          <AiOutlineHeart className="menu-icon" />
          <button type="button" className="menu-item">
            Notifications
          </button>
        </li>
        <li>
          <AiOutlinePlusCircle className="menu-icon" />
          <button type="button" className="menu-item">
            Create
          </button>
        </li>

        <li>
          <button type="button" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
