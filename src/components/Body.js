import Restruarent from "./RestuarantCards";
import resList from "../utils/mockData";

const Body = () => {

    return (
        <div>
            <div className="search">🔍Search Bar</div>
            <div className="res-container">
                <Restruarent  resData={resList}/>
            </div>
        </div>

    )


}
export default Body;