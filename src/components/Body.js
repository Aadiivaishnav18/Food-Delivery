import { useEffect, useState } from "react";
import Restruarent from "./RestuarantCards";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestuarant, setListOfRestuarant] = useState([]);
    const [filterList, setfilterList] = useState([]);
    const [searchtext, setsearchText] = useState("");

    const fetchData = async () => {
      
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124&lng=75.7873&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();

            const restaurants =
                json?.data?.cards
                    ?.map(
                        (card) =>
                            card?.card?.card?.gridElements?.infoWithStyle
                                ?.restaurants
                    )
                    ?.filter(Boolean)
                    ?.flat() || [];

            // Remove duplicate restaurants
            const uniqueRestaurants = Array.from(
                new Map(
                    restaurants.map((restaurant) => [
                        restaurant.info.id,
                        restaurant,
                    ])
                ).values()
            );

            setListOfRestuarant(uniqueRestaurants);
            setfilterList(uniqueRestaurants);

        }


    useEffect(() => {
        fetchData();
    }, []);

    // Shimmer while loading
    if (listOfRestuarant.length === 0) {
        return <Shimmer />;
    }


    return (
        <div id="body">

            <div className="filter">

                {/* Search */}
                <div className="search">

                    <input
                        type="text"
                        className="search-box"
                        value={searchtext}
                        onChange={(e) => {
                            setsearchText(e.target.value);
                        }}
                        placeholder="Search Restaurant"
                    />

                    <button
                        className="btn-search"
                        onClick={() => {

                            const filteredRestaurant =
                                listOfRestuarant.filter((res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchtext.toLowerCase())
                                );

                            setfilterList(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>

                </div>


                {/* Top Rated */}
                <button
                    className="filter_btn"
                    onClick={() => {

                        const filteredRestaurant =
                            listOfRestuarant.filter(
                                (res) => res.info.avgRating > 4.5
                            );

                        setfilterList(filteredRestaurant);
                    }}
                >
                    Top Rated Restaurant
                </button>

            </div>


            {/* Restaurant List */}
            <div className="res-container">

                {filterList.map((restaurant) => (
                    <Restruarent
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}

            </div>

        </div>
    );
};

export default Body;