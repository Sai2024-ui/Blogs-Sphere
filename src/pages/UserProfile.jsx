import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import "../styles/pages.css";

const BASE = "https://jsonplaceholder.typicode.com";

export default function UserProfile() {
  const { id } = useParams();
  const { data: user, loading: userLoading, error: userError } = useFetch(`${BASE}/users/${id}`)
  
  const { data: userPosts, loading: postsLoading } = useFetch(`${BASE}/posts?userId=${id}`)

  if (userLoading || postsLoading) return <p className="status">Loading…</p>;
  if (userError) return <p className="status status--error">Something went wrong.</p>;

  return (
    <section className="page">
      <UserCard name={user.name} email={user.email} company={user.company} website={user.website} />

      <h2 className="page__subheading">
        Posts by {user.name}
      </h2>

      <ul className="user-posts">
          {userPosts.map(post =>(
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}