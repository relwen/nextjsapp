import Head from "next/head";
import Link from "next/link";
function Props({posts}){

    
    return(
        <>
            <Head>Props</Head>

            <h1>Props</h1>

            {posts.map(p=> (
                <Link href={"/blog/" + p.id}>
                    <h2 key={p.id}>{p.name}</h2>
                </Link>
            ))} 

            <pre>{JSON.stringify(posts,null,2)}</pre>

            
        </>
    );
}


export default Props;

export async function getStaticProps(){
    const URL="https://jsonplaceholder.typicode.com/users";

    const res=await fetch(URL);
    const posts=await res.json()
    return {
        props: {posts}
    }

}