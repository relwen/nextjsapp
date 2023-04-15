import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { useRouter } from "next/router";
function Navbar() {
    const {user,setUser}=useContext(UserContext)

    const router=useRouter()
    const logout=(e)=>{
        setUser(null)
    }

    const handleClick=(e)=>{
        console.log(router)
    }
    return (
        <nav onClick={handleClick}>
            <ul><Link href="/">Accueil</Link>
                <Link href="/about">A propos de nous</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/props">Plus</Link>
                {!user && <Link href="user/auth">Se connecter</Link>}
                {user &&  <button onClick={logout}>Bonjour <strong>{user}</strong> Déconnexion</button>}
            </ul>
        </nav>
    )
}

export default Navbar;