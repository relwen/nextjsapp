import { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
export default function Dashboard(){

    const {user}=useContext(UserContext)



    return(
        <>
        {user && <h1>Dashboard</h1>}
        {!user && <h1>Authentifiez vous</h1>}
        </>
    )
}
