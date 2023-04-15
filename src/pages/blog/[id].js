import Link from "next/link";

export async function getStaticPaths(){

    const URL="https://jsonplaceholder.typicode.com/users";

    const res=await fetch(URL);
    const posts=await res.json()

    const paths=posts.map(p=>({params: {id: p.id.toString()}}))
    
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({params}){
    const URL="https://jsonplaceholder.typicode.com/users/" + params.id;
    const res=await fetch(URL);
    const post=await res.json();
    return {
        props: {post},
    };

}


export default function Post(post){
    return (
        <>
            <h1>Post</h1>
            <br />
            
            
            <h1>{post.post.name}</h1>

            <pre>
                {JSON.stringify(post)}
            </pre>
            
            <br />
            <br />

            <Link href="/props">
                Retour
            </Link>

        </>
    );
}

