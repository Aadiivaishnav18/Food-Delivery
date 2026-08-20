import React from "react";
import ReactDOM from "react-dom/client";



/* 
-Header 
  - Logo name - Namaste Food 
  -list-[Home, About Us, Contact Us , Cart]

-Body
  -Search 
  -Restruarent Section
    -Restrurent Cards - 8 (each row-4)

-Footer 
  -Copyright 
  -links etc:
*/


const Header = () => {
    return (
        <div id="header">

            <div className="logo">
                <img className="image-logo" alt="logo" src="https://static.wixstatic.com/media/a8430f_f10c682a7d2147a49792f5b471fa1530~mv2.jpg/v1/fit/w_2500,h_1330,al_c/a8430f_f10c682a7d2147a49792f5b471fa1530~mv2.jpg"  />
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



const AppLayout = () => {

    return (
        <div id="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)


