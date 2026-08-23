const Restruarent = ({ resData }) => {
    const {
        name,
        image,
        cuisines,
        rating,
        deliveryTime,
    } = resData.data;

    return (
        <div className="res-cart">
            <img
                alt={name}
                className="res-logo"
                src={image}
            />

            <div className="text">
                <h3>{name}</h3>

                <h3>{cuisines.join(", ")}</h3>

                <h4>
                    ⭐ {rating} | {deliveryTime}
                </h4>
            </div>
        </div>
    );
};

export default Restruarent;