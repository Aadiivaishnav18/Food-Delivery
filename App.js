import React  from "react";
import ReactDOM from "react-dom/client";


const AppLayout =() =>{

return(
    <div id = "app">
    <h1>Namaste Food</h1>
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)