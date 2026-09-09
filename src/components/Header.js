import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div id="header">

            <div className="logo">
                <img className="image-logo" alt="logo" src={LOGO_URL} />
            </div>

            <div className="location">Location📍</div>

            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/signin">SignIn/SignUp</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Header;