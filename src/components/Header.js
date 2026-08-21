import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <div id="header">

            <div className="logo">
                <img className="image-logo" alt="logo" src={LOGO_URL} />
            </div>

            <div className="location">Location📍</div>

            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>About Us </li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>SignIn/SignUp</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;