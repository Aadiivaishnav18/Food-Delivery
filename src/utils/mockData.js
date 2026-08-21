const resList = [

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
            distance: "4.1 km",
            isOpen: true,
            promoted: true,
            discount: "40% OFF",
            googleRating: "4.3 (6.2K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100005",
            name: "Chinese Wok",

            image:
                "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80",

            locality: "Raja Park",
            area: "Jaipur",
            costForTwo: "₹400 for two",

            cuisines: [
                "Chinese",
                "Asian",
                "Noodles",
                "Momos"
            ],

            rating: 4.1,
            totalRatings: "7.5K+",
            deliveryTime: "20-25 mins",
            distance: "2.8 km",
            isOpen: true,
            promoted: true,
            discount: "50% OFF",
            googleRating: "4.1 (5.8K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100006",
            name: "Punjabi Tadka",

            image:
                "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",

            locality: "Tonk Road",
            area: "Jaipur",
            costForTwo: "₹600 for two",

            cuisines: [
                "North Indian",
                "Punjabi",
                "Mughlai",
                "Tandoor"
            ],

            rating: 4.5,
            totalRatings: "11K+",
            deliveryTime: "30-35 mins",
            distance: "5.2 km",
            isOpen: true,
            discount: "25% OFF",
            googleRating: "4.4 (8.6K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100007",
            name: "Cafe Coffee Corner",

            image:
                "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",

            locality: "Jagatpura",
            area: "Jaipur",
            costForTwo: "₹400 for two",

            cuisines: [
                "Cafe",
                "Coffee",
                "Beverages",
                "Snacks"
            ],

            rating: 4.3,
            totalRatings: "5.6K+",
            deliveryTime: "15-20 mins",
            distance: "1.9 km",
            isOpen: true,
            promoted: true,
            discount: "20% OFF",
            googleRating: "4.4 (3.2K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100008",
            name: "Mithai Junction",

            image:
                "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",

            locality: "Bapu Nagar",
            area: "Jaipur",
            costForTwo: "₹300 for two",

            cuisines: [
                "Sweets",
                "Desserts",
                "Indian",
                "Beverages"
            ],

            rating: 4.6,
            totalRatings: "15K+",
            deliveryTime: "20-25 mins",
            distance: "3.5 km",
            isOpen: true,
            veg: true,
            badge: "Pure Veg",
            discount: "10% OFF",
            googleRating: "4.5 (9.8K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100009",
            name: "Cake & Cream",

            image:
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",

            locality: "Pratap Nagar",
            area: "Jaipur",
            costForTwo: "₹350 for two",

            cuisines: [
                "Bakery",
                "Cakes",
                "Desserts",
                "Ice Cream"
            ],

            rating: 4.4,
            totalRatings: "4.7K+",
            deliveryTime: "25-30 mins",
            distance: "4.6 km",
            isOpen: true,
            promoted: true,
            discount: "30% OFF",
            googleRating: "4.3 (3.1K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100010",
            name: "Healthy Bowl",

            image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

            locality: "Civil Lines",
            area: "Jaipur",
            costForTwo: "₹450 for two",

            cuisines: [
                "Healthy Food",
                "Salads",
                "Continental",
                "Protein"
            ],

            rating: 4.5,
            totalRatings: "3.2K+",
            deliveryTime: "20-25 mins",
            distance: "2.4 km",
            isOpen: true,
            veg: true,
            badge: "Healthy",
            discount: "15% OFF",
            googleRating: "4.6 (2.1K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100011",
            name: "Momos Point",

            image:
                "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",

            locality: "Vidhyadhar Nagar",
            area: "Jaipur",
            costForTwo: "₹300 for two",

            cuisines: [
                "Momos",
                "Chinese",
                "Tibetan",
                "Fast Food"
            ],

            rating: 4.2,
            totalRatings: "6.1K+",
            deliveryTime: "15-20 mins",
            distance: "2.7 km",
            isOpen: true,
            promoted: true,
            discount: "40% OFF",
            googleRating: "4.2 (4.4K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100012",
            name: "Royal Rajasthan Thali",

            image:
                "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80",

            locality: "MI Road",
            area: "Jaipur",
            costForTwo: "₹550 for two",

            cuisines: [
                "Rajasthani",
                "Thali",
                "North Indian",
                "Indian"
            ],

            rating: 4.7,
            totalRatings: "18K+",
            deliveryTime: "30-35 mins",
            distance: "4.8 km",
            isOpen: true,
            veg: true,
            badge: "Pure Veg",
            discount: "20% OFF",
            googleRating: "4.6 (12K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100013",
            name: "Tandoori Nights",

            image:
                "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",

            locality: "Sodala",
            area: "Jaipur",
            costForTwo: "₹650 for two",

            cuisines: [
                "Tandoor",
                "Kebab",
                "Mughlai",
                "North Indian"
            ],

            rating: 4.3,
            totalRatings: "7.8K+",
            deliveryTime: "30-35 mins",
            distance: "5.1 km",
            isOpen: true,
            promoted: true,
            discount: "35% OFF",
            googleRating: "4.2 (5.4K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100014",
            name: "Pasta Street",

            image:
                "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",

            locality: "Malviya Nagar",
            area: "Jaipur",
            costForTwo: "₹500 for two",

            cuisines: [
                "Italian",
                "Pasta",
                "Pizza",
                "Continental"
            ],

            rating: 4.4,
            totalRatings: "5.9K+",
            deliveryTime: "25-30 mins",
            distance: "3.7 km",
            isOpen: true,
            discount: "25% OFF",
            googleRating: "4.3 (4.1K+)",
            link: "https://www.swiggy.com/"
        }
    },


    {
        type: "restaurant",
        data: {
            id: "100015",
            name: "Ice Cream Factory",

            image:
                "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",

            locality: "Vaishali Nagar",
            area: "Jaipur",
            costForTwo: "₹250 for two",

            cuisines: [
                "Ice Cream",
                "Desserts",
                "Shakes",
                "Beverages"
            ],

            rating: 4.6,
            totalRatings: "8.4K+",
            deliveryTime: "15-20 mins",
            distance: "2.2 km",
            isOpen: true,
            veg: true,
            badge: "Pure Veg",
            discount: "50% OFF",
            googleRating: "4.5 (6.2K+)",
            link: "https://www.swiggy.com/"
        }
    }

];

export default resList;