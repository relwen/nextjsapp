import Link from "next/link";

function Post(){
    return (
        <>
            <h1>Post</h1>
            <br />
            <Link href="/props">
                Retour
            </Link>



        </>
    )
}

export default Post;


export async function getStaticPaths(){

    const URL="https://jsonplaceholder.typicode.com/users";

    const res=await fetch(URL);
    const posts=await res.json()
    return {
        props: {posts}
    }
    return ;
}