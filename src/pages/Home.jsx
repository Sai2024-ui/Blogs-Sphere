import { useState } from "react";
import useFetch from "../hooks/useFetch";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";

const PAGE_SIZE = 10;
const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Home(){

 const [query,setQuery] = useState("");
 const [visible,setVisible] = useState(PAGE_SIZE);

 const {
   data: posts,
   loading,
   error
 } = useFetch(API_URL);


 const filteredPosts =
 (posts ?? []).filter(post =>
   post.title
   .toLowerCase()
   .includes(query.toLowerCase())
 );


 const visiblePosts =
 filteredPosts.slice(0,visible);


 if(loading){
   return <p>Loading posts...</p>
 }

 if(error){
   return <p>Error: {error}</p>
 }

 return(
<section className="page">
      <h1 className="page__heading">All Posts</h1>

      <SearchBar
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setVisible(PAGE_SIZE); // reset to page 1 whenever the search changes
        }}
      />

      <div className="post-grid">
        {visiblePosts.map(post=>(
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        ))}
      </div>
      {visible < filteredPosts.length && (
        <button
          onClick={()=>
          setVisible(prev=>prev+PAGE_SIZE)
          }
          className="load-more"
        >
          Load More
        </button>
      )}
    </section>
 )
}