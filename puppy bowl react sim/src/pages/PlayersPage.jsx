import AllPlayers from "../components/AllPlayers"
import { useGetPlayersQuery } from "../reducers/PuppyBowlApi"
import SinglePlayer from "../componenets/SinglePlayer"

function PlayersPage() {

    const { data, error, isLoading } = useGetPlayersQuery();

    return (
        <>
            <AllPlayers/>
               
            <h1>Players Page</h1>
        </>
    )
}

export default PlayersPage;