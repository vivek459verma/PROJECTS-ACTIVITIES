import "./navbar.css";

const Navbar = (props) => {
  const { count } = props;
  return (
    <nav>
      <img
        className="logo"
        src="https://res.cloudinary.com/dsf2gec5l/image/upload/v1675319061/WebDev/E-commerce%20project/logo1_v1qqoj.webp"
        alt="Website-logo"
      />
      <ul className="nav-menu">
        <li>Home</li>
        <li>Products</li>
        <li className="cart-menu-con">
          Cart <span className="cart-count">{count}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
