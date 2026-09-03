import { useState } from "react";
import Restruarent from "./RestuarantCards";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState(resList);

    return (
        <div>
            <div className="filter"> 
                <button className="filter_btn" onClick={()=>{

                    const filterList = listOfRestuarant.filter((res)=> res.data.rating > 4.5)

                    setListOfRestuarant(filterList);
                }}>
                    Top Rated Restruarent
                </button>
            </div>

            <div className="res-container">
                {listOfRestuarant.map((restaurant) => (
                    <Restruarent
                        key={restaurant.data.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;