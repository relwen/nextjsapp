import Head from "next/head";
import { useEffect, useState } from "react";
function Blog(){

    const URL="https://jsonplaceholder.typicode.com/users";

    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(posts =>setPosts(posts))
    },[])
    return(
        <>
            <Head>Blog</Head>

            <h1>Blog</h1>

            {posts.map(p=> <h2 key={p.id}>{p.na}</h2>)} 

            <pre>{JSON.stringify(posts,null,2)}</pre>

            
        </>
    );
}


export default Blog;