import { useGetPlayerByNameQuery } from "../reducers/PuppyBowlApi";
import { useDispatch  } from "react-redux";
import { Link } from "react-router-dom";


function SinglePlayer (props) {

    const {data, error, isLoading} = useGetPlayerByNameQuery(props.name);
    const dispatch = useDispatch();



    return (
        <div className={'playerProduct'}>
            {isLoading?<h1>Loading...</h1>:<Link to={`/players/${data.name}`}>
                <h1>{data.name}</h1>
                {/* <img src={data.imageurl} */}
            </Link>}
        </div>
    
    )
}

export default SinglePlayer;