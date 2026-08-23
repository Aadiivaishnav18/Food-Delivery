import { useState } from "react";
import Restruarent from "./RestuarantCards";

const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([
        {
        type: "restaurant",
        data: {
            id: "100001",
            name: "Burger Singh",

            image:
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",

            locality: "Vaishali Nagar",
            area: "Jaipur",
            costForTwo: "₹350 for two",

            cuisines: [
                "Burgers",
                "Fast Food",
                "American"
            ],

            rating: 4.3,
            totalRatings: "8.2K+",
            deliveryTime: "20-25 mins",
            distance: "2.1 km",
            isOpen: true,
            promoted: true,
            discount: "20% OFF",
            googleRating: "4.4 (5.2K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100002",
            name: "The Biryani Life",

            image:
                "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",

            locality: "Malviya Nagar",
            area: "Jaipur",
            costForTwo: "₹450 for two",

            cuisines: [
                "Biryani",
                "Mughlai",
                "North Indian"
            ],

            rating: 4.4,
            totalRatings: "12K+",
            deliveryTime: "25-30 mins",
            distance: "3.2 km",
            isOpen: true,
            promoted: true,
            discount: "30% OFF",
            googleRating: "4.2 (7.1K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100003",
            name: "Dosa House",

            image:
                "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",

            locality: "C Scheme",
            area: "Jaipur",
            costForTwo: "₹250 for two",

            cuisines: [
                "South Indian",
                "Dosa",
                "Idli",
                "Breakfast"
            ],

            rating: 4.5,
            totalRatings: "6.8K+",
            deliveryTime: "15-20 mins",
            distance: "1.8 km",
            isOpen: true,
            veg: true,
            badge: "Pure Veg",
            discount: "20% OFF",
            googleRating: "4.5 (4.3K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100004",
            name: "Pizza Paradise",

            image:
                "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",

            locality: "Mansarovar",
            area: "Jaipur",
            costForTwo: "₹500 for two",

            cuisines: [
                "Pizza",
                "Italian",
                "Fast Food"
            ],

            rating: 4.2,
            totalRatings: "9.4K+",
            deliveryTime: "25-30 mins",
            discount: "40% OFF",
            googleRating: "4.3 (6.2K+)",
            link: "https://www.swiggy.com/"
        }
    },

    ]);

    return (
        <div>
            <div className="search">🔍 Search Bar</div>

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