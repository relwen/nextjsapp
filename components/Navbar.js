import Link from "next/link"
function Navbar() {

    return (
        <nav>
            <ul><Link href="/">Accueil</Link>
                <Link href="/about">A propos de nous</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/props">Plus</Link>
            </ul>
        </nav>
    )
}

export default Navbar;