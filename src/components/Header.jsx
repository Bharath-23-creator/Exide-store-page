import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Products">Products</Link>
      <Link to="/Service">Service</Link>

      
      <Link to="/Cart" className="cart-link">
        Cart
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>
    </nav>
  );
}
