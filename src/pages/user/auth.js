import { useContext, useState } from "react";
import { UserContext } from "../../../Contexts/UserContext";
import { useRouter } from "next/router";

export default function Auth(){

    const [username,setUsername]=useState('')
    const {setUser}=useContext(UserContext)
    const router=useRouter()
    const onSubmit=(e)=>{
        e.preventDefault();

        if(username!=null)
            setUser(username)
            router.push("/dashboard")
        
    }
    
    const handleChange=(e)=>{
        setUsername(e.target.value)
        
    }


    return(
        <form onSubmit={onSubmit}>
            <input type="text" onChange={handleChange} />

            <button>Connexion</button>
        </form>
    )
}