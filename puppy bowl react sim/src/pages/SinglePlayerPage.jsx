import { useParams } from "react-router-dom";
import { useGetPlayerByName } from ".reducers/PuppyBowlApi"

function SinglePlayerPage () {

    const params = useParams();

    const { data, error, isLoading } = useGetPlayerByName(params.id)

    console.log(data)

}

export default SinglePlayerPage;