import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CommentCard from "../components/CommentCard";
import "../styles/pages.css";

const BASE = "https://jsonplaceholder.typicode.com";

export default function PostDetail() {
  const { id } = useParams();
  const {data: post, loading: postLoading, error: postError} = useFetch(`${BASE}/posts/${id}`)

  const { data: comments, loading: commentsLoading } = useFetch(`${BASE}/posts/${id}/comments`)

  if (postLoading || commentsLoading) return <p className="status">Loading…</p>;
  if (postError) return <p className="status status--error">Something went wrong.</p>;

  return (
    <section className="page">
      <article className="post-detail">
        <h1 className="post-detail__title">{post.title}</h1>
        <p className="post-detail__meta">
          <Link to={`/users/${post.userId}`}>By User #{post.userId}</Link>
        </p>
        <p className="post-detail__body">{post.body}</p>
      </article>

      <section className="comments">
        <h2 className="comments__heading">
          Comments {comments ? `(${comments.length})` : ""}
        </h2>
            {comments?.map(comment =>(
              <CommentCard 
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            ))}
      </section>
    </section>
  );
}